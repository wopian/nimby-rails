import { TRAIN_TYPE } from '../index.js'

// derived from price / empty_mass
const P = train_type => {
  switch(train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return 9_000_000 / 55_875
    case TRAIN_TYPE.LIMITED_EXPRESS:
      return 3_500_000 / 56_250
    case TRAIN_TYPE.COMMUTER:
    default:
      return 2_200_000 / 25_000 * 0.7
  }
}

export const calculatePrice = ({ train_type, empty_mass } = {}) => {
  return {
    price: {
      head: Math.round(P(train_type) * empty_mass.head),
      car: Math.round(P(train_type) * empty_mass.car * 0.85)
    }
  }
}