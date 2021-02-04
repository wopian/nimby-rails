import test from 'ava'
import { TRAIN_TYPE, calculateCosts } from '../index.js'

test('running costs of highspeed', t => {
  t.deepEqual(calculateCosts({
    train_type: TRAIN_TYPE.HIGHSPEED,
    price: { head: 9_000_000, car: 8_800_000 }
  }), {
    cost_per_km_per_pax: 0.05,
    cost_per_day: {
      head: 308,
      car: 256
    }
  })
})

test('running costs of higherspeed', t => {
  t.deepEqual(calculateCosts({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    price: { head: 2_400_000, car: 2_200_000 }
  }), {
    cost_per_km_per_pax: 0.05,
    cost_per_day: {
      head: 154,
      car: 120
    }
  })
})

test('running costs of commuter', t => {
  t.deepEqual(calculateCosts({
    train_type: TRAIN_TYPE.COMMUTER,
    price: { head: 1_700_000, car: 1_500_000 }
  }), {
    cost_per_km_per_pax: 0.05,
    cost_per_day: {
      head: 41,
      car: 31
    }
  })
})

test('running costs of metro', t => {
  t.deepEqual(calculateCosts({
    train_type: TRAIN_TYPE.METRO,
    price: { head: 1_700_000, car: 1_500_000 }
  }), {
    cost_per_km_per_pax: 0.05,
    cost_per_day: {
      head: 32,
      car: 23
    }
  })
})

test('running costs of tram', t => {
  t.deepEqual(calculateCosts({
    train_type: TRAIN_TYPE.TRAM,
    price: { head: 1_700_000, car: 1_500_000 }
  }), {
    cost_per_km_per_pax: 0.05,
    cost_per_day: {
      head: 40,
      car: 30
    }
  })
})