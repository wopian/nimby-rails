import { TRAIN_TYPE } from '../constants/index.js'
import {
  calculateEmptyMass,
  calculatePower,
  calculatePrice,
  calculateTrainType,
  calculateCosts,
  createTrainUnit,
  createTrainMultipleUnit,
  tonToKg
} from '../index.js'

// type: commuter|higherspeed
export const createTrain = ({
  train_type, name = 'Train Name', names, min_cars, max_cars, length = 20, width = 2.8, power, max_speed = 120, max_pax = 130, empty_mass
} = {}) => {
  if (!train_type) train_type = calculateTrainType(max_speed)
  if (!power) power = calculatePower({ train_type, max_speed }).power
  if (empty_mass) empty_mass = { head: tonToKg(empty_mass.head), car: tonToKg(empty_mass.car) }
  else empty_mass = calculateEmptyMass({ train_type, length }).empty_mass

  const { price } = calculatePrice({ train_type, empty_mass, length })
  const { cost_per_km_per_pax, cost_per_day } = calculateCosts({ train_type, price })

  return [
    createTrainUnit({ train_type, unit_type: 'head', name, names, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day }),
    createTrainUnit({ train_type, unit_type: 'car', name, names, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day }),
    createTrainMultipleUnit({ name, min_cars, max_cars })
  ]
}