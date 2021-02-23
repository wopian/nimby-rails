import { MU_TAG, sortObject, plural } from '../index.js'

export const createDescription = ({ name = 'Company', region, trains = [], totalTrains = 0, totalCompositions = 0 } = {}) => {
  let description = `Collection of ${totalTrains} EMU${plural(totalTrains)} (${totalCompositions} composition${plural(totalCompositions)}) operated by ${name}`
  if (region) description += ` in the ${region} region`
  description += '.\n'

  if (trains.length > 0) {
    for (const type of Object.values(MU_TAG.ROLE).sort()) {
      const filteredTrains = trains.filter(({ tags }) => tags ? tags.includes(type) : false)
      if (filteredTrains.length === 0) continue

      description += `\n${type.charAt(0).toLocaleUpperCase()}${type.slice(1)}:\n`
      for (const train of sortObject(filteredTrains, 'name')) {
        if (train.wiki) description += `[url=${train.wiki}]`
        description += train.name
        if (train.wiki) description += '[/url]'
        description += '\n'
      }
    }
  }

  return description.replaceAll('\r', '').trimEnd()
}