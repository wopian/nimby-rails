import { TRAIN_TYPE } from '../index.js'

// constants derived from price / cost_per_day
export const calculateCosts = ({ train_type, price } = {}) => {
  switch (train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / (9_000_000 / 308)),
          car: Math.round(price.car / (9_000_000 / 308) * 0.85)
        }
      }
    case TRAIN_TYPE.HIGHERSPEED:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / (3_500_000 / 224)),
          car: Math.round(price.car / (3_500_000 / 224) * 0.85)
        }
      }
    case TRAIN_TYPE.TRAM:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / (1_700_000 / 40)),
          car: Math.round(price.car / (1_700_000 / 40) * 0.85)
        }
      }
    case TRAIN_TYPE.METRO:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / (1_900_000 / 42)),
          car: Math.round(price.car / (1_900_000 / 42) * 0.85)
        }
      }
    case TRAIN_TYPE.COMMUTER:
    default:
      return {
        cost_per_km_per_pax: 0.05,
        cost_per_day: {
          head: Math.round(price.head / (2_200_000 / 53)),
          car: Math.round(price.car / (2_200_000 / 53) * 0.85)
        }
      }
  }
}