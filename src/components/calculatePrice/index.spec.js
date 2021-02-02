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
      head: 6_750_000,
      car: 5_400_000
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
      head: 5_670_000,
      car: 4_536_000
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
      head: 1_732_500,
      car: 1_386_000
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
      head: 1_650_000,
      car: 1_320_000
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
      head: 1_056_051,
      car: 844_841
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
      head: 950_453,
      car: 760_363
    }
  })
})