import { TRAIN_TYPE } from '../src/utils.js'

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
        max_speed: 120,
        max_pax: { head: (24 + 44) / 2, car: (64 + 56 + 36 + 64) / 4 },
        empty_mass: { head: (35.5 + 36) / 2, car: (37.5 + 36.5 + 36.5 + 37.5) / 4 }
      }
    ]
  }
]