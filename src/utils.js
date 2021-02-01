import { stringify as ini } from 'ini'
import { snakeCase } from 'snake-case'

const NEW_LINE = '\n'
const TEXTURE_DIR = 'default'
export const TRAIN_TYPE = {
  HIGHSPEED: 'highspeed', // > 250 km/h
  EXPRESS: 'express', // Intercity
  COMMUTER: 'commuter'
}

const tonToKg = ton => ton * 907

// derived from price / cost_per_day
const calcRunningCosts = ({ train_type, price } = {}) => {
  switch (train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / 7_240),
          car: Math.round(price.car / 7_240)
        }
      }
    case TRAIN_TYPE.EXPRESS:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / 41_510),
          car: Math.round(price.car / 41_510)
        }
      }
    case TRAIN_TYPE.COMMUTER:
    default:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / 45_238),
          car: Math.round(price.car / 45_238)
        }
      }
  }
}

const calcPower = ({ train_type, max_speed } = {}) => {
  // 3.0681818 * ((0.9 * power) / max_speed) = tractive
  //
  // a = 3.0681818 * 0.9
  // b = 1 / a
  // step 1. (a*power) / a = (max_speed * tractive) / a
  // step 2. power = b * max_speed * tractive
  const K = 3.0681818
  const N = 0.9
  const formula = tractive => Math.round((1 / (K * N)) * (max_speed) * tractive)

  switch (train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return {
        // power: formula((8.67857138 / 6) * min_cars)
        // power: formula(K * ((N * 1100) / 350)) // 6
        power: formula(K * ((N * 800) / 220))
      }
    case TRAIN_TYPE.EXPRESS:
      return {
        power: formula(K * ((N * 190) / 120))
      }
    case TRAIN_TYPE.COMMUTER:
    default:
      return {
        // power: formula((4.37215906 / 2) * min_cars)
        // power: formula(K * ((N * 190) / 120)) // 2-8
        power: formula(K * ((N * 150) / 100))
      }
  }
}

// derived from empty_mass / length
const calcEmptyMass = ({ train_type, length } = {}) => {
  const M = type => {
    switch(type) {
      case TRAIN_TYPE.HIGHSPEED:
        return 55_875 / 25
      case TRAIN_TYPE.EXPRESS:
        return 29_500 / 20
      case TRAIN_TYPE.COMMUTER:
      default:
        return 22_500 / 16.25
    }
  }

  if (String === typeof length) length = { head: length, car: length }
  return {
    empty_mass: {
      head: Math.round(M(train_type) * length.head),
      car: Math.round(M(train_type) * length.car)
    }
  }
}

// derived from price / empty_mass
const calcPrice = ({ train_type, empty_mass } = {}) => {
  const P = type => {
    switch(type) {
      case TRAIN_TYPE.HIGHSPEED:
        return 9_000_000 / 55_875
      case TRAIN_TYPE.EXPRESS:
        return 2_200_000 / 29_500
      case TRAIN_TYPE.COMMUTER:
      default:
        return 1_500_000 / 29_500
    }
  }

  return {
    price: {
      head: Math.round(P(train_type) * empty_mass.head * 0.75),
      car: Math.round(P(train_type) * empty_mass.car * 0.75)
    }
  }
}

export const createMeta = ({ name = 'Mod Name', desc, version = '0.0.1' } = {}) => ini({
  ModMeta: {
    schema: 1,
    name,
    author: 'wopian',
    desc: desc ? desc : `Collection of trains from ${name}`,
    version
  }
})

const createTrainUnit = ({
  unitType, name, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day
} = {}) => ini({
  TrainUnit: {
    schema: 1,
    id: `${snakeCase(name)}_${unitType}`,
    name_loc: `${snakeCase(name)}_name`,
    name_en: `${name} (${'car' === unitType ? 'Middle' : 'End'} car)`,
    length: length?.car ? ('car' === unitType ? length.car : length.head) : length,
    width,
    max_speed,
    power,
    empty_mass: 'car' === unitType ? empty_mass.car : empty_mass.head,
    price: 'car' === unitType ? price.car : price.head,
    max_pax: max_pax?.car ? ('car' === unitType ? max_pax.car : max_pax.head) : max_pax,
    cost_per_km_per_pax,
    cost_per_day: 'car' === unitType ? cost_per_day.car : cost_per_day.head,
    //tex_base: `${TEXTURE_DIR}/${'car' === unitType ? 'car' : 'loco'}_0.png`,
    //tex_top: `${TEXTURE_DIR}/${'car' === unitType ? 'car' : 'loco'}_2.png`,
    //tex_decors: `${TEXTURE_DIR}/${'car' === unitType ? 'car' : 'loco'}_1_0.png`,
    //tex_m_width: 30,
    //tex_m_height: 3.75
  }
})

const createTrainMultipleUnit = ({ name, min_cars, max_cars } = {}) => ini({
  TrainMultipleUnit: {
    schema: 1,
    id: `${snakeCase(name)}_mu`,
    name: `${snakeCase(name)}_name`,
    name_en: name,
    head_id: `${snakeCase(name)}_head`,
    car_id: `${snakeCase(name)}_car`,
    tail_id: `${snakeCase(name)}_head`,
    tail_flip: true,
    min_cars,
    max_cars
  }
})

// type: commuter|express
export const createTrain = ({
  name, train_type, min_cars, max_cars, length, width, max_speed, max_pax, empty_mass
} = {}) => {
  if (empty_mass) {
    empty_mass = {
      head: tonToKg(empty_mass.head),
      car: tonToKg(empty_mass.car)
    }
  } else {
    empty_mass = calcEmptyMass({ train_type, length, empty_mass }).empty_mass
  }

  const { power } = calcPower({ train_type, max_speed })
  const { price } = calcPrice({ train_type, empty_mass })
  const { cost_per_km_per_pax, cost_per_day } = calcRunningCosts({ train_type, price })

  const headUnit = createTrainUnit({ unitType: 'head', name, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day })
  const carUnit = createTrainUnit({ unitType: 'car', name, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day })
  const multipleUnit = createTrainMultipleUnit({ name, min_cars, max_cars })

  return NEW_LINE.concat(headUnit, NEW_LINE, carUnit, NEW_LINE, multipleUnit)
}