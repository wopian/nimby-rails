import { stringify as ini } from 'ini'

export const createMeta = ({ name = 'Mod Name', desc, version = '0.0.1' } = {}) => ini({
  ModMeta: {
    schema: 1,
    name,
    author: 'wopian',
    desc: desc ? desc : `Collection of trains from ${name}`,
    version
  }
}).replaceAll('\r', '')