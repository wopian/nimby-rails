import { MU_TAG, plural } from '../index.js'

const getCompositionTotal = trains => trains.reduce((sum, { composition }) => composition ? sum + composition.length : sum, 0)

const filterRoleTags = ({ tags }) => tags ? tags.filter(tag =>Object.values(MU_TAG.ROLE).indexOf(tag) !== -1) : []

const listRoles = trains => Array.from(new Set([].concat(...trains.map(filterRoleTags)))).sort()

const listTrains = (trains, totalTrains) => {
  const totalCompositions = getCompositionTotal(trains)
  const roles = listRoles(trains)

  let description = ` ${totalTrains} EMU${plural(totalTrains)} (${totalCompositions} composition${plural(totalCompositions)}`
  if (roles?.length > 1) description += ` - ${roles.join('/')}`
  return description += ')'
}

const listCompanies = (companies) => {
  let description = ''
  for (const { wiki, name, trains = []} of companies) {
    const totalTrains = trains.length

    if (wiki) description += `[url=${wiki}]`
    description += name
    if (wiki) description += '[/url]'
    if (totalTrains > 0) description += listTrains(trains, totalTrains)
  }
  return description
}

const listRegionsAndCompanies = (regions, companies) => {
  let description = ''
  for (const region of regions) {
    description += `\n${region} region:\n`
    description += listCompanies(companies.filter(company => company.region === region))
    description += '\n'
  }
  return description
}

export const createCollectionDescription = ({ companies = [], country = 'Japan' } = {}) => {
  const totalCompanies = companies.length
  if (totalCompanies === 0) return ''

  const regions = new Set(companies.map(company => company.region))
  const totalTrains = companies.reduce((total, { trains }) => trains ? total + trains.length : total, 0)

  const totalCompositions = companies.reduce((total, { trains }) => trains ? total + getCompositionTotal(trains) : total, 0)

  let description = `Collection of ${totalTrains} EMU${plural(totalTrains)} (${totalCompositions} composition${plural(totalCompositions)}) from ${totalCompanies} compan${plural(totalCompanies, 'ies', 'y')} operating in ${country}.\n`

  if (regions.length === 0) description += listCompanies(companies)
  else description += listRegionsAndCompanies(regions, companies)

  return description.trimEnd()
}