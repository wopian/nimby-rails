import { TRAIN_TYPE } from '../index.js'

const P = train_type => {
  switch(train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return 9_000_000 / 55_875
    case TRAIN_TYPE.EXPRESS:
      return 2_200_000 / 29_500
    case TRAIN_TYPE.COMMUTER:
    default:
      return 1_500_000 / 29_500
  }
}

// derived from price / empty_mass
export const calculatePrice = ({ train_type, empty_mass } = {}) => {
  return {
    price: {
      head: Math.round(P(train_type) * empty_mass.head * 0.75),
      car: Math.round(P(train_type) * empty_mass.car * 0.75)
    }
  }
}