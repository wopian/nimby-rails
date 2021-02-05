import test from 'ava'
import { TRAIN_TYPE, filterTrainType } from '../index.js'

test('filters by train_type', t => {
  t.deepEqual(filterTrainType({
    filter: TRAIN_TYPE.HIGHSPEED,
    trains: [
      { train_type: TRAIN_TYPE.HIGHSPEED },
      { train_type: TRAIN_TYPE.COMMUTER}
    ]
  }), [
    { train_type: TRAIN_TYPE.HIGHSPEED }
  ])
})

test('returns empty array when nothing matches', t => {
  t.deepEqual(filterTrainType({
    filter: TRAIN_TYPE.TRAM,
    trains: [
      { train_type: TRAIN_TYPE.HIGHSPEED },
      { train_type: TRAIN_TYPE.COMMUTER}
    ]
  }), [])
})

test('uses calculated train_type if not present', t => {
  t.deepEqual(filterTrainType({
    filter: TRAIN_TYPE.TRAM,
    trains: [
      { max_speed: 180 },
      { max_speed: 60 }
    ]
  }), [
    { max_speed: 60 }
  ])
})