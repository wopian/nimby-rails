export const keisei_electric_railway = {
  name: 'Keisei Electric Railway',
  native: '京成電鉄株式会社',
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/京成AE形電車_(2代)',
      name: 'Keisei AE',
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