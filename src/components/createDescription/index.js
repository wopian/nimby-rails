import { TRAIN_TYPE, filterTrainType } from '../index.js'

export const createDescription = ({ name, native, region, trains } = {}) => {
  let description = `Collection of ${trains.length} EMUs operated by ${name} in the ${region} region.\n`
  for (const type in TRAIN_TYPE) {
    const filteredTrains = filterTrainType({ trains, filter: TRAIN_TYPE[type]})
    if (filteredTrains.length === 0) continue
    description += `\n${type.charAt(0)}${type.slice(1).toLocaleLowerCase()}:\n`
    for (const train of filteredTrains) {
      description += `[url=${train.wiki}]${train.name}[/url]\n`
    }
  }
  description += '\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.'
  return description.trimEnd()
}