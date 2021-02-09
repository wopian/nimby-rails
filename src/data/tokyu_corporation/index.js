import { REGION } from '../../components/index.js'

export const tokyu_corporation = {
  wiki: 'https://ja.wikipedia.org/wiki/東急',
  name: 'Tokyu Corporation',
  native: '東急株式会社',
  region: REGION.KANTO,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急8500系電車',
      name: 'Tokyu 8500',
      names: { head: 'DeHa 8600/8500', car: 'DeHa 8700/8800,SaHa 8900' },
      min_cars: 5,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.8,
      power: 170,
      max_pax: { head: 136, car: 144 },
      empty_mass: { head: 31, car: (36 * 6 + 28 * 2) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急9000系電車',
      name: 'Tokyu 9000',
      names: { head: 'KuHa 9000/9100', car: 'DeHa 9200/9300/9400/9600,SaHa 9700/9800' },
      min_cars: 5,
      max_cars: 8,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.8,
      power: 170, // * 4
      max_pax: { head: 130, car: 144 },
      empty_mass: { head: 235.7 / 8, car: 235.7 / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急1000系電車',
      name: 'Tokyu 1000',
      names: { head: 'KuHa 1000/1100', car: 'DeHa 1200/1250/1300/1350/1400/1450' },
      min_cars: 3,
      max_cars: 8,
      max_speed: 120,
      length: { head: 18, car: 18 },
      width: 2.8,
      power: 130,
      max_pax: { head: 125, car: 135 },
      empty_mass: { head: 247.6 / 8, car: 247.6 / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急2000系電車',
      name: 'Tokyu 2000',
      names: { head: 'KuHa 2000/2100', car: 'DeHa 2200/2250/2300/2350/2400/2450,SaHa 2700/2800' },
      min_cars: 5,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.8,
      power: 175,
      max_pax: { head: 130, car: 144 },
      empty_mass: { head: 312.4 / 10, car: 312.4 / 10 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急3000系電車_(2代)',
      name: 'Tokyu 3000 II',
      names: { head: 'KuHa 3000/3100', car: 'DeHa 3200/3250/3400,SaHa 3500' },
      min_cars: 6,
      max_cars: 8,
      max_speed: 120,
      length: { head: 20.3, car: 20 },
      width: 2.77,
      power: 190,
      max_pax: { head: 141, car: 151 },
      empty_mass: { head: 180.5 / 6, car: 180.5 / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急5000系電車_(2代)',
      name: 'Tokyu 5000 II',
      names: { head: 'KuHa 5000/5100', car: 'DeHa 5200/5400/5500/5800/5900,SaHa 5300/5600/5700' },
      min_cars: 8,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20.1, car: 20 },
      width: 2.8,
      power: 190,
      max_pax: { head: 140, car: 152 }, // no info
      empty_mass: { head: (25.9 + 26) / 2, car: (30.9 + 24.4 * 2 + 32 * 2 + 32.9 * 2 + 25) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急5000系電車_(2代)',
      name: 'Tokyu 5050 II',
      names: { head: 'KuHa 5150/5850', car: 'DeHa 5250/5350/5650/5750,SaHa 5450/5550' },
      min_cars: 8,
      max_cars: 8,
      max_speed: 120,
      length: { head: 20.2, car: 20 },
      width: 2.82,
      power: 190,
      max_pax: { head: 140, car: 152 }, // no info
      empty_mass: { head: (27.8 + 27.6) / 2, car: (32.7 * 2 + 33.6 + 26.3 + 26.1 + 33.5 * 2 + 26.5) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急5000系電車_(2代)',
      name: 'Tokyu 5080 II',
      names: { head: 'KuHa 5180/5680', car: 'DeHa 5280/5480/5580,SaHa 5380' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 120,
      length: { head: 20.2, car: 20 },
      width: 2.8,
      power: 190,
      max_pax: { head: 140, car: 152 }, // no info
      empty_mass: { head: (26.3 + 26.4) / 2, car: (30.9 + 28.2 + 33.3 + 32.9) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急6000系電車_(2代)',
      name: 'Tokyu 6000 II',
      names: { head: 'KuHa 6100/6700', car: 'DeHa 6200/6300/6500/6600,SaHa 6400' },
      min_cars: 6,
      max_cars: 7,
      max_speed: 120,
      length: { head: 20.435, car: 20 },
      width: 2.8,
      power: 190,
      max_pax: { head: 139, car: 150 },
      empty_mass: { head: (26.9 + 26.8) / 2, car: (30.7 * 2 + 28.2 + 33.3 + 32.9) / 5 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急7000系電車_(2代)',
      name: 'Tokyu 7000 II',
      names: { head: 'DeHa 7100,KuHa 7300', car: 'DeHa 7200' },
      min_cars: 3,
      max_cars: 3,
      max_speed: 120,
      length: { head: 18.1, car: 18 },
      width: 2.8,
      power: 190,
      max_pax: { head: 122, car: 134 },
      empty_mass: { head: (31.2 + 26.8) / 2, car: 34.1 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急2020系電車',
      name: 'Tokyu 2020',
      names: { head: 'KuHa 2020/2120', car: 'DeHa 2220/2320/2620/2820/2920,SeHa 2420/2520/2720' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20.47, car: 20 },
      width: 2.788,
      power: 140,
      max_pax: { head: 143, car: 155 }, // no info
      empty_mass: { head: (31.5 + 31.4) / 2, car: (33.5 * 4 + 27.8 + 27.5 * 2 + 32) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急2020系電車',
      name: 'Tokyu 6020',
      names: { head: 'KuHa 6120/6720', car: 'DeHa 6220/6320/6520/6620,SeHa 6420' },
      min_cars: 7,
      max_cars: 7,
      max_speed: 120,
      length: { head: 20.47, car: 20 },
      width: 2.788,
      power: 140,
      max_pax: { head: 143, car: 155 },
      empty_mass: { head: (31.2 + 31.1) / 2, car: (33.3 * 4 + 27.3) / 5 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急2020系電車',
      name: 'Tokyu 3020',
      names: { head: 'KuHa 3120/3820', car: 'DeHa 3220/3320/3620/3720' },
      min_cars: 6,
      max_cars: 8,
      max_speed: 120,
      length: { head: 20.47, car: 20 },
      width: 2.788,
      power: 140,
      max_pax: { head: 143, car: 155 },
      empty_mass: { head: (31.5 + 31.9) / 2, car: 33.3 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東急300系電車',
      name: 'Tokyu 300',
      names: { head: 'Tokyu 300', car: 'Tokyu 300' },
      min_cars: 2,
      max_cars: 2,
      max_speed: 60,
      length: { head: 11.99, car: 0.1 },
      width: 2.5,
      power: 60,
      max_pax: { head: 132, car: 0 },
      empty_mass: { head: 15.35, car: 0 }
    }
  ]
}