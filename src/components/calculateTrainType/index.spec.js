import test from 'ava'
import { calculateTrainType } from '../index.js'

test('max_speed of 250 is highspeed', t => {
  t.is(calculateTrainType(250), 'highspeed')
})

test('max_speed of 200 is highspeed', t => {
  t.is(calculateTrainType(200), 'highspeed')
})

test('max_speed of 180 is higherspeed', t => {
  t.is(calculateTrainType(180), 'higherspeed')
})

test('max_speed of 160 is highspeed', t => {
  t.is(calculateTrainType(160), 'higherspeed')
})

test('max_speed of 140 is commuter', t => {
  t.is(calculateTrainType(140), 'commuter')
})

test('max_speed of 110 is commuter', t => {
  t.is(calculateTrainType(110), 'commuter')
})

test('max_speed of 80 is tram', t => {
  t.is(calculateTrainType(80), 'tram')
})

test('max_speed of 60 is tram', t => {
  t.is(calculateTrainType(60), 'tram')
})
