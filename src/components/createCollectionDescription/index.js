import { TRAIN_TYPE, filterTrainType } from '../index.js'

export const createCollectionDescription = ({ companies } = {}) => {
  const regions = new Set(companies.map(a => a.region))
  const totalTrains = companies.reduce((a, b) => {
    if (!Number.isInteger(a)) a = 0
    return a + b.trains.length
  })
  let description = `Collection of ${totalTrains} trains from ${companies.length} companies operating in Japan\n\n`
  for (const region of regions) {
    description += `${region} region:\n\n`
    const filteredCompanies = companies.filter(company => company.region === region)
    for (const company of filteredCompanies) {
      description += `[url=${company.wiki}]${company.name}[/url] - `
      for (const type in TRAIN_TYPE) {
        const filteredTrains = filterTrainType({ trains: company.trains, filter: TRAIN_TYPE[type]})
        if (filteredTrains.length === 0) continue
        description += `${filteredTrains.length} ${type.toLocaleLowerCase()}, `
      }
      description = `${description.slice(0, -2)}\n`
    }
  }
  description += '\nCurrently these are using placeholder graphics from the built-in trains until I have finished collecting all the data.'
  return description.trimEnd()
}