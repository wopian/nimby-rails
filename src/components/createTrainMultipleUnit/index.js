import { yellow } from 'colorette'
import { slugify } from '../index.js'

const unitsToString = units => {
  let output = ''

  for (const { unit, min, def, max, flip } of units) {
    output += `,wopian_${slugify(unit.name)}_unit`

    if (typeof min == 'number' && typeof max == 'number' && typeof def == 'number') {
      output += ` ${min} ${def} ${max}`
    } else if ((typeof min == 'undefined' || typeof max == 'undefined' || typeof def == 'undefined') && min !== max !== def) {
      // Ignore if all three are undefined
      if (!(min === max && min === def)) console.log(`${yellow('warning')} ${name} composition is missing min (${min}), def (${def}) or max (${max}) values. All values excluded from output`)
    }

    if (flip) output += ` flip`
  }

  return output
}

const compositionToString = ({ name, units }) => `wopian_${slugify(name)},${name}${unitsToString(units)}`

export const createTrainMultipleUnit = ({
  name = 'Train',
  description,
  year_introduced,
  year_retired,
  countries_operated = 'jp',
  countries_built = 'jp',
  default_code,
  default_name,
  photo,
  tags = [],
  composition = []
}) => {
  let output = {
    schema: 2,
    id: `wopian_${slugify(name)}_mu`,
    name_loc: `wopian_${slugify(name)}_name`,
    name_en: name,
    countries_operated,
    countries_built
  }

  if (tags?.length > 0) output.tags = Array.from(new Set(tags)).join(',')

  if (description) {
    output.description_loc = `wopian_${slugify(name)}_desc`,
    output.description_en = description
  }

  if (year_introduced) output.year_introduced = year_introduced

  if (year_retired) output.year_retired = year_retired

  // TODO: Implement
  if (photo) output.photo = photo

  if (default_code) output.default_code = default_code
  else {
    const unitName = name.split(' ')[0]//.slice(0, 3)
    const unitNumber = name.split(' ')[1].slice(0, -2)
    output.default_code = `${unitName}-${unitNumber}##`
  }

  if (default_name) output.default_name = default_name
  else {
    const unitNumber = name.split(' ')[1].slice(0, -2)
    output.default_name = `${name} Series ${unitNumber}## Formation`
  }

  if (composition?.length > 0) output.composition = composition.map(compositionToString)

  return { TrainMultipleUnit: output }
}