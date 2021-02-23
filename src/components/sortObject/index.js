const { compare } = new Intl.Collator(['en', 'jp'], { numeric: true, sensitivity: 'base' })

export const sortObject = (array, key) => array.sort((a, b) => compare(a[key], b[key]))