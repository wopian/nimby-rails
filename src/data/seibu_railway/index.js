import { REGION } from '../../components/index.js'

// Schema 2 default_code: 'SBR-30##'

export const seibu_railway = {
  wiki: 'https://ja.wikipedia.org/wiki/西武鉄道',
  name: 'Seibu Railway',
  native: '西武鉄道株式会社',
  region: REGION.KANTO,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武001系電車',
      name: 'Seibu 001',
      min_cars: 8,
      max_cars: 8,
      max_speed: 120,
      length: { head: 20.47, car: 20 },
      width: 2.8,
      power: 170,
      max_pax: { head: (422 - (55 * 6)) / 2, car: 55 },
      empty_mass: { head: 283.2 / 8, car: 283.2 / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武101系電車',
      name: 'Seibu 101 (New)',
      names: { head: 'KuHa 1101', car: 'MoHa 101' },
      min_cars: 2,
      max_cars: 4,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.85,
      power: 150,
      max_pax: { head: 160, car: 168 },
      empty_mass: { head: 40, car: 29 } // reversed because 2-car is 40t not 29t
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武101系電車',
      name: 'Seibu 301',
      names: { head: 'KuHa 1301', car: 'MoHa 301,SaHa 1301' },
      min_cars: 8,
      max_cars: 8,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.85,
      power: 150,
      max_pax: { head: 160, car: 168 },
      empty_mass: { head: 29, car: (40 * 4 + 28 * 2) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武2000系電車',
      name: 'Seibu 2000',
      names: { head: 'KuHa 2001', car: 'MoHa 2101' },
      min_cars: 2,
      max_cars: 8,
      max_speed: 110,
      length: { head: 20, car: 20 },
      width: 2.8495,
      power: 130,
      max_pax: { head: 136, car: 144 },
      empty_mass: { head: 29, car: 40 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武4000系電車',
      name: 'Seibu 4000',
      names: { head: 'KuHa 4001', car: 'MoHa 4101' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 110,
      length: { head: 20, car: 20 },
      width: 2.85,
      power: 150,
      max_pax: { head: (119 + 127) / 2, car: 138 },
      empty_mass: { head: (31 + 29) / 2, car: 40 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武8500系電車',
      name: 'Seibu 8500',
      names: { head: 'KuHa 8500', car: 'MoHa 8500' },
      min_cars: 4,
      max_cars: 4,
      max_speed: 80,
      length: { head: 8.5, car: 8.5 },
      width: 2.4308,
      power: 95,
      max_pax: { head: 71, car: 80 },
      empty_mass: { head: 11, car: 10.5 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武6000系電車',
      name: 'Seibu 6000',
      names: { head: 'KuHa 6000/6100', car: 'MoHa 6200/6300/6500/6800/6900,SaHa 6400/6700' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.8,
      power: (155 + 170 + 190) / 3,
      max_pax: { head: 135, car: 145 },
      empty_mass: { head: 25, car: 35.8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武9000系電車',
      name: 'Seibu 9000',
      names: { head: 'KuHa 9000/9100', car: 'MoHa 9200/9300/9500/9600/9800/9900,SaHa 9400/9700' },
      min_cars: 4,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.87,
      power: 135,
      max_pax: { head: 137, car: 147 },
      empty_mass: { head: 28.1, car: 39 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武10000系電車',
      name: 'Seibu 10000',
      names: { head: 'KuHa 10100/10700', car: 'MoHa 10200/10300/10500/10600,SaHa 10400' },
      min_cars: 7,
      max_cars: 7,
      max_speed: 110,
      length: { head: 20, car: 20 },
      width: 2.9,
      power: 150,
      max_pax: { head: (38 + 48) / 2, car: 64 },
      // empty_mass: { head: 35, car: 37 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武20000系電車',
      name: 'Seibu 20000',
      names: { head: 'KuHa 20000/20100', car: 'MoHa 20200/20300/20500/20800/20900,SaHa 20400/20600/20700' },
      min_cars: 8,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20.27, car: 20 },
      width: 2.8,
      power: 135, // * 4,
      max_pax: { head: 135, car: 145 },
      empty_mass: { head: 23.6, car: 33.6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武30000系電車',
      name: 'Seibu 30000',
      names: { head: 'KuHa 30000/30100', car: 'MoHa 30200/30300/30500/30800/30900,SaHa 30400/30600/30700' },
      min_cars: 2,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.975,
      power: 165, // * 4,
      max_pax: { head: 141, car: 153 },
      empty_mass: { head: 24.7, car: 34.1 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/西武40000系電車',
      name: 'Seibu 40000',
      names: { head: 'KuHa 40000/40100', car: 'MoHa 40200/40300/40500/40800/40900,SaHa 40400/40600/40700' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20.27, car: 20 },
      width: 2.8,
      power: 190,
      max_pax: { head: (1_299 - (132 * 8)) / 2, car: 132 },
      empty_mass: { head: 26.7, car: 36.9 }
    }
  ]
}