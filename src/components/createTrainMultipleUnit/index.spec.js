import test from 'ava'
import { createTrainMultipleUnit } from '../index.js'

test('blank multiple unit', t => {
  t.deepEqual(createTrainMultipleUnit(), {
    TrainMultipleUnit: {
      car_id: 'wopian_blank_car',
      head_id: 'wopian_blank_head',
      id: 'wopian_blank_mu',
      max_cars: 8,
      min_cars: 0,
      name_en: 'blank',
      name_loc: 'wopian_blank_name',
      schema: 1,
      tail_flip: true,
      tail_id: 'wopian_blank_head'
    }
  })
})

test('multiple unit with name', t => {
  t.deepEqual(createTrainMultipleUnit({
    name: 'Example 100'
  }), {
    TrainMultipleUnit: {
      car_id: 'wopian_example_100_car',
      head_id: 'wopian_example_100_head',
      id: 'wopian_example_100_mu',
      max_cars: 8,
      min_cars: 0,
      name_en: 'Example 100',
      name_loc: 'wopian_example_100_name',
      schema: 1,
      tail_flip: true,
      tail_id: 'wopian_example_100_head'
    }
  })
})

test('multiple unit with name and cars', t => {
  t.deepEqual(createTrainMultipleUnit({
    name: 'Example 100',
    min_cars: 3,
    max_cars: 10
  }), {
    TrainMultipleUnit: {
      car_id: 'wopian_example_100_car',
      head_id: 'wopian_example_100_head',
      id: 'wopian_example_100_mu',
      max_cars: 8,
      min_cars: 1,
      name_en: 'Example 100',
      name_loc: 'wopian_example_100_name',
      schema: 1,
      tail_flip: true,
      tail_id: 'wopian_example_100_head'
    }
  })
})
