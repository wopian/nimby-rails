import { REGION } from '../../components/index.js'

export const keisei_electric_railway = {
  wiki: 'https://ja.wikipedia.org/wiki/京成電鉄',
  name: 'Keisei Electric Railway',
  native: '京成電鉄株式会社',
  region: REGION.KANTO,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/京成AE形電車_(2代)',
      name: 'Keisei AE II',
      min_cars: 8,
      max_cars: 8,
      max_speed: 170,
      length: { head: 19.5, car: 19 },
      width: 2.794,
      power: 175,
      max_pax: { head: 40, car: (56 * 4 + 52 + 42) / 6 },
      empty_mass: { head: (37.5 + 40 / 2), car: (39.5 + 38.5 + 40 + 33 * 2 + 39) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京成3000形電車_(2代)',
      name: 'Keisei 3000 II',
      names: { head: 'MoHa 3000', car: 'MoHa 3000,SaHa 3000' },
      min_cars: 6,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.768,
      power: 125,
      max_pax: { head: 122, car: 133 },
      empty_mass: { head: 27, car: 33 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京成3000形電車_(2代)',
      name: 'Keisei 3100 II',
      names: { head: 'MoHa 3100', car: 'MoHa 3100,SaHa 3100' },
      min_cars: 8,
      max_cars: 8,
      max_speed: 120,
      length: { head: 18, car: 18 },
      width: 2.845,
      power: 140,
      max_pax: { head: 122, car: 133 },
      empty_mass: { head: 28, car: 34.2 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京成3400形電車',
      name: 'Keisei 3400',
      names: { head: 'MoHa 3400', car: 'MoHa 3400,SaHa 3400' },
      min_cars: 8,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.76,
      power: 140,
      max_pax: { head: 123, car: 133 },
      empty_mass: { head: 35, car: (35 + 34 * 3 + 31 * 2) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京成3500形電車',
      name: 'Keisei 3500',
      names: { head: 'MoHa 3500', car: 'MoHa 3500' },
      min_cars: 4,
      max_cars: 6,
      max_speed: 120,
      length: { head: 18, car: 18 },
      width: 2.832,
      power: 100, // no info
      max_pax: { head: 123, car: 133 }, // no info
      empty_mass: { head: 35, car: (35 + 34 * 3 + 31 * 2) / 6 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京成3600形電車',
      name: 'Keisei 3600',
      names: { head: 'KuHa 3600', car: 'MoHa 3600' },
      min_cars: 4,
      max_cars: 8,
      max_speed: 110,
      length: { head: 18, car: 18 },
      width: 2.76,
      power: 140,
      max_pax: { head: 140, car: 140 },
      empty_mass: { head: 28, car: (33 * 2 + 28 * 4) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京成3700形電車',
      name: 'Keisei 3700',
      names: { head: 'KuHa 3700', car: 'MoHa 3700' },
      min_cars: 6,
      max_cars: 8,
      max_speed: 130,
      length: { head: 18, car: 18 },
      width: 2.76,
      power: 130,
      max_pax: { head: 126, car: 136 },
      empty_mass: { head: 34, car: (34 * 4 + 30 + 28) / 6 }
    }
  ]
}