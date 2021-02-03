export const keio_corporation = {
  name: 'Keio Corporation',
  native: '京王電鉄株式会社',
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/京王1000系電車_(2代)',
      name: 'Keio 1000 (2nd Gen)',
      names: { head: 'KuHa 1700/1750', car: 'DeHa 1000/1050/1100' },
      min_cars: 5,
      max_cars: 5,
      max_speed: 110,
      length: { head: 20, car: 20 },
      width: 2.854,
      power: (180 * 4 + 160) / 5,
      max_pax: { head: 143, car: 154 },
      empty_mass: { head: 25.5, car: (34 * 2 + 33 * 3 + 25 * 3) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京王5000系電車_(2代)',
      name: 'Keio 5000 (2nd Gen)',
      names: { head: 'KuHa 5700/5750', car: 'DeHa 5000/5050,SaHa 5500/5550' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 130,
      length: { head: 20.44, car: 20 },
      width: 2.8,
      power: 150 * 4,
      max_pax: { head: 119, car: 130 },
      empty_mass: { head: 25.5, car: (34 * 2 + 33 * 3 + 25 * 3) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京王7000系電車',
      name: 'Keio 7000',
      names: { head: 'KuHa 7700/7750', car: 'DeHa 7000/7050/7100,SaHa 7500/7550' },
      min_cars: 2,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.8,
      power: 150 * 4,
      max_pax: { head: 150, car: 170 },
      empty_mass: { head: 28, car: (37.5 * 2 + 36.5 * 2 + 27 + 28) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京王8000系電車',
      name: 'Keio 8000',
      names: { head: 'KuHa 8700/8750', car: 'DeHa 8000/8050,SaHa 8500/8550' },
      min_cars: 8,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.8,
      power: 150 * 4,
      max_pax: { head: 143, car: 154 },
      empty_mass: { head: 28, car: (37.5 * 2 + 36.5 * 2 + 27 + 28) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京王9000系電車',
      name: 'Keio 9000',
      names: { head: 'KuHa 9700/9750', car: 'DeHa 9000/9050,SaHa 9500/9550' },
      min_cars: 8,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.845,
      power: 170,
      max_pax: { head: 141, car: 152 },
      empty_mass: { head: 25.5, car: (34 * 2+ 33 * 3+ 25 * 3) / 8 }
    }
  ]
}