import { roundTo } from '../index.js'

export const calculatePower = ({ empty_mass, max_speed, acceleration }) => {
  const K = 0.75 // Tuning constant
  const A = (acceleration ? acceleration : 3) / 3.6 // Default to 3 km/h acceleration
  const power = K * empty_mass * A * (max_speed / 3.6) / 1000 // previously also divided by 7.7
  return roundTo(power, 5)
}