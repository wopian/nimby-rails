import { REGION } from '../../components/index.js'

export const keikyu = {
  wiki: 'https://ja.wikipedia.org/wiki/京浜急行電鉄',
  name: 'Keikyu',
  native: '京急',
  region: REGION.KANTO,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急1500形電車',
      name: 'Keikyu 1500',
      names: { head: 'DeHa 1500', car: 'DeHa 1500,SaHa 1900' },
      min_cars: 4,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.798,
      power: 100, // * 4
      max_pax: { head: 140, car: 140 },
      empty_mass: { head: (32 + 31) / 2, car: (31.5 * 2 + 24.5 + 25.5) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急600形電車_(3代)',
      name: 'Keikyu 600 III',
      names: { head: 'DeHa 1500', car: 'DeHa 1500,SaHa 1900' },
      min_cars: 4,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.83,
      power: 180, //  * 4
      max_pax: { head: 123, car: 132 },
      empty_mass: { head: 34, car: (23.5 * 2 + 25.5 * 2 + 31.5 + 32) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急2100形電車',
      name: 'Keikyu 2100',
      names: { head: 'DeHa 2100', car: 'DeHa 2100,SaHa 2100' },
      min_cars: 8,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.83,
      power: 190, //  * 16
      max_pax: { head: 111, car: 120 },
      empty_mass: { head: 33, car: (24.5 * 2 + 26.5 * 2 + 30.5 * 2) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急1000形電車_(2代)',
      name: 'Keikyu 1000 II Batch 1-5',
      names: { head: 'DeHa 1000', car: 'DeHa 1000,SaHa 1000' },
      min_cars: 4,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.83,
      power: 190, //  * 16
      max_pax: { head: 122, car: 130 },
      empty_mass: { head: 33, car: (27 * 2 + 23 * 2 + 31 * 2) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急1000形電車_(2代)',
      name: 'Keikyu 1000 II Batch 6-9',
      names: { head: 'DeHa 1000', car: 'DeHa 1000,SaHa 1000' },
      min_cars: 4,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.83,
      power: 155, //  * 16
      max_pax: { head: 119, car: 130 },
      empty_mass: { head: 33.5, car: (32.5 * 2 + 24.5 * 2 + 32 + 28.5) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急1000形電車_(2代)',
      name: 'Keikyu 1000 II Batch 10-15',
      names: { head: 'DeHa 1000', car: 'DeHa 1000,SaHa 1000' },
      min_cars: 4,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.83,
      power: 155, //  * 16
      max_pax: { head: 118, car: 129 },
      empty_mass: { head: 34.5, car: (32.5 * 2 + 24 * 2) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急1000形電車_(2代)',
      name: 'Keikyu 1000 II Batch 16+',
      names: { head: 'DeHa 1000', car: 'DeHa 1000,SaHa 1000' },
      min_cars: 4,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.83,
      power: 155, //  * 16
      max_pax: { head: 122, car: 130 },
      empty_mass: { head: 34.5, car: (33 * 2 + 24 * 2) / 4 }
    }
  ]
}