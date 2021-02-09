import { REGION } from '../../components/index.js'

export const nishitetsu = {
  wiki: 'https://ja.wikipedia.org/wiki/西日本鉄道',
  name: 'Nishitetsu (Nishi-Nippon Railroad)',
  native: '西鉄（西日本鉄道）',
  region: REGION.KYUSHU,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/西鉄3000形電車',
      name: 'Nishitetsu 3000',
      names: { head: 'Ku 3000/3500', car: 'Mo 3300/3600,Sa 3400' },
      min_cars: 2,
      max_cars: 5,
      max_speed: 120,
      length: { head: 19.5, car: 19.5 },
      width: 2.77,
      power: 175,
      max_pax: { head: 118, car: 131 },
      empty_mass: { head: (26 + 28) / 2, car: 35 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西鉄5000形電車',
      name: 'Nishitetsu 5000',
      names: { head: 'Ku 5000/5500', car: 'Mo 5200/5300' },
      min_cars: 3,
      max_cars: 4,
      max_speed: 110,
      length: { head: 19.5, car: 19.5 },
      width: 2.74,
      power: 135,
      max_pax: { head: 140, car: 150 },
      empty_mass: { head: (27.3 + 28.5) / 2, car: 32.9 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西鉄6000形電車',
      name: 'Nishitetsu 6000',
      names: { head: 'Ku 6000/6500', car: 'Mo 6200/6300' },
      min_cars: 3,
      max_cars: 4,
      max_speed: 110,
      length: { head: 19.5, car: 19.5 },
      width: 2.716,
      power: 135,
      max_pax: { head: 132, car: 146 },
      empty_mass: { head: 29, car: (36 + 38) / 2 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西鉄6000形電車',
      name: 'Nishitetsu 6050',
      names: { head: 'Ku 6000/6500', car: 'Mo 6200/6300' },
      min_cars: 3,
      max_cars: 4,
      max_speed: 110,
      length: { head: 19.5, car: 19.5 },
      width: 2.716,
      power: 165,
      max_pax: { head: 132, car: 146 },
      empty_mass: { head: 29, car: (36 + 38) / 2 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西鉄7000形電車',
      name: 'Nishitetsu 7000', // 4 doors per car
      names: { head: 'Ku 7500,Mo 7100', car: '' },
      min_cars: 2,
      max_cars: 2,
      max_speed: 120,
      length: { head: 19.5, car: 0.1 },
      width: 2.716,
      power: 170,
      max_pax: { head: 130, car: 0 },
      empty_mass: { head: (29 + 36) / 2, car: 0 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西鉄7000形電車',
      name: 'Nishitetsu 7050', // 3 doors per car
      names: { head: 'Ku 7500,Mo 7100', car: '' },
      min_cars: 2,
      max_cars: 2,
      max_speed: 120,
      length: { head: 19.5, car: 0.1 },
      width: 2.716,
      power: 170,
      max_pax: { head: 130, car: 0 },
      empty_mass: { head: (29 + 36) / 2, car: 0 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西鉄9000形電車',
      name: 'Nishitetsu 9000',
      names: { head: 'Ku 9000/9500', car: 'Mo 9300' },
      min_cars: 2,
      max_cars: 3,
      max_speed: 120,
      length: { head: 19.5, car: 19.5 },
      width: 2.76,
      power: 175,
      max_pax: { head: 124, car: 138 },
      empty_mass: { head: (27.2 + 26) / 2, car: 34.6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西鉄600形電車_(鉄道・2代)',
      name: 'Nishitetsu 600 II',
      names: { head: 'Ku 650', car: 'Mo 600' },
      min_cars: 2,
      max_cars: 4,
      max_speed: 110,
      length: { head: 19.5, car: 19.5 },
      width: 2.74,
      power: 135,
      max_pax: { head: 140, car: 150 },
      empty_mass: { head: (26.5 + 29) / 2, car: (33.8 + 32.9) / 2 }
    }
  ]
}