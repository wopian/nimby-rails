import { REGION } from '../../components/index.js'

export const template = {
  wiki: 'https://ja.wikipedia.org/wiki/京浜急行電鉄',
  name: 'Template',
  native: '鋳型',
  region: REGION.KANTO,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武100系電車',
      name: 'Train',
      names: { head: 'Head', car: 'Car' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.9,
      power: 175,
      max_pax: { head: 120, car: 150 },
      empty_mass: { head: 35, car: 37 }
    }
  ]
}