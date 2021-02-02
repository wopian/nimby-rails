import test from 'ava'
import { TRAIN_TYPE, createTrain } from '../index.js'

test('train with computed empty_mass', t => {
  const headUnit = '\n[TrainUnit]\nschema=1\nid=example_3000_head\nname_loc=example_3000_name\nname_en=Example 3000 (End car)\nlength=20\nwidth=2.9\nmax_speed=280\npower=1018\nempty_mass=44700\nprice=5400000\nmax_pax=34\ncost_per_km_per_pax=0.05\ncost_per_day=185\n'
  const carUnit = '\n[TrainUnit]\nschema=1\nid=example_3000_car\nname_loc=example_3000_name\nname_en=Example 3000 (Middle car)\nlength=22\nwidth=2.9\nmax_speed=280\npower=1018\nempty_mass=49022\nprice=4737697\nmax_pax=56\ncost_per_km_per_pax=0.05\ncost_per_day=162\n'
  const multiUnit = '\n[TrainMultipleUnit]\nschema=1\nid=example_3000_mu\nname=example_3000_name\nname_en=Example 3000\nhead_id=example_3000_head\ncar_id=example_3000_car\ntail_id=example_3000_head\ntail_flip=true\nmin_cars=2\nmax_cars=8\n'
  t.is(createTrain({
    name: 'Example 3000',
    train_type: TRAIN_TYPE.HIGHSPEED,
    length: { head: 20, car: 22 },
    width: 2.9,
    max_speed: 280,
    max_pax: { head: 34, car: 56 }
  }), headUnit.concat(carUnit, multiUnit))
})

test('train with predefined empty_mass', t => {
  const headUnit = '\n[TrainUnit]\nschema=1\nid=example_3000_head\nname_loc=example_3000_name\nname_en=Example 3000 (End car)\nlength=20\nwidth=2.9\nmax_speed=280\npower=1018\nempty_mass=40000\nprice=4832215\nmax_pax=34\ncost_per_km_per_pax=0.05\ncost_per_day=165\n'
  const carUnit = '\n[TrainUnit]\nschema=1\nid=example_3000_car\nname_loc=example_3000_name\nname_en=Example 3000 (Middle car)\nlength=22\nwidth=2.9\nmax_speed=280\npower=1018\nempty_mass=38800\nprice=3749799\nmax_pax=56\ncost_per_km_per_pax=0.05\ncost_per_day=128\n'
  const multiUnit = '\n[TrainMultipleUnit]\nschema=1\nid=example_3000_mu\nname=example_3000_name\nname_en=Example 3000\nhead_id=example_3000_head\ncar_id=example_3000_car\ntail_id=example_3000_head\ntail_flip=true\nmin_cars=2\nmax_cars=8\n'
  t.is(createTrain({
    name: 'Example 3000',
    train_type: TRAIN_TYPE.HIGHSPEED,
    length: { head: 20, car: 22 },
    width: 2.9,
    max_speed: 280,
    max_pax: { head: 34, car: 56 },
    empty_mass: { head: 40, car: 38.8 }
  }), headUnit.concat(carUnit, multiUnit))
})
