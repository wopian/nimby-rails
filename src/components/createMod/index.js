import { ini, createMeta, createTrains, createDescription, sortObject } from '../index.js'

export const createMod = ({ name, native, region, version, units, trains }) => {
  const totalTrains = trains.length
  const totalCompositions = trains.reduce((sum, { composition }) => sum + composition.length, 0)

  let output = ini(createMeta({ name, native, region, version, totalTrains, totalCompositions }))
  output += ini(createTrains(trains, units)).replaceAll('\\#', '#')

  const description = createDescription({
    name,
    native,
    region,
    trains: sortObject(trains, 'name'),
    totalTrains,
    totalCompositions
  })

  return {
    data: output.trimEnd(),
    description,
    totalTrains,
    totalCompositions
  }
}