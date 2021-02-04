import test from 'ava'
import { TRAIN_TYPE, calculatePrice } from '../index.js'

test('price of highspeed heavy', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.HIGHSPEED,
    empty_mass: {
      head: 55_875,
      car: 55_875
    },
    length: {
      head: 25,
      car: 25
    }
  }), {
    price: {
      head: 8_550_000,
      car: 7_650_000
    }
  })
})

test('price of highspeed light', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.HIGHSPEED,
    empty_mass: {
      head: 46_935,
      car: 46_935
    },
    length: {
      head: 25,
      car: 25
    }
  }), {
    price: {
      head: 7_182_000,
      car: 6_426_000
    }
  })
})

test('price of higherspeed heavy', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    empty_mass: {
      head: 30_975,
      car: 30_975
    },
    length: {
      head: 20,
      car: 20
    }
  }), {
    price: {
      head: 1_830_967,
      car: 1_638_233
    }
  })
})

test('price of higherspeed light', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.HIGHERSPEED,
    empty_mass: {
      head: 29_500,
      car: 29_500
    },
    length: {
      head: 20,
      car: 20
    }
  }), {
    price: {
      head: 1_743_778,
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
    },
    length: {
      head: 20,
      car: 20
    }
  }), {
    price: {
      head: 2_315_051,
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
    },
    length: {
      head: 20,
      car: 20
    }
  }), {
    price: {
      head: 2_083_563,
      car: 1_864_240
    }
  })
})

test('price of metro heavy', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.METRO,
    empty_mass: {
      head: 27_692,
      car: 27_692
    },
    length: {
      head: 20,
      car: 20
    }
  }), {
    price: {
      head: 1_800_552,
      car: 1_611_020
    }
  })
})

test('price of metro light', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.METRO,
    empty_mass: {
      head: 24_923,
      car: 24_923
    },
    length: {
      head: 20,
      car: 20
    }
  }), {
    price: {
      head: 1_620_509,
      car: 1_449_929
    }
  })
})

test('price of tram heavy', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.TRAM,
    empty_mass: {
      head: 15_350,
      car: 15_350
    },
    length: {
      head: 12,
      car: 12
    }
  }), {
    price: {
      head: 980_713,
      car: 877_480
    }
  })
})

test('price of tram light', t => {
  t.deepEqual(calculatePrice({
    train_type: TRAIN_TYPE.TRAM,
    empty_mass: {
      head: 11_000,
      car: 10_500
    },
    length: {
      head: 8.5,
      car: 8.5
    }
  }), {
    price: {
      head: 497_810,
      car: 425_163
    }
  })
})