import test from 'ava'
import { TRAIN_TYPE, calculatePower } from '../index.js'

test('power of high-speed 350 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.HIGHSPEED,
    max_speed: 350
  }), {
    power: 1_273
  })
})

test('power of high-speed 250 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.HIGHSPEED,
    max_speed: 250
  }), {
    power: 909
  })
})

test('power of express 240 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.LIMITED_EXPRESS,
    max_speed: 240
  }), {
    power: 456
  })
})

test('power of express 200 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.LIMITED_EXPRESS,
    max_speed: 200
  }), {
    power: 380
  })
})

test('power of express 180 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.LIMITED_EXPRESS,
    max_speed: 180
  }), {
    power: 342
  })
})

test('power of express 120 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.LIMITED_EXPRESS,
    max_speed: 120
  }), {
    power: 228
  })
})

test('power of commuter 120 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.COMMUTER,
    max_speed: 120
  }), {
    power: 180
  })
})

test('power of commuter 100 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.COMMUTER,
    max_speed: 100
  }), {
    power: 150
  })
})

test('power of commuter 80 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.COMMUTER,
    max_speed: 80
  }), {
    power: 120
  })
})