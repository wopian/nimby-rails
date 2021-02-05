import { TRAIN_TYPE, filterTrainType } from '../index.js'

// key for graphics/thumbnail.svg
const REGION_COLOURS = {
  'Hokkaidō': 'red',
  'Tōhoku': 'yellow',
  'Kantō': 'green',
  'Chūbu': 'cyan',
  'Kansai': 'blue',
  'Chūgoku': 'orange',
  'Shikoku': 'purple',
  'Kyūshū': 'grey'
}

export const createCollectionDescription = ({ companies } = {}) => {
  const regions = new Set(companies.map(a => a.region))
  const totalTrains = companies.reduce((a, b) => {
    if (!Number.isInteger(a)) a = 0
    return a + b.trains.length
  })
  let description = `Collection of ${totalTrains} trains from ${companies.length} companies operating in Japan.\n`
  for (const region of regions) {
    description += `\n${region} region (${REGION_COLOURS[region]} on map):\n`
    const filteredCompanies = companies.filter(company => company.region === region)
    for (const company of filteredCompanies) {
      description += `[url=${company.wiki}]${company.name}[/url]`
      for (const type in TRAIN_TYPE) {
        const filteredTrains = filterTrainType({ trains: company.trains, filter: TRAIN_TYPE[type]})
        if (filteredTrains.length === 0) continue
        description += ` ${filteredTrains.length} ${type.toLocaleLowerCase()},`
      }
      description = `${description.slice(0, -1)}\n`
    }
  }
  description += '\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.'
  return description.trimEnd()
}