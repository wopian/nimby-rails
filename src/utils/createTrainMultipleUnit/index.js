import { stringify as ini } from 'ini'
import { snakeCase } from 'snake-case'

export const createTrainMultipleUnit = ({ name = 'blank', min_cars = 2, max_cars = 8 } = {}) => ini({
  TrainMultipleUnit: {
    schema: 1,
    id: `${snakeCase(name)}_mu`,
    name_loc: `${snakeCase(name)}_name`,
    name_en: name,
    head_id: `${snakeCase(name)}_head`,
    car_id: `${snakeCase(name)}_car`,
    tail_id: `${snakeCase(name)}_head`,
    tail_flip: true,
    min_cars,
    max_cars
  }
}).replaceAll('\r', '')