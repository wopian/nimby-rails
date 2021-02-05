import { TRAIN_TYPE, filterTrainType } from '../index.js'

export const createDescription = ({ name = 'Company', region, trains = [] } = {}) => {
  let description = `Collection of ${trains.length} EMUs operated by ${name}`

  if (region) description += ` in the ${region} region.\n`
  else description += '.\n'

  if (trains.length > 0) {
    for (const type in TRAIN_TYPE) {
      const filteredTrains = filterTrainType({ trains, filter: TRAIN_TYPE[type]})
      if (filteredTrains.length === 0) continue
      description += `\n${type.charAt(0)}${type.slice(1).toLocaleLowerCase()}:\n`
      for (const train of filteredTrains) {
        if (train.wiki) description += `[url=${train.wiki}]`
        description += train.name
        if (train.wiki) description += '[/url]'
        description += '\n'
      }
    }
  }

  return `${description}\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.`.replaceAll('\r', '').trimEnd()
}