import { TRAIN_TYPE, REGION_COLOURS, filterTrainType } from '../index.js'

export const createCollectionDescription = ({ companies = [], country = 'Japan' } = {}) => {
  if (companies.length === 0) return ''
  const regions = new Set(companies.map(a => a.region))
  const totalTrains = companies.reduce((a, b) => {
    if (!Number.isInteger(a)) a = 0
    return a + b?.trains?.length
  })
  let description = `Collection of ${totalTrains} trains from ${companies.length} companies operating in ${country}.\n`
  for (const region of regions) {
    description += `\n${region} region`
    if (REGION_COLOURS[region]) description += ` (${REGION_COLOURS[region]} on map)`
    description += ':\n'
    const filteredCompanies = companies.filter(company => company.region === region)
    for (const company of filteredCompanies) {
      if (company.wiki) description += `[url=${company.wiki}]`
      description += company.name
      if (company.wiki) description += '[/url]'
      if (company?.trains?.length > 0) {
        for (const type in TRAIN_TYPE) {
          const filteredTrains = filterTrainType({ trains: company.trains, filter: TRAIN_TYPE[type]})
          if (filteredTrains.length === 0) continue
          description += ` ${filteredTrains.length} ${type.toLocaleLowerCase()},`
        }
        description = `${description.slice(0, -1)}`
      }
      description += '\n'
    }
  }
  description += '\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.'
  return description.trimEnd()
}