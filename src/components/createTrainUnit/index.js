import { PLACEHOLDER, calculateEmptyMass, calculatePower, calculatePrice, slugify, tonToKg } from '../index.js'

export const createTrainUnit = ({
  name,
  length = 20, // m
  width = 2.8, // m
  max_speed = 120, // km/h
  acceleration, // km/h, optional if power unknown for more accurate calculatePower results
  power, // kW
  empty_mass, // kg
  max_pax = 0,
  cost_per_km_per_pax = 0.05, // $
  graphics = PLACEHOLDER.COMMUTER.CAR,
  recolor_base = true,
  recolor_decor = true,
  tags = []
}) => {
  let output = {
    schema: 2,
    id: `wopian_${slugify(name)}_unit`,
    name_loc: `wopian_${slugify(name)}_name`,
    name_en: name.substring(name.indexOf(' ')).trim(),
    length,
    width,
    max_speed,
    max_pax,
    cost_per_km_per_pax,
    tex_m_width: 30,
    tex_m_height: 3.75,
    recolor_base,
    recolor_decor
  }

  if (tags?.length > 0) output.tags = Array.from(new Set(tags)).join(',') // strip duplicates

  if (empty_mass >= 0) output.empty_mass = tonToKg(empty_mass)
  else output.empty_mass = calculateEmptyMass(output)

  if (power >= 0) output.power = power
  else output.power = calculatePower({ ...output, acceleration })

  if (graphics) {
    output.tex_base = graphics.base
    output.tex_top = graphics.top
    output.tex_decors = graphics.decors.join(',')
  }

  // price: train_type, empty_mass, length
  // cost_per_day: train_type, price
  const { price, cost_per_day } = calculatePrice(output)
  output.price = price
  output.cost_per_day = cost_per_day

  return { TrainUnit: output }
}