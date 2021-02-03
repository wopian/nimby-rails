import test from 'ava'
import { TRAIN_TYPE, calculatePrice } from '../index.js'

test('price of high-speed heavy', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.HIGHSPEED,
    empty_mass: {
      head: 55_875,
      car: 55_875
    }
  }), {
    price: {
      head: 9_000_000,
      car: 7_650_000
    }
  })
})

test('price of high-speed light', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.HIGHSPEED,
    empty_mass: {
      head: 46_935,
      car: 46_935
    }
  }), {
    price: {
      head: 7_560_000,
      car: 6_426_000
    }
  })
})

test('price of express heavy', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    empty_mass: {
      head: 30_975,
      car: 30_975
    }
  }), {
    price: {
      head: 1_927_333,
      car: 1_638_233
    }
  })
})

test('price of express light', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    empty_mass: {
      head: 29_500,
      car: 29_500
    }
  }), {
    price: {
      head: 1_835_556,
      car: 1_560_222
    }
  })
})

test('price of commuter heavy', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.COMMUTER,
    empty_mass: {
      head: 27_692,
      car: 27_692
    }
  }), {
    price: {
      head: 2_436_896,
      car: 2_071_362
    }
  })
})

test('price of commuter light', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.COMMUTER,
    empty_mass: {
      head: 24_923,
      car: 24_923
    }
  }), {
    price: {
      head: 2_193_224,
      car: 1_864_240
    }
  })
})