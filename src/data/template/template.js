import { REGION, PRESET_TAG, UNIT_TAG, MU_TAG, PLACEHOLDER } from '../../components/index.js'

const UNITS = {
  template_head: {
    name: 'Head',
    max_speed: 120,
    length: 20,
    width: 2.798,
    max_pax: 120,
    empty_mass: 32,
    power: 155,
    tags: [UNIT_TAG.GAUGE.NARROW],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  template_car: {
    name: 'Car',
    max_speed: 120,
    length: 20,
    width: 2.798,
    max_pax: 120,
    empty_mass: 32,
    power: 155,
    tags: [UNIT_TAG.GAUGE.NARROW]
  }
}

export const template = {
  wiki: 'https://ja.wikipedia.org/wiki/京浜急行電鉄',
  name: 'Template',
  native: '鋳型',
  region: REGION.KANTO,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/東武100系電車',
      name: 'Train',
      description: '',
      year_introduced: 2020,
      tags: [MU_TAG.GAUGE.NARROW],
      composition: [
        {
          name: 'Composition 1M-10M',
          units: [
            { unit: UNITS.template_head },
            { unit: UNITS.template_car, min: 0, def: 3, max: 9 },
            { unit: UNITS.template_head, flip: true },
          ]
        }
      ]
    }
  ]
}