export const tobu_railway = {
  name: 'Tobu Railway',
  native: '東武鉄道株式会社',
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武100系電車',
      name: 'Tobu 100',
      names: { head: 'MoHa 100', car: 'MoHa 100' },
      min_cars: 6,
      max_cars: 6,
      length: { head: 21.6, car: 20.2 },
      width: 2.878,
      power: 150 * 4,
      max_speed: 130,
      max_pax: { head: (24 + 44) / 2, car: (64 * 2 + 56 + 36) / 4 },
      empty_mass: { head: (35.5 + 36) / 2, car: (37.5 * 2 + 36.5 * 2) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武200系電車',
      name: 'Tobu 200',
      names: { head: 'MoHa 200', car: 'MoHa 200' },
      min_cars: 6,
      max_cars: 6,
      length: { head: 21.3, car: 20 },
      width: 2.878,
      power: 75 * 4,
      max_speed: 165,
      max_pax: { head: 60, car: (72 * 2 + 76 + 58) / 4 },
      empty_mass: { head: (40.5 + 41.5) / 2, car: (39.5 * 3 + 40.5) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武200系電車',
      name: 'Tobu 250',
      names: { head: 'KuHa 250', car: 'MoHa 250,SaHa 250' },
      min_cars: 6,
      max_cars: 6,
      length: { head: 21.3, car: 20 },
      width: 2.878,
      power: 190 * 4,
      max_speed: 165,
      max_pax: { head: 60, car: (72 * 2 + 76 + 58) / 4 },
      empty_mass: { head: (35.5 + 38) / 2, car: (41 * 3 + 32) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武300系電車',
      name: 'Tobu 300',
      names: { head: 'KuHa 300', car: 'MoHa 300' },
      min_cars: 4,
      max_cars: 6,
      length: { head: 20.2, car: 20 },
      width: 2.878,
      power: 130 * 4,
      max_speed: 110,
      max_pax: { head: 64, car: (72 * 2 + 68 * 2) / 4 },
      empty_mass: { head: 34, car: (39.5 * 2 + 40 * 2) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武500系電車',
      name: 'Tobu 500',
      names: { head: 'MoHa 500', car: 'SaHa 500' },
      min_cars: 3,
      max_cars: 3,
      length: { head: 20, car: 20 },
      width: 2.870,
      power: 190 * 4,
      max_speed: 135,
      max_pax: { head: 112, car: 136 },
      empty_mass: { head: (40.5 + 40.4) / 2, car: 35.1 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武6050系電車',
      name: 'Tobu 634',
      names: { head: 'KuMoHa 6150', car: 'KuHa 6250' },
      min_cars: 4,
      max_cars: 4,
      length: { head: 20, car: 20 },
      width: 2.878,
      power: 130 * 4,
      max_speed: 110,
      max_pax: { head: 150, car: 145 },
      empty_mass: { head: 46.3, car: 40 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武8000系電車',
      name: 'Tobu 800',
      names: { head: 'KuHa 800,MoHa 800', car: 'MoHa 800' },
      min_cars: 3,
      max_cars: 3,
      length: { head: 20, car: 20 },
      width: 2.85,
      power: 130,
      max_speed: 110,
      max_pax: { head: 145, car: 170 },
      empty_mass: { head: (26 + 40.5) / 2, car: 38 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武8000系電車',
      name: 'Tobu 850',
      names: { head: 'KuHa 850,MoHa 850', car: 'MoHa 850' },
      min_cars: 3,
      max_cars: 3,
      length: { head: 20, car: 20 },
      width: 2.85,
      power: 130,
      max_speed: 110,
      max_pax: { head: 145, car: 170 },
      empty_mass: { head: (39.5 + 26) / 2, car: 39 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武8000系電車',
      name: 'Tobu 8000',
      names: { head: 'KuHa 8100/8400', car: 'MoHa 8200/8300,SaHa 8900' },
      min_cars: 2,
      max_cars: 8,
      length: { head: 20, car: 20 },
      width: 2.85,
      power: 130,
      max_speed: 110,
      max_pax: { head: 150, car: 170 },
      empty_mass: { head: 26, car: (38 * 2 + 39 * 2 + 28 * 2) / 6 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武9000系電車',
      name: 'Tobu 9000',
      names: { head: 'KuHa 9000/9100', car: 'MoHa 9200/9300/9500/9600/9800/9900,SaHa 9400/9700' },
      min_cars: 6,
      max_cars: 10,
      length: { head: 20, car: 20 },
      width: 2.770,
      power: 150,
      max_speed: 110,
      max_pax: { head: 136, car: 144 },
      empty_mass: { head: 29, car: (40 * 4 + 39 + 28 * 2 + 38) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武9000系電車',
      name: 'Tobu 9050',
      names: { head: 'KuHa 9050/9150', car: 'MoHa 9250/9350/9550/9650/9850/9950,SaHa 9450/9750' },
      min_cars: 6,
      max_cars: 10,
      length: { head: 20, car: 20 },
      width: 2.781,
      power: 150,
      max_speed: 110,
      max_pax: { head: 141, car: 152 },
      empty_mass: { head: 30, car: (37.5 * 3 + 36.5 * 2 + 26 + 36 + 26.5) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武10000系電車',
      name: 'Tobu 10000',
      names: { head: 'KuHa 10000/11000', car: 'MoHa 12000/13000/15000/18000/19000,SaHa 14000/16000/17000' },
      min_cars: 2,
      max_cars: 10,
      length: { head: 20, car: 20 },
      width: 2.874,
      power: 140,
      max_speed: 110,
      max_pax: { head: 150, car: 170 },
      empty_mass: { head: 29, car: (39 * 4 + 28 * 2 + 37.5 + 32.5) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武10000系電車',
      name: 'Tobu 10030',
      names: { head: 'KuHa 10030/11030', car: 'MoHa 12030/13030/15030/18030/19030,SaHa 14030/16030/17030' },
      min_cars: 2,
      max_cars: 10,
      length: { head: 20, car: 20 },
      width: 2.874,
      power: 140,
      max_speed: 110,
      max_pax: { head: 142, car: 152 },
      empty_mass: { head: 29.5, car: (39.5 * 4 + 28.5 * 2 + 38 + 33) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武10000系電車',
      name: 'Tobu 10080',
      names: { head: 'KuHa 11480/14480', car: 'MoHa 12480/13480' },
      min_cars: 4,
      max_cars: 4,
      length: { head: 20, car: 20 },
      width: 2.874,
      power: 165,
      max_speed: 110,
      max_pax: { head: 142, car: 152 },
      empty_mass: { head: 29.5, car: 39.5 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武20000系電車',
      name: 'Tobu 20400',
      names: { head: 'KuHa 21440/24440', car: 'MoHa 22440/23440' },
      min_cars: 4,
      max_cars: 4,
      length: { head: 18, car: 18 },
      width: 2.857,
      power: 150,
      max_speed: 110,
      max_pax: { head: (119 + 120) / 2, car: (129 + 131) / 2 },
      empty_mass: { head: (29.2 + 31) / 2, car: (33.6 + 36.8) / 2 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武30000系電車',
      name: 'Tobu 30000',
      names: { head: 'KuHa 31600/34400', car: 'MoHa 32400/33600/35600,SaHa 31400/34600/36600' },
      min_cars: 4,
      max_cars: 10,
      length: { head: 20, car: 20 },
      width: 2.77,
      power: 190,
      max_speed: 120,
      max_pax: { head: 139, car: 153 },
      empty_mass: { head: 29, car: 37.5 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武50000系電車',
      name: 'Tobu 50000',
      names: { head: 'KuHa 50000/51000', car: 'MoHa 52000/53000/55000/58000/59000,SaHa 54000/56000/57000' },
      min_cars: 10,
      max_cars: 10,
      length: { head: 20, car: 20 },
      width: 2.8,
      power: 165,
      max_speed: 120,
      max_pax: { head: 139, car: (154 * 2 + 153 * 6) / 8 },
      empty_mass: { head: 27, car: (33 * 2 + 32.5 * 2 + 23 * 3 + 31.5) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武50000系電車',
      name: 'Tobu 50050',
      names: { head: 'KuHa 50050/51050', car: 'MoHa 52050/53050/55050/58050/59050,SaHa 54050/56050/57050' },
      min_cars: 10,
      max_cars: 10,
      length: { head: 20, car: 20 },
      width: 2.77,
      power: 165,
      max_speed: 120,
      max_pax: { head: 137, car: (152 * 2 + 151 * 6) / 8 },
      empty_mass: { head: 27.5, car: (33 * 2 + 32.5 * 2 + 23 * 3 + 31.5) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武50000系電車',
      name: 'Tobu 50070',
      names: { head: 'KuHa 50070/51070', car: 'MoHa 52070/53070/55070/58070/59070,SaHa 54070/56070/57070' },
      min_cars: 10,
      max_cars: 10,
      length: { head: 20.13, car: 20 },
      width: 2.8,
      power: 165,
      max_speed: 120,
      max_pax: { head: 140, car: (154 * 2 + 153 * 6) / 8 },
      empty_mass: { head: (27.8 + 28.7) / 2, car: (32.7 * 2 + 31.9 * 2 + 24.4 * 3 + 31.1) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武50000系電車',
      name: 'Tobu 50090',
      names: { head: 'KuHa 50090/51090', car: 'MoHa 52090/53090/55090/58090/59090,SaHa 54090/55090/57090' },
      min_cars: 10,
      max_cars: 10,
      length: { head: 20.13, car: 20 },
      width: 2.8,
      power: 165,
      max_speed: 120,
      max_pax: { head: 124, car: (136 * 2 + 135 * 6) / 8 },
      empty_mass: { head: 28.2, car: (33.9 * 2 + 33.4 * 2 + 25.5 * 3 + 32.3) / 8 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武60000系電車',
      name: 'Tobu 60000',
      names: { head: 'KuHa 61600/66600', car: 'MoHa 62600/63600/65600,SaHa 64600' },
      min_cars: 6,
      max_cars: 6,
      length: { head: 20.13, car: 20 },
      width: 2.8,
      power: 165,
      max_speed: 120,
      max_pax: { head: 133, car: 146 },
      empty_mass: { head: (27.7 + 27.8) / 2, car: (33.1 * 2 + 28  + 31.9) / 4 }
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武70000系電車',
      name: 'Tobu 70000',
      names: { head: 'KuHa 71700/77700', car: 'MoHa 72700/73700/74700/75700/76700' },
      min_cars: 6,
      max_cars: 7,
      length: { head: 20.47, car: 20 },
      width: 2.780,
      power: 205,
      max_speed: 110,
      max_pax: { head: 140, car: 151 },
      empty_mass: { head: (34.3 + 34.5) / 2, car: (33.2 * 2 + 32.9 + 35.1 + 33.1) / 5 }
    }
  ]
}