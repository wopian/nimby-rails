import { encode } from 'ini'

const stringify = input => `${encode(input)}\n`

export const ini = input => {
  let output = ''

  if (Array.isArray(input)) {
    for(const element of input) {
      output += stringify(element)
    }
  } else {
    output += stringify(input)
  }

  return output.replaceAll('\r', '')
}