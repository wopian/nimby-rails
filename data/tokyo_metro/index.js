import { TRAIN_TYPE } from '../../src/components/index.js'

export const tokyo_metro = {
  name: 'Tokyo Metro',
  native: '東京メトロ',
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/東京メトロ1000系電車',
      train_type: TRAIN_TYPE.METRO,
      name: 'Tokyo Metro 1000',
      names: { head: '1000/1100', car: '1200/1300/1400/1500' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 80,
      length: { head: 16, car: 16 },
      width: 2.55,
      power: 120,
      max_pax: { head: 93, car: 106 },
      empty_mass: { head: 29.5, car: 26.5 }
    }
  ]
}