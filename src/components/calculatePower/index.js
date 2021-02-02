import { TRAIN_TYPE } from '../index.js'

const K = 3.0681818 // Magic Number
const N = 0.9 // Efficiency of Engine Motor

const formula = (tractive, max_speed) => Math
  .round((1 / (K * N)) * max_speed * tractive)

export const calculatePower = ({ train_type, max_speed } = {}) => {
  // 3.0681818 * ((0.9f * power) / max_speed) = tractive
  //
  // a = 3.0681818 * 0.9
  // b = 1 / a
  // step 1. (a*power) / a = (max_speed * tractive) / a
  // step 2. power = b * max_speed * tractive
  switch (train_type) {
    case TRAIN_TYPE.HIGHSPEED:
      return {
        power: formula(K * ((N * 800) / 220), max_speed) // TODO: Fine Tune
      }
    case TRAIN_TYPE.HIGHERSPEED:
      return {
        power: formula(K * ((N * 190) / 100), max_speed)
      }
    case TRAIN_TYPE.TRAM:
      return {
        power: formula(K * ((N * 144) / 70), max_speed) // TODO: Fine Tune
      }
    case TRAIN_TYPE.COMMUTER:
    default:
      return {
        power: formula(K * ((N * 150) / 100), max_speed) // TODO: Fine Tune
      }
  }
}