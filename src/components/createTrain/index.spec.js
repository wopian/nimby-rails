import test from 'ava'
import { TRAIN_TYPE, createTrain } from '../index.js'

test('train with computed empty_mass', t => {
  const headUnit = '\n[TrainUnit]\nschema=1\nid=wopian_example_3000_head\nname_loc=wopian_example_3000_head_name\nname_en=Example 3000 (End car)\nlength=20\nwidth=2.9\nmax_speed=280\npower=1018\nempty_mass=44700\nprice=7200000\nmax_pax=34\ncost_per_km_per_pax=0.05\ncost_per_day=246\ntex_base=placeholder_highspeed/loco_0.png\ntex_top=placeholder_highspeed/loco_2.png\ntex_decors=placeholder_highspeed/loco_1_0.png,placeholder_highspeed/loco_1_1.png,placeholder_highspeed/loco_1_2.png,placeholder_highspeed/loco_1_5.png,placeholder_highspeed/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n'
  const carUnit = '\n[TrainUnit]\nschema=1\nid=wopian_example_3000_car\nname_loc=wopian_example_3000_car_name\nname_en=Example 3000 (Middle car)\nlength=22\nwidth=2.9\nmax_speed=280\npower=1018\nempty_mass=49022\nprice=6711737\nmax_pax=56\ncost_per_km_per_pax=0.05\ncost_per_day=195\ntex_base=placeholder_highspeed/car_0.png\ntex_top=placeholder_highspeed/car_2.png\ntex_decors=placeholder_highspeed/car_1_0.png,placeholder_highspeed/car_1_1.png,placeholder_highspeed/car_1_2.png,placeholder_highspeed/car_1_5.png,placeholder_highspeed/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n'
  const multiUnit = '\n[TrainMultipleUnit]\nschema=1\nid=wopian_example_3000_mu\nname_loc=wopian_example_3000_name\nname_en=Example 3000\nhead_id=wopian_example_3000_head\ncar_id=wopian_example_3000_car\ntail_id=wopian_example_3000_head\ntail_flip=true\nmin_cars=0\nmax_cars=6\n'
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
  const headUnit = '\n[TrainUnit]\nschema=1\nid=wopian_example_3000_head\nname_loc=wopian_example_3000_head_name\nname_en=Example 3000 (End car)\nlength=20\nwidth=2.9\nmax_speed=280\npower=1018\nempty_mass=40000\nprice=6442953\nmax_pax=34\ncost_per_km_per_pax=0.05\ncost_per_day=220\ntex_base=placeholder_highspeed/loco_0.png\ntex_top=placeholder_highspeed/loco_2.png\ntex_decors=placeholder_highspeed/loco_1_0.png,placeholder_highspeed/loco_1_1.png,placeholder_highspeed/loco_1_2.png,placeholder_highspeed/loco_1_5.png,placeholder_highspeed/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n'
  const carUnit = '\n[TrainUnit]\nschema=1\nid=wopian_example_3000_car\nname_loc=wopian_example_3000_car_name\nname_en=Example 3000 (Middle car)\nlength=22\nwidth=2.9\nmax_speed=280\npower=1018\nempty_mass=38800\nprice=5312215\nmax_pax=56\ncost_per_km_per_pax=0.05\ncost_per_day=155\ntex_base=placeholder_highspeed/car_0.png\ntex_top=placeholder_highspeed/car_2.png\ntex_decors=placeholder_highspeed/car_1_0.png,placeholder_highspeed/car_1_1.png,placeholder_highspeed/car_1_2.png,placeholder_highspeed/car_1_5.png,placeholder_highspeed/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n'
  const multiUnit = '\n[TrainMultipleUnit]\nschema=1\nid=wopian_example_3000_mu\nname_loc=wopian_example_3000_name\nname_en=Example 3000\nhead_id=wopian_example_3000_head\ncar_id=wopian_example_3000_car\ntail_id=wopian_example_3000_head\ntail_flip=true\nmin_cars=0\nmax_cars=6\n'
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
