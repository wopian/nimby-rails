import { TRAIN_TYPE } from '../src/utils/index.js'

export default [
  {
    name: 'Tobu Railway',
    trains: [
      {
        name: 'Tobu 100',
        train_type: TRAIN_TYPE.EXPRESS,
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
        name: 'Tobu 200',
        train_type: TRAIN_TYPE.EXPRESS,
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
        name: 'Tobu 250',
        train_type: TRAIN_TYPE.EXPRESS,
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
        name: 'Tobu 300',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 500',
        train_type: TRAIN_TYPE.EXPRESS,
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
        name: 'Tobu 634',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 800',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 850',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 8000',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 9000',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 9050',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 10000',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 10030',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 10080',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 20400',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 30000',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 50000',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 50050',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 50070',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 50090',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 60000',
        train_type: TRAIN_TYPE.COMMUTER,
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
        name: 'Tobu 70000',
        train_type: TRAIN_TYPE.COMMUTER,
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
  },
  /*
  {
    name: 'Seibu Railway',
    trains: []
  },
  {
    name: 'Keisei Electric Railway',
    trains: []
  },
  {
    name: 'Keio Corporation',
    trains: []
  },
  {
    name: 'Odakyu Electric Railway',
    trains: []
  },
  {
    name: 'Tokyu Corporation',
    trains: []
  },
  {
    name: 'Keikyu Corporation',
    trains: []
  },
  {
    name: 'Tokyo Metro',
    trains: []
  },
  {
    name: 'Sagami Railway',
    trains: []
  },
  {
    name: 'Meitetsu',
    trains: []
  },
  {
    name: 'Kintetsu Railway',
    trains: []
  },
  {
    name: 'Nankai Electric Railway',
    trains: []
  },
  {
    name: 'Keihan Electric Railway',
    trains: []
  },
  {
    name: 'Hankyu',
    trains: []
  },
  {
    name: 'Hanshin Electric Railway',
    trains: []
  },
  {
    name: 'Nishi-Nippon Railroad',
    trains: []
  },
  {
    name: 'Shin-Keisei Electric Railway',
    trains: []
  },
  {
    name: 'Kita-Osaka Kyuko Electric Railway',
    trains: []
  },
  {
    name: 'Senbei High Speed Railway',
    trains: []
  },
  {
    name: 'Kobe High Speed Railway',
    trains: []
  },
  {
    name: 'Sanyo Electric Railway',
    trains: []
  },
  {
    name: 'Hokkaido Railway Company (JR Hokkaido)',
    trains: []
  },
  {
    name: 'East Japan Railway Company (JR East)',
    trains: []
  },
  {
    name: 'Central Japan Railway Company (JR Central)',
    trains: []
  },
  {
    name: 'West Japan Railway Company (JR West)',
    trains: []
  },
  {
    name: 'Shikoku Railway Company (JR Shikoku)',
    trains: []
  },
  {
    name: 'Kyushu Railway Company (JR Kyushu)',
    trains: []
  }
  */
]