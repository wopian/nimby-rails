import { stringify as ini } from 'ini'
import { snakeCase } from 'snake-case'

const getType = unit_type => 'car' === unit_type ? 'car' : 'loco'

const getDecors = ({ train_type, unit_type } = {}) => {
  const decalLayers = [ 0, 1, 2, 5, 7 ]
  let output = ''

  for (const decal of decalLayers) {
    output += `placeholder_${train_type}/${unit_type}_1_${decal}.png,`
  }

  return output.slice(0, -1)
}

export const createTrainUnit = ({
  train_type, unit_type, name, names, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day
} = {}) => ini({
  TrainUnit: {
    schema: 1,
    id: `wopian_${snakeCase(name)}_${unit_type}`,
    name_loc: `wopian_${snakeCase(name)}_${unit_type}_name`,
    name_en: names ? names[unit_type] : `${name} (${'car' === unit_type ? 'Middle' : 'End'} car)`,
    length: length?.car ? ('car' === unit_type ? length.car : length.head) : length,
    width,
    max_speed,
    power,
    empty_mass: 'car' === unit_type ? empty_mass.car : empty_mass.head,
    price: 'car' === unit_type ? price.car : price.head,
    max_pax: max_pax?.car ? ('car' === unit_type ? max_pax.car : max_pax.head) : max_pax,
    cost_per_km_per_pax,
    cost_per_day: 'car' === unit_type ? cost_per_day.car : cost_per_day.head,
    tex_base: `placeholder_${train_type}/${getType(unit_type)}_0.png`,
    tex_top: `placeholder_${train_type}/${getType(unit_type)}_2.png`,
    // tex_decors: `placeholder_${train_type}/${'car' === unit_type ? 'car' : 'loco'}_1_0.png`,
    tex_decors: getDecors({ train_type, unit_type: getType(unit_type) }),
    tex_m_width: 30,
    tex_m_height: 3.75
  }
}).replaceAll('\r', '')