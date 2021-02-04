export const createMeta = ({ name = 'Mod Name', region, totalTrains = 0, desc, version = '0.0.1' } = {}) => ({
  ModMeta: {
    schema: 1,
    name: name,
    author: 'wopian',
    desc: desc ? desc : `${totalTrains} EMUs operated in the ${region} region`,
    version
  }
})