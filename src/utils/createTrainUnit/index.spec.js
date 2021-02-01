import test from 'ava'
import { createTrainUnit } from '../index.js'

test('train car unit', t => {
  t.is(createTrainUnit({
    unitType: 'car',
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
  }), '[TrainUnit]\nschema=1\nid=example_100_car\nname_loc=example_100_name\nname_en=Example 100 (Middle car)\nlength=20\nwidth=2.9\nmax_speed=120\npower=190\nempty_mass=26000\nprice=1600000\nmax_pax=60\ncost_per_km_per_pax=0.05\ncost_per_day=55\n')
})

test('train head unit', t => {
  t.is(createTrainUnit({
    unitType: 'head',
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
  }), '[TrainUnit]\nschema=1\nid=example_200_head\nname_loc=example_200_name\nname_en=Example 200 (End car)\nlength=21\nwidth=2.6\nmax_speed=140\npower=250\nempty_mass=29000\nprice=2250000\nmax_pax=25\ncost_per_km_per_pax=0.05\ncost_per_day=75\n')
})

test('train car unit with differing lengths', t => {
  t.is(createTrainUnit({
    unitType: 'car',
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
  }), '[TrainUnit]\nschema=1\nid=example_300_car\nname_loc=example_300_name\nname_en=Example 300 (Middle car)\nlength=19.5\nwidth=2.6\nmax_speed=140\npower=250\nempty_mass=27000\nprice=2000000\nmax_pax=80\ncost_per_km_per_pax=0.05\ncost_per_day=65\n')
})

test('train head unit with differing lengths', t => {
  t.is(createTrainUnit({
    unitType: 'head',
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
  }), '[TrainUnit]\nschema=1\nid=example_300_head\nname_loc=example_300_name\nname_en=Example 300 (End car)\nlength=20.8\nwidth=2.6\nmax_speed=140\npower=250\nempty_mass=29000\nprice=2250000\nmax_pax=25\ncost_per_km_per_pax=0.05\ncost_per_day=75\n')
})
