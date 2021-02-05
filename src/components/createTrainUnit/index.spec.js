import test from 'ava'
import { createTrainUnit } from '../index.js'

test('train car unit', t => {
  t.deepEqual(createTrainUnit({
    unit_type: 'car',
    name: 'Example 100',
    length: 20,
    width: 2.9,
    max_speed: 120,
    power: 190,
    empty_mass: { head: 28_000, car: 26_000 },
    price: { head: 1_950_000, car: 1_600_000 },
    max_pax: { head: 35, car: 60 },
    cost_per_km_per_pax: 0.05,
    cost_per_day: { head: 65, car: 55 }
  }), {
    TrainUnit: {
      cost_per_day: 55,
      cost_per_km_per_pax: 0.05,
      empty_mass: 26_000,
      id: 'wopian_example_100_car',
      length: 20,
      max_pax: 60,
      max_speed: 120,
      name_en: 'Example 100 (Middle car)',
      name_loc: 'wopian_example_100_car_name',
      power: 190,
      price: 1_600_000,
      schema: 1,
      tex_base: 'placeholder_commuter/car_0.png',
      tex_decors: 'placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png',
      tex_m_height: 3.75,
      tex_m_width: 30,
      tex_top: 'placeholder_commuter/car_2.png',
      width: 2.9,
    }
  })
})

test('train head unit', t => {
  t.deepEqual(createTrainUnit({
    unit_type: 'head',
    name: 'Example 200',
    length: 21,
    width: 2.6,
    max_speed: 140,
    power: 250,
    empty_mass: { head: 29_000, car: 27_000 },
    price: { head: 2_250_000, car: 2_000_000 },
    max_pax: { head: 25, car: 80 },
    cost_per_km_per_pax: 0.05,
    cost_per_day: { head: 75, car: 65 }
  }), {
    TrainUnit: {
      cost_per_day: 75,
      cost_per_km_per_pax: 0.05,
      empty_mass: 29_000,
      id: 'wopian_example_200_head',
      length: 21,
      max_pax: 25,
      max_speed: 140,
      name_en: 'Example 200 (End car)',
      name_loc: 'wopian_example_200_head_name',
      power: 250,
      price: 2_250_000,
      schema: 1,
      tex_base: 'placeholder_commuter/loco_0.png',
      tex_decors: 'placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png',
      tex_m_height: 3.75,
      tex_m_width: 30,
      tex_top: 'placeholder_commuter/loco_2.png',
      width: 2.6,
    }
  })
})

test('train car unit with differing lengths', t => {
  t.deepEqual(createTrainUnit({
    unit_type: 'car',
    name: 'Example 300',
    length: { head: 20.8, car: 19.5 },
    width: 2.6,
    max_speed: 140,
    power: 250,
    empty_mass: { head: 29_000, car: 27_000 },
    price: { head: 2_250_000, car: 2_000_000 },
    max_pax: { head: 25, car: 80 },
    cost_per_km_per_pax: 0.05,
    cost_per_day: { head: 75, car: 65 }
  }), {
    TrainUnit: {
      cost_per_day: 65,
      cost_per_km_per_pax: 0.05,
      empty_mass: 27_000,
      id: 'wopian_example_300_car',
      length: 19.5,
      max_pax: 80,
      max_speed: 140,
      name_en: 'Example 300 (Middle car)',
      name_loc: 'wopian_example_300_car_name',
      power: 250,
      price: 2_000_000,
      schema: 1,
      tex_base: 'placeholder_commuter/car_0.png',
      tex_decors: 'placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png',
      tex_m_height: 3.75,
      tex_m_width: 30,
      tex_top: 'placeholder_commuter/car_2.png',
      width: 2.6,
    }
  })
})

test('train head unit with differing lengths', t => {
  t.deepEqual(createTrainUnit({
    unit_type: 'head',
    name: 'Example 300',
    length: { head: 20.8, car: 19.5 },
    width: 2.6,
    max_speed: 140,
    power: 250,
    empty_mass: { head: 29_000, car: 27_000 },
    price: { head: 2_250_000, car: 2_000_000 },
    max_pax: { head: 25, car: 80 },
    cost_per_km_per_pax: 0.05,
    cost_per_day: { head: 75, car: 65 }
  }), {
    TrainUnit: {
      cost_per_day: 75,
      cost_per_km_per_pax: 0.05,
      empty_mass: 29_000,
      id: 'wopian_example_300_head',
      length: 20.8,
      max_pax: 25,
      max_speed: 140,
      name_en: 'Example 300 (End car)',
      name_loc: 'wopian_example_300_head_name',
      power: 250,
      price: 2_250_000,
      schema: 1,
      tex_base: 'placeholder_commuter/loco_0.png',
      tex_decors: 'placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png',
      tex_m_height: 3.75,
      tex_m_width: 30,
      tex_top: 'placeholder_commuter/loco_2.png',
      width: 2.6,
    }
  })
})


test('train unit with named cars and uniform max_pax', t => {
  t.deepEqual(createTrainUnit({
    unit_type: 'head',
    name: 'Example 400',
    names: { head: 'KuHa 400', car: 'DeHa 400' },
    length: { head: 20, car: 20 },
    width: 2.6,
    max_speed: 120,
    power: 250,
    empty_mass: { head: 29_000, car: 29_000 },
    price: { head: 2_250_000, car: 2_000_000 },
    max_pax: 25,
    cost_per_km_per_pax: 0.05,
    cost_per_day: { head: 75, car: 65 }
  }), {
    TrainUnit: {
      cost_per_day: 75,
      cost_per_km_per_pax: 0.05,
      empty_mass: 29_000,
      id: 'wopian_example_400_head',
      length: 20,
      max_pax: 25,
      max_speed: 120,
      name_en: 'KuHa 400',
      name_loc: 'wopian_example_400_head_name',
      power: 250,
      price: 2_250_000,
      schema: 1,
      tex_base: 'placeholder_commuter/loco_0.png',
      tex_decors: 'placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png',
      tex_m_height: 3.75,
      tex_m_width: 30,
      tex_top: 'placeholder_commuter/loco_2.png',
      width: 2.6,
    }
  })
})
