import { REGION } from '../../components/index.js'

export const odakyu_electric_railway = {
  wiki: 'https://ja.wikipedia.org/wiki/小田急電鉄',
  name: 'Odakyu Electric Railway',
  native: '小田急電鉄株式会社',
  region: REGION.KANTO,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急30000形電車',
      name: 'Odakyu 30000 EXE', // Excellent Express
      names: { head: 'KuHa 30050', car: 'DeHa 30000,SaHa 30050' },
      min_cars: 4,
      max_cars: 6,
      max_speed: 120,
      length: { head: 19.75, car: 20 },
      width: 2.9,
      power: 195,
      max_pax: { head: (56 + 60) / 2, car: (60 + 56 + 68 + 58) / 4 },
      empty_mass: { head: (33.8 + 34.7) / 2, car: (41.8 * 2 + 36.9 + 35.8) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急50000形電車',
      name: 'Odakyu 50000 VSE', // Vault Super Express
      names: { head: 'DeHa 50000/50900', car: 'DeHa 50100/50200/50300/50400/50500/50600/50700/50800' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 130,
      length: { head: 18.2, car: 13.8 },
      width: 2.8,
      power: 135,
      max_pax: { head: 48, car: (40 * 6 + 12 + 10) / 8 },
      empty_mass: { head: (29.7 + 29.9) / 2, car: (24.7 + 25.7 * 2 + 24.5 + 24.3 + 25.5 + 25.6 + 24.6) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急60000形電車',
      name: 'Odakyu 60000 MSE', // Multi Super Express
      names: { head: 'KuHa 60050', car: 'DeHa 60000' },
      min_cars: 4,
      max_cars: 6,
      max_speed: 120,
      length: { head: 20.22, car: 20 },
      width: 2.85,
      power: 190,
      max_pax: { head: (56 + 60) / 2, car: (60 + 56 + 68 + 52) / 4 },
      empty_mass: { head: (32.1 + 32.3) / 2, car: (39.6 + 38.9 + 38.3 + 36.4) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急70000形電車',
      name: 'Odakyu 70000 GSE', // Graceful Super Express
      names: { head: 'KuHa 70050/70350', car: 'DeHa 70000/70100/70200/70300,SaHa 70150' },
      min_cars: 7,
      max_cars: 7,
      max_speed: 120,
      length: { head: 21.3, car: 20 },
      width: 2.878,
      power: 190,
      max_pax: { head: 56, car: (60 * 2 + 64 * 2 + 40) / 5 },
      empty_mass: { head: 268.7 / 7, car: 268.7 / 7 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急8000形電車',
      name: 'Odakyu 8000',
      names: { head: 'KuHa 8250/8550', car: 'DeHa 8200/8300/8500,SaHa 8450' },
      min_cars: 4,
      max_cars: 6,
      max_speed: 110,
      length: { head: 20, car: 20 },
      width: 2.9,
      power: (140 * 4 + 190 * 4) / 8,
      max_pax: { head: 144, car: 162 },
      empty_mass: { head: (31.2 + 31.7) / 2, car: (39.8 + 33.3 + 40.3 + 39.3) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急1000形電車',
      name: 'Odakyu 1000',
      names: { head: 'KuHa 1050', car: 'DeHa 1000,SaHa 1050' },
      min_cars: 4,
      max_cars: 10,
      max_speed: 110,
      length: { head: 20.15, car: 20 },
      width: 2.86,
      power: (175 * 4 + 190 * 4) / 8,
      max_pax: { head: 144, car: 157 },
      empty_mass: { head: (29.5 + 29.8) / 2, car: (37.9 + 29.3 + 36.2 + 38.1 * 2 + 29.2 * 2 + 38.2) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急2000形電車',
      name: 'Odakyu 2000',
      names: { head: 'KuHa 2050', car: 'DeHa 2000,SaHa 2050' },
      min_cars: 8,
      max_cars: 8,
      max_speed: 120,
      length: { head: 20.15, car: 20 },
      width: 2.86,
      power: 175,
      max_pax: { head: 146, car: 158 },
      empty_mass: { head: (28 + 28.1) / 2, car: (36.7 * 2 + 35.9 + 28.5 + 26.9 + 35.8) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急3000形電車',
      name: 'Odakyu 3000',
      names: { head: 'KuHa 3050', car: 'DeHa 3000,SaHa 3050' },
      min_cars: 6,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20, car: 20 },
      width: 2.866,
      power: (180 * 3 + 190 * 8) / 10,
      max_pax: { head: 144, car: 155 },
      empty_mass: { head: (26.2 + 26.4) / 2, car: (33 * 2 + 34.4 * 2 + 26.7 + 26.3) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急4000形電車_(2代)',
      name: 'Odakyu 4000 II',
      names: { head: 'KuHa 4050', car: 'DeHa 4000,SaHa 4050' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20.15, car: 20 },
      width: 2.79,
      power: 190,
      max_pax: { head: 144, car: 153 },
      empty_mass: { head: 30.9, car: (32.9 * 2 + 33 * 2 + 27.9 + 28.6 + 29.9 + 32.7) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/小田急5000形電車_(2代)',
      name: 'Odakyu 5000 II',
      names: { head: 'KuHa 5050/5450', car: 'DeHa 5000/5100/5200/5300/5400,SaHa 5150/5250/5350' },
      min_cars: 10,
      max_cars: 10,
      max_speed: 120,
      length: { head: 20.4, car: 20 },
      width: 2.9,
      power: 190,
      max_pax: { head: 144, car: 155 },
      empty_mass: { head: 25.8, car: 35.4 }
    }
  ]
}