import { TRAIN_TYPE } from '../index.js'

// constants derived from price / cost_per_day
export const calculateCosts = ({ train_type, price } = {}) => {
  switch (train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / 29_220),
          car: Math.round(price.car / 29_220)
        }
      }
    case TRAIN_TYPE.EXPRESS:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / 41_510),
          car: Math.round(price.car / 41_510)
        }
      }
    case TRAIN_TYPE.COMMUTER:
    default:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / 45_238),
          car: Math.round(price.car / 45_238)
        }
      }
  }
}