import { stringify } from 'ini'

export const ini = input => {
  let output = ''

  if (Array.isArray(input)) {
    for(const element of input) {
      output += `${stringify(element)}\n`
    }
  } else {
    output += `${stringify(input)}\n`
  }

  return output.replaceAll('\r', '')
}