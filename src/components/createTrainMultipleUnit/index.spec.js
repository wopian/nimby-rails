import test from 'ava'
import { createTrainMultipleUnit } from '../index.js'

test('blank multiple unit', t => {
  t.is(createTrainMultipleUnit(), '[TrainMultipleUnit]\nschema=1\nid=blank_mu\nname_loc=blank_name\nname_en=blank\nhead_id=blank_head\ncar_id=blank_car\ntail_id=blank_head\ntail_flip=true\nmin_cars=2\nmax_cars=8\n')
})

test('multiple unit with name', t => {
  t.is(createTrainMultipleUnit({
    name: 'Example 100'
  }), '[TrainMultipleUnit]\nschema=1\nid=example_100_mu\nname_loc=example_100_name\nname_en=Example 100\nhead_id=example_100_head\ncar_id=example_100_car\ntail_id=example_100_head\ntail_flip=true\nmin_cars=2\nmax_cars=8\n')
})

test('multiple unit with name and cars', t => {
  t.is(createTrainMultipleUnit({
    name: 'Example 100',
    min_cars: 3,
    max_cars: 10
  }), '[TrainMultipleUnit]\nschema=1\nid=example_100_mu\nname_loc=example_100_name\nname_en=Example 100\nhead_id=example_100_head\ncar_id=example_100_car\ntail_id=example_100_head\ntail_flip=true\nmin_cars=3\nmax_cars=10\n')
})
