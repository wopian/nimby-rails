import { TRAIN_TYPE } from '../index.js'

export const calculateTrainType = max_speed => {
  if (max_speed >= 200) return TRAIN_TYPE.HIGHSPEED
  if (max_speed >= 160) return TRAIN_TYPE.HIGHERSPEED
  if (max_speed > 80) return TRAIN_TYPE.COMMUTER
  return TRAIN_TYPE.TRAM
}