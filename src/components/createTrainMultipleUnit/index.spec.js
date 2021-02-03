import test from 'ava'
import { createTrainMultipleUnit } from '../index.js'

test('blank multiple unit', t => {
  t.is(createTrainMultipleUnit(), '[TrainMultipleUnit]\nschema=1\nid=wopian_blank_mu\nname_loc=wopian_blank_name\nname_en=blank\nhead_id=wopian_blank_head\ncar_id=wopian_blank_car\ntail_id=wopian_blank_head\ntail_flip=true\nmin_cars=0\nmax_cars=6\n')
})

test('multiple unit with name', t => {
  t.is(createTrainMultipleUnit({
    name: 'Example 100'
  }), '[TrainMultipleUnit]\nschema=1\nid=wopian_example_100_mu\nname_loc=wopian_example_100_name\nname_en=Example 100\nhead_id=wopian_example_100_head\ncar_id=wopian_example_100_car\ntail_id=wopian_example_100_head\ntail_flip=true\nmin_cars=0\nmax_cars=6\n')
})

test('multiple unit with name and cars', t => {
  t.is(createTrainMultipleUnit({
    name: 'Example 100',
    min_cars: 3,
    max_cars: 10
  }), '[TrainMultipleUnit]\nschema=1\nid=wopian_example_100_mu\nname_loc=wopian_example_100_name\nname_en=Example 100\nhead_id=wopian_example_100_head\ncar_id=wopian_example_100_car\ntail_id=wopian_example_100_head\ntail_flip=true\nmin_cars=1\nmax_cars=8\n')
})
