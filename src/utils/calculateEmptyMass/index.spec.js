import test from 'ava'
import { TRAIN_TYPE, calculateEmptyMass } from '../index.js'

test('mass of high-speed 25m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.HIGHSPEED,
    length: 25
  }), {
    empty_mass: {
      head: 55_875,
      car: 55_875
    }
  })
})

test('mass of high-speed 21m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.HIGHSPEED,
    length: 21
  }), {
    empty_mass: {
      head: 46_935,
      car: 46_935
    }
  })
})

test('mass of express 21m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.EXPRESS,
    length: 21
  }), {
    empty_mass: {
      head: 30_975,
      car: 30_975
    }
  })
})

test('mass of express 20m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.EXPRESS,
    length: 20
  }), {
    empty_mass: {
      head: 29_500,
      car: 29_500
    }
  })
})

test('mass of commuter 20m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.COMMUTER,
    length: 20
  }), {
    empty_mass: {
      head: 27_692,
      car: 27_692
    }
  })
})

test('mass of commuter 18m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.COMMUTER,
    length: 18
  }), {
    empty_mass: {
      head: 24_923,
      car: 24_923
    }
  })
})