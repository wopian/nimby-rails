import { roundTo } from '../index.js'

export const calculatePrice = ({ max_speed, empty_mass, length, width, max_pax }) => {
  const M = 0.85095 // Constant tuned for Yamanote E231-500 base-game price of 2_200_000
  const dimensions_modifier = Math.cbrt(length) * Math.cbrt(width)
  const speed_modifier = max_speed <= 70 || max_speed >= 240 ? Math.asinh(max_speed) : Math.cbrt(max_speed)
  let price = empty_mass * dimensions_modifier * speed_modifier * Math.cbrt(max_pax) * M

  if (max_speed <= 70) price *= 1.1
  else if (max_speed >= 350) price *= 1.75977
  else if (max_speed >= 240) price *= 0.922
  else if (max_speed >= 160) price *= 0.69586

  const cost_per_day = Math.round(price / (2_200_000 / 53)) // Yamanote E231-500 price and cost_per_day

  return {
    cost_per_day: cost_per_day >= 20 ? cost_per_day : 20,
    price: roundTo(price >= 800_000 ? price : 500_000 * Math.cbrt(cost_per_day), 1000)
  }
}