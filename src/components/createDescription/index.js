import { MU_TAG, sortObject, plural } from '../index.js'

const listTrains = trains => {
  let description = ''
  for (const { wiki, name } of sortObject(trains, 'name')) {
    if (wiki) description += `[url=${wiki}]`
    description += name
    if (wiki) description += '[/url]'
    description += '\n'
  }
  return description
}

export const createDescription = ({ name = 'Company', region, trains = [], totalTrains = 0, totalCompositions = 0 } = {}) => {
  let description = `Collection of ${totalTrains} EMU${plural(totalTrains)} (${totalCompositions} composition${plural(totalCompositions)}) operated by ${name}`
  if (region) description += ` in the ${region} region`
  description += '.\n'

  if (trains.length > 0) {
    const untaggedTrains = trains.filter(({ tags }) => tags ? tags.length === 0 : true)
    if (untaggedTrains.length > 0) description += `\n${listTrains(untaggedTrains)}`

    for (const type of Object.values(MU_TAG.ROLE).sort()) {
      const filteredTrains = trains.filter(({ tags }) => tags ? tags.includes(type) : false)
      if (filteredTrains.length === 0) continue

      description += `\n${type.charAt(0).toLocaleUpperCase()}${type.slice(1)}:\n`
      description += listTrains(filteredTrains)
    }
  }

  return description.replaceAll('\r', '').trimEnd()
}