export const shin_keisei_electric_railway = {
  wiki: 'https://ja.wikipedia.org/wiki/新京成電鉄',
  name: 'Shin-Keisei Electric Railway',
  native: '新京成電鉄',
  region: 'Kantō',
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/新京成電鉄N800形電車',
      name: 'Shin-Keisei N800',
      names: { head: 'MoHa N808/N801', car: 'MoHa N802/807,SaHa N803/806' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 120,
      length: { head: 18, car: 18 },
      width: 2.768,
      power: 125,
      max_pax: { head: 122, car: 133 },
      empty_mass: { head: 33, car: (33 * 2 + 27 * 2) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/新京成電鉄80000形電車',
      name: 'Shin-Keisei 80000',
      names: { head: 'MoHa 80001/80006', car: 'MoHa 80002/80005,SaHa 80003/80004' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 120,
      length: { head: 18, car: 18 },
      width: 2.768,
      power: 155,
      max_pax: { head: 122, car: 133 },
      empty_mass: { head: 33.4, car: (34.8 * 2 + 27.5 * 2) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/新京成電鉄8000形電車',
      name: 'Shin-Keisei 8000',
      names: { head: 'KuHa 8500', car: 'MoHa 8000' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 110,
      length: { head: 18, car: 18 },
      width: 2.768,
      power: (110 * 2 + 160) / 3,
      max_pax: { head: 119, car: 125 }, // no info
      empty_mass: { head: 32.3, car: (33.6 * 2 + 25.8 * 2) / 4 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/新京成電鉄8800形電車',
      name: 'Shin-Keisei 8800',
      names: { head: 'KuHa 8800', car: 'MoHa 8800,SaHa 8800' },
      min_cars: 6,
      max_cars: 8,
      max_speed: 110,
      length: { head: 18, car: 18 },
      width: 2.768,
      power: 135,
      max_pax: { head: 120, car: 126 }, // no info
      empty_mass: { head: 29, car: (33.4 * 2 + 26.1 * 4) / 6 } // no info
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/新京成電鉄8900形電車',
      name: 'Shin-Keisei 8900',
      names: { head: 'KuHa 8901/8908', car: 'MoHa 8902/8903/8906/8907' },
      min_cars: 6,
      max_cars: 6,
      max_speed: 120,
      length: { head: 18.7, car: 18 },
      width: 2.8,
      power: 135,
      max_pax: { head: 122, car: 127 },
      empty_mass: { head: 25, car: 33 } // no info
    }
  ]
}