import { stringify as ini } from 'ini'

export const createMeta = ({ name = 'Mod Name', region, totalTrains, desc, version = '0.0.1' } = {}) => ini({
  ModMeta: {
    schema: 1,
    name: name,
    author: 'wopian',
    desc: desc ? desc : `${totalTrains} EMUs operated in the ${region} region`,
    version
  }
}).replaceAll('\r', '')