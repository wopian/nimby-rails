import test from 'ava'
import { TRAIN_TYPE, createTrain } from '../index.js'

test('train with computed empty_mass', t => {
  t.deepEqual(createTrain({
    name: 'Example 3000',
    train_type: TRAIN_TYPE.HIGHSPEED,
    length: { head: 20, car: 22 },
    width: 2.9,
    max_speed: 280,
    max_pax: { head: 34, car: 56 }
  }), [
    {
      TrainUnit: {
        cost_per_day: 187,
        cost_per_km_per_pax: 0.05,
        empty_mass: 44_700,
        id: 'wopian_example_3000_head',
        length: 20,
        max_pax: 34,
        max_speed: 280,
        name_en: 'Example 3000 (End car)',
        name_loc: 'wopian_example_3000_head_name',
        power: 1_018,
        price: 5_472_000,
        schema: 1,
        tex_base: 'placeholder_highspeed/loco_0.png',
        tex_decors: 'placeholder_highspeed/loco_1_0.png,placeholder_highspeed/loco_1_1.png,placeholder_highspeed/loco_1_2.png,placeholder_highspeed/loco_1_5.png,placeholder_highspeed/loco_1_7.png',
        tex_m_height: 3.75,
        tex_m_width: 30,
        tex_top: 'placeholder_highspeed/loco_2.png',
        width: 2.9
      }
    },
    {
      TrainUnit: {
        cost_per_day: 172,
        cost_per_km_per_pax: 0.05,
        empty_mass: 49_022,
        id: 'wopian_example_3000_car',
        length: 22,
        max_pax: 56,
        max_speed: 280,
        name_en: 'Example 3000 (Middle car)',
        name_loc: 'wopian_example_3000_car_name',
        power: 1_018,
        price: 5_906_328,
        schema: 1,
        tex_base: 'placeholder_highspeed/car_0.png',
        tex_decors: 'placeholder_highspeed/car_1_0.png,placeholder_highspeed/car_1_1.png,placeholder_highspeed/car_1_2.png,placeholder_highspeed/car_1_5.png,placeholder_highspeed/car_1_7.png',
        tex_m_height: 3.75,
        tex_m_width: 30,
        tex_top: 'placeholder_highspeed/car_2.png',
        width: 2.9
      }
    },
    {
      TrainMultipleUnit: {
        car_id: 'wopian_example_3000_car',
        head_id: 'wopian_example_3000_head',
        id: 'wopian_example_3000_mu',
        max_cars: 6,
        min_cars: 0,
        name_en: 'Example 3000',
        name_loc: 'wopian_example_3000_name',
        schema: 1,
        tail_flip: true,
        tail_id: 'wopian_example_3000_head'
      }
    }
  ])
})

test('train with predefined empty_mass', t => {
  t.deepEqual(createTrain({
    name: 'Example 3000',
    train_type: TRAIN_TYPE.HIGHSPEED,
    length: { head: 20, car: 22 },
    width: 2.9,
    max_speed: 280,
    max_pax: { head: 34, car: 56 },
    empty_mass: { head: 40, car: 38.8 }
  }), [
    {
      TrainUnit: {
        cost_per_day: 168,
        cost_per_km_per_pax: 0.05,
        empty_mass: 40_000,
        id: 'wopian_example_3000_head',
        length: 20,
        max_pax: 34,
        max_speed: 280,
        name_en: 'Example 3000 (End car)',
        name_loc: 'wopian_example_3000_head_name',
        power: 1_018,
        price: 4_896_644,
        schema: 1,
        tex_base: 'placeholder_highspeed/loco_0.png',
        tex_decors: 'placeholder_highspeed/loco_1_0.png,placeholder_highspeed/loco_1_1.png,placeholder_highspeed/loco_1_2.png,placeholder_highspeed/loco_1_5.png,placeholder_highspeed/loco_1_7.png',
        tex_m_height: 3.75,
        tex_m_width: 30,
        tex_top: 'placeholder_highspeed/loco_2.png',
        width: 2.9
      }
    },
    {
      TrainUnit: {
        cost_per_day: 136,
        cost_per_km_per_pax: 0.05,
        empty_mass: 38_800,
        id: 'wopian_example_3000_car',
        length: 22,
        max_pax: 56,
        max_speed: 280,
        name_en: 'Example 3000 (Middle car)',
        name_loc: 'wopian_example_3000_car_name',
        power: 1_018,
        price: 4_674_749,
        schema: 1,
        tex_base: 'placeholder_highspeed/car_0.png',
        tex_decors: 'placeholder_highspeed/car_1_0.png,placeholder_highspeed/car_1_1.png,placeholder_highspeed/car_1_2.png,placeholder_highspeed/car_1_5.png,placeholder_highspeed/car_1_7.png',
        tex_m_height: 3.75,
        tex_m_width: 30,
        tex_top: 'placeholder_highspeed/car_2.png',
        width: 2.9
      }
    },
    {
      TrainMultipleUnit: {
        car_id: 'wopian_example_3000_car',
        head_id: 'wopian_example_3000_head',
        id: 'wopian_example_3000_mu',
        max_cars: 6,
        min_cars: 0,
        name_en: 'Example 3000',
        name_loc: 'wopian_example_3000_name',
        schema: 1,
        tail_flip: true,
        tail_id: 'wopian_example_3000_head'
      }
    }
  ])
})
