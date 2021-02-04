export const sotetsu = {
  name: 'Sotetsu (Sagami Railway)',
  native: '相鉄（相模鉄道株式会社）',
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/相鉄8000系電車',
      name: 'Sotetsu 8000',
      names: { head: 'KuHa 8500/8700', car: 'DeHa 8100/8200,SeHa 8600' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 110,
      length: { head: 20.2, car: 20 },
      width: 2.9, // no info
      power: 150,
      max_pax: { head: 1522 / 10, car: 1522 / 10 },
      empty_mass: { head: 292.8 / 10, car: 292.8 / 10 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/相鉄9000系電車',
      name: 'Sotetsu 9000',
      names: { head: 'KuHa 9500/9700', car: 'DeHa 9100/9200,SeHa 9600' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.9,
      power: 180,
      max_pax: { head: 1510 / 10, car: 1510 / 10 },
      empty_mass: { head: 278.5 / 10, car: 278.5 / 10 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/相鉄10000系電車',
      name: 'Sotetsu 10000',
      names: { head: 'KuHa 10500/10700', car: 'DeHa 10100/10200/10300,SeHa 10600' },
      min_cars: 8,
      max_cars: 10,
      max_speed: 120,
      length: { head: 19.62, car: 19.5 },
      width: 2.93,
      power: 95,
      max_pax: { head: 1562 / 10, car: 1562 / 10 },
      empty_mass: { head: 259.1 / 10, car: 259.1 / 10 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/相鉄11000系電車',
      name: 'Sotetsu 11000',
      names: { head: 'KuHa 11000/11900', car: 'DeHa 11100/11200/11300/11400/11700/11800,SeHa 11500/11600' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 19.62, car: 19.5 },
      width: 2.95,
      power: 140,
      max_pax: { head: 1564 / 10, car: 1564 / 10 },
      empty_mass: { head: 311.9 / 10, car: 311.9 / 10 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/相鉄12000系電車',
      name: 'Sotetsu 12000',
      names: { head: 'KuHa 12000/12100', car: 'DeHa 12200/12300/12400/12500/12800/12900,SeHa 12600/12700' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 19.62, car: 19.5 },
      width: 2.998,
      power: 140,
      max_pax: { head: 1441 / 10, car: 1441 / 10 },
      empty_mass: { head: (31.3 + 31.6) / 2, car: (31.1 + 33.1 + 34 * 3 + 29.7 + 30.3 + 34.4) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/相鉄20000系電車',
      name: 'Sotetsu 20000',
      names: { head: 'KuHa 20000/20100', car: 'DeHa 20200/20400/20500/20700/20900,SeHa 20300/20600/20800' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 19.97, car: 19.5 },
      width: 2.77,
      power: 190,
      max_pax: { head: 1441 / 10, car: 1441 / 10 },
      empty_mass: { head: (29.9 + 30) / 2, car: (26.9 + 29.8 + 31.1 + 31.7) / 4 }
    }
  ]
}