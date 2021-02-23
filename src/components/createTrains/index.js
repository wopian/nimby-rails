import { createTrainUnit, createTrainMultipleUnit } from '../index.js'

export const createTrains = (trains, units) => {
  const output = []

  for (const key in units) {
    const unit = units[key]
    output.push(createTrainUnit(unit))
  }

  for (const train of trains) {
    output.push(createTrainMultipleUnit(train))
  }

  // console.log(output)
  return output
}