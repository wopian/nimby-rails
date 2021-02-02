import { stringify as ini } from 'ini'
import { snakeCase } from 'snake-case'

export const createTrainUnit = ({
  unitType, name, length, width, max_speed, power, empty_mass, price, max_pax, cost_per_km_per_pax, cost_per_day
} = {}) => ini({
  TrainUnit: {
    schema: 1,
    id: `${snakeCase(name)}_${unitType}`,
    name_loc: `${snakeCase(name)}_${unitType}_name`,
    name_en: `${name} (${'car' === unitType ? 'Middle' : 'End'} car)`,
    length: length?.car ? ('car' === unitType ? length.car : length.head) : length,
    width,
    max_speed,
    power,
    empty_mass: 'car' === unitType ? empty_mass.car : empty_mass.head,
    price: 'car' === unitType ? price.car : price.head,
    max_pax: max_pax?.car ? ('car' === unitType ? max_pax.car : max_pax.head) : max_pax,
    cost_per_km_per_pax,
    cost_per_day: 'car' === unitType ? cost_per_day.car : cost_per_day.head,
    //tex_base: `${TEXTURE_DIR}/${'car' === unitType ? 'car' : 'loco'}_0.png`,
    //tex_top: `${TEXTURE_DIR}/${'car' === unitType ? 'car' : 'loco'}_2.png`,
    //tex_decors: `${TEXTURE_DIR}/${'car' === unitType ? 'car' : 'loco'}_1_0.png`,
    //tex_m_width: 30,
    //tex_m_height: 3.75
  }
}).replaceAll('\r', '')