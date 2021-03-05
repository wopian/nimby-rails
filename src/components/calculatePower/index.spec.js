import test from 'ava'
import { calculatePower } from '../index.js'

test('power of 90 km/h 38600 kg', t => {
  t.deepEqual(calculatePower({
    max_speed: 90,
    empty_mass: 38600
  }), 600)
})

test('power of 120 km/h 29500 kg', t => {
  t.deepEqual(calculatePower({
    max_speed: 120,
    empty_mass: 29500
  }), 615)
})

test('power of 120 km/h 29500 kg 3.3 km/h acceleration', t => {
  t.deepEqual(calculatePower({
    max_speed: 120,
    empty_mass: 29500,
    acceleration: 3.3
  }), 675)
})

test('power of 70 km/h 7000 kg', t => {
  t.deepEqual(calculatePower({
    max_speed: 70,
    empty_mass: 7000
  }), 85)
})

test('power of 70 km/h 7000 kg 3.3 km/h acceleration', t => {
  t.deepEqual(calculatePower({
    max_speed: 70,
    empty_mass: 7000,
    acceleration: 3.3
  }), 90)
})

test('power of 100 km/h 22500 kg', t => {
  t.deepEqual(calculatePower({
    max_speed: 100,
    empty_mass: 22500
  }), 390)
})

test('power of 320 km/h 39000 kg', t => {
  t.deepEqual(calculatePower({
    max_speed: 320,
    empty_mass: 39000
  }), 2165)
})

test('power of 320 km/h 39000 kg 3.3 km/h acceleration', t => {
  t.deepEqual(calculatePower({
    max_speed: 320,
    empty_mass: 39000,
    acceleration: 3.3
  }), 2380)
})

test('power of 350 km/h 55875 kg', t => {
  t.deepEqual(calculatePower({
    max_speed: 350,
    empty_mass: 55875
  }), 3395)
})
