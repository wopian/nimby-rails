import { REGION, TRAIN_TYPE } from '../../components/index.js'

export const meitetsu = {
  wiki: 'https://ja.wikipedia.org/wiki/名古屋鉄道',
  name: 'Meitetsu (Nagoya Railroad)',
  native: '名鉄（名古屋鉄道）',
  region: REGION.CHUBU,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄2000系電車',
      name: 'Meitetsu 2000',
      names: { head: 'Ku 2000,Mo 2100', car: 'Mo 2050/2150' },
      min_cars: 3,
      max_cars: 8,
      max_speed: 130,
      length: { head: 19.6, car: 19.415 },
      width: 2.7,
      power: 170, // * 4
      max_pax: { head: 181 / 4, car: 181 / 4 },
      empty_mass: { head: 152.8 / 4, car: 152.8 / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄2200系電車',
      name: 'Meitetsu 2200',
      names: { head: 'Mo 2200/2300', car: 'Mo 2450,Sa 2250/2350/2400' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 130,
      length: { head: 19.6, car: 18.830 },
      width: 2.7,
      power: 170, // * 4
      max_pax: { head: 89 / 2, car: 481 / 4 },
      empty_mass: { head: 206.1 / 6, car: 206.1 }
    },
    { // 1700/2300 retired 2021
      wiki: 'https://en.wikipedia.org/wiki/Meitetsu_1700_series',
      name: 'Meitetsu 2300',
      names: { head: 'Mo 1700/2300', car: 'Mo 2450,Sa 1650/2350/2400' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 130,
      length: { head: 18.63, car: 18.83 }, // no info
      width: 2.7, // no info
      power: 170, // * 4
      max_pax: { head: 584 / 6, car: 584 / 6 },
      empty_mass: { head: (41.9 + 37.8) / 2, car: (32.5 + 27.5 + 36.2 + 28.1) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄1000系電車',
      name: 'Meitetsu 1000 Panorama Super',
      names: { head: 'Ku 1000,Mo 1400', car: 'Mo 1050/1250/1450,Sa 1200' },
      min_cars: 4,
      max_cars: 6,
      max_speed: 130,
      length: { head: 20.38, car: 19.73 },
      width: 2.74,
      power: 150, // * 4
      max_pax: { head: 108 / 2, car: 471 / 4 },
      empty_mass: { head: 224.5 / 6, car: 224.5 / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄1000系電車',
      name: 'Meitetsu 1200 Panorama Super',
      names: { head: 'Ku 1100,Mo 1500', car: 'Mo 1150/1350/1550,Sa 1300' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 130,
      length: { head: 18.9, car: 18.83 },
      width: 2.74,
      power: 150, // * 4
      max_pax: { head: 471 / 6, car: 471 / 6 },
      empty_mass: { head: ((216.9 + 217.4) / 2) / 6, car: ((216.9 + 217.4) / 2) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄6000系電車',
      name: 'Meitetsu 6000',
      names: { head: 'Ku 6000,Mo 6200', car: 'Mo 6300,Sa 6100' },
      min_cars: 2,
      max_cars: 4,
      max_speed: 100,
      length: { head: 18.95, car: 18.95 },
      width: 2.73,
      power: 150, // * 4
      max_pax: { head: 130, car: 130 },
      empty_mass: { head: 30, car: 30 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄6000系電車',
      name: 'Meitetsu 6500',
      names: { head: 'Ku 6400/6500', car: 'Mo 6450/6550' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 110,
      length: { head: 18.9, car: 18.9 },
      width: 2.73,
      power: 150, // * 4
      max_pax: { head: 130, car: 130},
      empty_mass: { head: 30, car: 30 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄6000系電車',
      name: 'Meitetsu 6800',
      names: { head: 'Ku 6800/Mo 6900', car: 'Mo 6900' },
      min_cars: 2,
      max_cars: 2,
      max_speed: 110,
      length: { head: 18.9, car: 0.1 },
      width: 2.73,
      power: 150, // * 4
      max_pax: { head: 130, car: 0 },
      empty_mass: { head: 30, car: 0 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄5000系電車_(2代)',
      name: 'Meitetsu 5000 II',
      names: { head: 'Ku 5000/5100', car: 'Mo 5050/5150' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 130,
      length: { head: 18.9, car: 18.83 },
      width: 2.744,
      power: 150, // * 4
      max_pax: { head: 125, car: 136 },
      empty_mass: { head: (33.6 + 30.5) / 2, car: 37 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄3500系電車_(2代)',
      name: 'Meitetsu 3500 II',
      names: { head: 'Ku 3500/3600', car: 'Mo 3550/3650' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 130,
      length: { head: 18.9, car: 18.83 },
      width: 2.74,
      power: 170, // * 4
      max_pax: { head: 552 / 4, car: 552 / 4 },
      empty_mass: { head: 122.2 / 4, car: 123.6 / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄3500系電車_(2代)',
      name: 'Meitetsu 3700 III',
      names: { head: 'Ku 3700/3800', car: 'Mo 3750/3850' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 130,
      length: { head: 18.9, car: 18.83 },
      width: 2.74,
      power: 170, // * 4
      max_pax: { head: 536 / 4, car: 536 / 4 },
      empty_mass: { head: 123 / 4, car: 121.4 / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄3500系電車_(2代)',
      name: 'Meitetsu 3100',
      names: { head: 'Ku 3100,Mo 3200', car: 'Mo 3200' },
      min_cars: 2,
      max_cars: 2,
      max_speed: 130,
      length: { head: 18.9, car: 0.1 },
      width: 2.74,
      power: 170, // * 4
      max_pax: { head: 258 / 2, car: 0 },
      empty_mass: { head: 63.5 / 2, car: 0 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄3300系電車_(3代)',
      name: 'Meitetsu 3300 III',
      names: { head: 'Ku 3300,Mo 3400', car: 'Mo 3350,Sa 3450' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 130,
      length: { head: 18.9, car: 18.83 },
      width: 2.743,
      power: 170, // * 4
      max_pax: { head: 490 / 4, car: 490 / 4 },
      empty_mass: { head: 132.4 / 4, car: 132.4 / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄3300系電車_(3代)',
      name: 'Meitetsu 3150 III',
      names: { head: 'Ku 3150,Mo 3250', car: 'Mo 3250' },
      min_cars: 2,
      max_cars: 2,
      max_speed: 130,
      length: { head: 18.9, car: 0.1 },
      width: 2.743,
      power: 170, // * 4
      max_pax: { head: 234 / 2, car: 0 },
      empty_mass: { head: 68 / 2, car: 0 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄4000系電車',
      name: 'Meitetsu 4000',
      names: { head: 'Ku 4000/4100', car: 'Mo 4050/4150' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 100,
      length: { head: 18.9, car: 18.83 },
      width: 2.744,
      power: 170, // * 4
      max_pax: { head: 522 / 4, car: 522 / 4 },
      empty_mass: { head: 130.1 / 4, car: 130.1 / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄9500系電車',
      name: 'Meitetsu 9500',
      names: { head: 'Ku 9500,Mo 9600', car: 'Mo 9550,Sa 9650' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 130,
      length: { head: 18.385, car: 18.230 },
      width: 2.744,
      power: 170,
      max_pax: { head: 524 / 4, car: 524 / 4 },
      empty_mass: { head: (29.8 + 37.8) / 2, car: (36.1 + 28.2) / 2 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄9500系電車',
      name: 'Meitetsu 9100',
      names: { head: 'Ku 9500,Mo 9600', car: 'Mo 9600' },
      min_cars: 2,
      max_cars: 2,
      max_speed: 130,
      length: { head: 18.385, car: 0.1 },
      width: 2.744,
      power: 170,
      max_pax: { head: 125, car: 0 },
      empty_mass: { head: (29.8 + 37.8), car: 0 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄100系電車',
      train_type: TRAIN_TYPE.METRO,
      name: 'Meitetsu 100',
      names: { head: 'Mo 110/140', car: 'Mo 120/130/160,Sa 150' },
      min_cars: 4,
      max_cars: 6,
      max_speed: 100,
      length: { head: 20, car: 20 },
      width: 2.73,
      power: 100,
      max_pax: { head: 130, car: (140 * 2 + 148 * 2) / 4 },
      empty_mass: { head: 132.4 / 4, car: 132.4 / 4 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄100系電車',
      train_type: TRAIN_TYPE.METRO,
      name: 'Meitetsu 200',
      names: { head: 'Ku 210,Mo 240', car: 'Mo 220/230/260,Sa 250' },
      min_cars: 4,
      max_cars: 6,
      max_speed: 100,
      length: { head: 20, car: 20 },
      width: 2.73,
      power: 170,
      max_pax: { head: 138, car: 148 },
      empty_mass: { head: 132.4 / 4, car: 132.4 / 4 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/名鉄300系電車',
      train_type: TRAIN_TYPE.METRO,
      name: 'Meitetsu 300',
      names: { head: 'Ku 310/340', car: 'Mo 320/330' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.746,
      power: 170,
      max_pax: { head: 530 / 4, car: 530 / 4 },
      empty_mass: { head: 132.4 / 4, car: 132.4 / 4 } // no info
    }
  ]
}