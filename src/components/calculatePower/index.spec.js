import test from 'ava'
import { TRAIN_TYPE, calculatePower } from '../index.js'

test('power of highspeed 350 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.HIGHSPEED,
    max_speed: 350
  }), {
    power: 1_273
  })
})

test('power of highspeed 250 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.HIGHSPEED,
    max_speed: 250
  }), {
    power: 909
  })
})

test('power of higherspeed 240 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    max_speed: 240
  }), {
    power: 456
  })
})

test('power of higherspeed 200 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    max_speed: 200
  }), {
    power: 380
  })
})

test('power of higherspeed 180 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    max_speed: 180
  }), {
    power: 342
  })
})

test('power of higherspeed 120 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.HIGHERSPEED,
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

test('power of metro 100 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.METRO,
    max_speed: 100
  }), {
    power: 150
  })
})

test('power of metro 80 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.METRO,
    max_speed: 80
  }), {
    power: 120
  })
})

test('power of tram 80 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.TRAM,
    max_speed: 80
  }), {
    power: 91
  })
})

test('power of tram 60 km/h', t => {
  t.deepEqual(calculatePower({
    train_type: TRAIN_TYPE.TRAM,
    max_speed: 60
  }), {
    power: 68
  })
})