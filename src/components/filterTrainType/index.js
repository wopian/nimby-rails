import { calculateTrainType } from '../index.js'

export const filterTrainType = ({ trains, filter } = {}) => trains
  .filter(({ train_type, max_speed } = {}) => {
    if (!train_type) train_type = calculateTrainType(max_speed)
    return train_type === filter
  })