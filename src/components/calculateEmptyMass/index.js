import { roundTo, tonToKg } from '../index.js'

export const calculateEmptyMass = ({ length, width, tags = '' } = {}) => {
  let output = (length * width) / 2
  for (const tag of tags.split(',')) {
    switch (tag) {
      case 'restaurant':
      case 'bar':
      case 'lounge':
      case 'observation':
        output *= 1.031
        continue
      case 'baggage':
      case 'sleeper':
        output *= 0.95
        continue
      case 'tram':
        output *= 0.89
        continue
      case 'generator':
        output *= 1.101
      default:
        continue
    }
  }
  return roundTo(tonToKg(output), 100)
}