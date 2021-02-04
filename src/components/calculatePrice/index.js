import { TRAIN_TYPE } from '../index.js'

// derived from price / empty_mass / length
const P = train_type => {
  switch(train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return 9_000_000 / 55_875 / 25
    case TRAIN_TYPE.HIGHERSPEED:
      return 3_500_000 / 56_250 / 20
    case TRAIN_TYPE.TRAM:
      return 1_700_000 / 7_000 / 6.5 * 0.15
    case TRAIN_TYPE.METRO:
      return 1_900_000 / 20_500 / 16.25 * 0.6
    case TRAIN_TYPE.COMMUTER:
    default:
      return 2_200_000 / 25_000 / 20
  }
}

export const calculatePrice = ({ train_type, empty_mass, length } = {}) => {
  return {
    price: {
      head: Math.round(P(train_type) * empty_mass.head * length.head * 0.95), // .95
      car: Math.round(P(train_type) * empty_mass.car * length.car * 0.85) // .85
    }
  }
}