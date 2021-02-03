import { stringify as ini } from 'ini'
import { snakeCase } from 'snake-case'

export const createTrainMultipleUnit = ({ name = 'blank', min_cars = 2, max_cars = 8 } = {}) => ini({
  TrainMultipleUnit: {
    schema: 1,
    id: `wopian_${snakeCase(name)}_mu`,
    name_loc: `wopian_${snakeCase(name)}_name`,
    name_en: name,
    head_id: `wopian_${snakeCase(name)}_head`,
    car_id: `wopian_${snakeCase(name)}_car`,
    tail_id: `wopian_${snakeCase(name)}_head`,
    tail_flip: true,
    min_cars: min_cars - 2, // End units are not counted
    max_cars: max_cars - 2 // End units are not counted
  }
}).replaceAll('\r', '')