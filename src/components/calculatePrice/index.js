import { roundTo } from '../index.js'

export const calculatePrice = ({ max_speed, empty_mass, length, width, max_pax }) => {
  const M = 0.6776 // Constant tuned for Yamanote E231-500 base-game price of 2_200_000
  const dimensions_modifier = Math.cbrt(length) * Math.cbrt(width)
  const speed_modifier = Math.cbrt(max_speed)
  const pax_modifier = Math.asinh(max_pax <= 50 ? 50 : max_pax)

  let price = 1_000_000 * Math.abs(
    dimensions_modifier + Math.log10(empty_mass) * speed_modifier / Math.log10(pax_modifier)
  ) * M / 10

  if (max_speed <= 70) price *= 0.951 // Alstom
  else if (max_speed <= 90) price *= 1.18 // NYR
  else if (max_speed <= 100) price *= 0.9102 // London
  else if (max_speed >= 350) price *= 2.4881 // Siemens
  else if (max_speed >= 240) price *= 1.0087 // TGV
  else if (max_speed >= 160) price *= 1.1341 // Renfe - TODO: Maybe change to 220 or 200

  const rounded_price = roundTo(price, 1000)
  const cost_per_day_modifier = 2_200_000 / 53 // Yamanote E231-500 price and cost_per_day

  let cost_per_day = Math.floor(rounded_price / cost_per_day_modifier)

  if (max_speed > 70 && max_speed <= 90) cost_per_day *= 0.55 // NYR
  else if (max_speed > 90 && max_speed <= 100) cost_per_day *= 0.96 // London
  else if (max_speed >= 350) cost_per_day *= 1.43 // Siemens
  else if (max_speed >= 240) cost_per_day *= 3.34 // TGV
  else if (max_speed >= 160) cost_per_day *= 2.67 // Renfe - TODO: Maybe change to 220 or 200

  return {
    cost_per_day: Math.floor(cost_per_day),
    price: rounded_price
  }
}