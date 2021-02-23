import { roundTo } from '../index.js'

export const calculatePrice = ({ max_speed, empty_mass, length, width, max_pax }) => {
  const M = 0.85095 // 0.8513275 // 4.582877 // Constant tuned for Yamanote E231-500 base-game price of 2_200_000
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

/*
export const calculatePrice = ({ max_speed, empty_mass, length, width, max_pax }) => {
  const M = 0.7979917 // 4.582877 // Constant tuned for Yamanote E231-500 base-game price of 2_200_000
  const dimensions_modifier = Math.cbrt(length) * Math.cbrt(width)
  const speed_modifier = max_speed <= 70 || max_speed >= 240 ? Math.asinh(max_speed) : Math.cbrt(max_speed)
  let price = empty_mass * dimensions_modifier * speed_modifier * Math.cbrt(max_pax) * M

  if (max_speed <= 70) price *= 1
  else if (max_speed >= 350) price *= 1.5346589
  else if (max_speed >= 240) price *= 0.92
  else if (max_speed >= 160) price *= 0.7

  const cost_per_day = Math.round(price / (2_200_000 / 53)) // Yamanote E231-500 price and cost_per_day

  return {
    cost_per_day: cost_per_day >= 20 ? cost_per_day : 20,
    price: Math.round(price >= 800_000 ? price : 500_000 * (Math.cbrt(cost_per_day)))
  }
}
*/


  /*
  let speed_modifier = 0

  if (max_speed <= 70) speed_modifier = Math.asinh(max_speed) * (4.679256 + M) // Trams
  else if (max_speed >= 240) speed_modifier = Math.asinh(max_speed) * (0.7366672 + M) // Highspeed
  else if (max_speed >= 160) speed_modifier = Math.cbrt(max_speed) * 0.6190254 // Higherspeed TODO Balance
  else speed_modifier = Math.cbrt(max_speed) // Metro/Commuter, 91-159 km/h
  */

/*
export const calculatePrice = ({ max_speed, empty_mass, length, width }) => {
  const M = 4.582877 // Constant tuned for Yamanote E231-500 base-game price of 2_200_000
  const speed_modifier = Math.cbrt(max_speed) // asinh
  const dimensions_modifier = Math.cbrt(length) * Math.cbrt(width)
  const price = Math.round(empty_mass * dimensions_modifier * speed_modifier * M)

  return {
    cost_per_day: Math.round(price / (2_200_000 / 53)), // Yamanote E231-500 price and cost_per_day
    price,
  }
}
*/