import test from 'ava'
import { TRAIN_TYPE, calculateCosts } from '../index.js'

test('running costs of high-speed', t => {
  t.deepEqual(calculateCosts({
    train_type: TRAIN_TYPE.HIGHSPEED,
    price: { head: 9_000_000, car: 8_800_000 }
  }), {
    cost_per_km_per_pax: 0.05,
    cost_per_day: {
      head: 308,
      car: 301
    }
  })
})

test('running costs of express', t => {
  t.deepEqual(calculateCosts({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    price: { head: 2_400_000, car: 2_200_000 }
  }), {
    cost_per_km_per_pax: 0.05,
    cost_per_day: {
      head: 58,
      car: 53
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
      head: 38,
      car: 33
    }
  })
})