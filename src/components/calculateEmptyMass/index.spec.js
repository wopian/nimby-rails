import test from 'ava'
import { TRAIN_TYPE, calculateEmptyMass } from '../index.js'

test('mass of highspeed 25m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.HIGHSPEED,
    length: 25
  }), {
    empty_mass: {
      head: 55_875,
      car: 55_707
    }
  })
})

test('mass of highspeed 21m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.HIGHSPEED,
    length: 21
  }), {
    empty_mass: {
      head: 46_935,
      car: 46_794
    }
  })
})

test('mass of higherspeed 21m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    length: 21
  }), {
    empty_mass: {
      head: 30_975,
      car: 30_882
    }
  })
})

test('mass of higherspeed 20m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    length: 20
  }), {
    empty_mass: {
      head: 29_500,
      car: 29_412
    }
  })
})

test('mass of commuter 20m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.COMMUTER,
    length: 20
  }), {
    empty_mass: {
      head: 22_500,
      car: 22_433
    }
  })
})

test('mass of commuter 18m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.COMMUTER,
    length: 18
  }), {
    empty_mass: {
      head: 20_250,
      car: 20_189
    }
  })
})

test('mass of metro 20m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.METRO,
    length: 20
  }), {
    empty_mass: {
      head: 25_231,
      car: 25_155
    }
  })
})

test('mass of metro 18m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.METRO,
    length: 18
  }), {
    empty_mass: {
      head: 22_708,
      car: 22_640
    }
  })
})

test('mass of tram 16m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.TRAM,
    length: 16
  }), {
    empty_mass: {
      head: 17_231,
      car: 17_179
    }
  })
})

test('mass of tram 12m', t => {
  t.deepEqual(calculateEmptyMass({
    train_type: TRAIN_TYPE.TRAM,
    length: 12
  }), {
    empty_mass: {
      head: 12_923,
      car: 12_884
    }
  })
})