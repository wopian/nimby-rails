import { TRAIN_TYPE } from '../constants/index.js'
import {
  NEW_LINE,
  calculateEmptyMass,
  calculatePower,
  calculatePrice,
  calculateCosts,
  createTrainUnit,
  createTrainMultipleUnit,
  tonToKg
} from '../index.js'

// type: commuter|higherspeed
export const createTrain = ({
  train_type, name, names, min_cars, max_cars, length, width, power, max_speed, max_pax, empty_mass
} = {}) => {
  if (!train_type) train_type = 200 <= max_speed
    ? TRAIN_TYPE.HIGHSPEED
    : (160 <= max_speed
      ? TRAIN_TYPE.HIGHERSPEED
      : (80 < max_speed
        ? TRAIN_TYPE.COMMUTER
        : TRAIN_TYPE.TRAM
      )
    )
  if (!power) power = calculatePower({ train_type, max_speed }).power
  if (empty_mass) empty_mass = { head: tonToKg(empty_mass.head), car: tonToKg(empty_mass.car) }
  else empty_mass = calculateEmptyMass({ train_type, length, empty_mass }).empty_mass

  const { price } = calculatePrice({ train_type, empty_mass, length })
  const { cost_per_km_per_pax, cost_per_day } = calculateCosts({ train_type, price })

  return [
    createTrainUnit({ train_type, unit_type: 'head', name, names, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day }),
    createTrainUnit({ train_type, unit_type: 'car', name, names, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day }),
    createTrainMultipleUnit({ name, min_cars, max_cars })
  ]
}