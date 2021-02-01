import { TRAIN_TYPE } from '../index.js'

// derived from empty_mass / length
const derivedMass = train_type => {
  switch(train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return 55_875 / 25
    case TRAIN_TYPE.EXPRESS:
      return 29_500 / 20
    case TRAIN_TYPE.COMMUTER:
    default:
      return 22_500 / 16.25
  }
}

export const calculateEmptyMass = ({ train_type, length } = {}) => {
  if (!length?.car) length = { head: length, car: length }
  return {
    empty_mass: {
      head: Math.round(derivedMass(train_type) * length.head),
      car: Math.round(derivedMass(train_type) * length.car)
    }
  }
}