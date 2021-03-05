import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { calculatePrice } from '../components/index.js'

/**
 * Used to populate spreadsheet for error checking
 * https://docs.google.com/spreadsheets/d/1GVfL6K55Y4AG6iyUWTfQOKJGZFZLKa6ZHyV0YekXpr8
 */

const OUTPUT = join(process.cwd(), 'tmp', 'csv')
const DEFAULT = {
  length: 20,
  width: 2.9,
  max_speed: 120,
  empty_mass: 30_000,
  max_pax: 120
}

if (!existsSync(OUTPUT)) mkdirSync(OUTPUT, { recursive: true })

for (const max_speed of [60, 80, 100, 120, 140, 160, 180, 200, 240, 280, 320, 360, 400]) {
  const DATA = {
    length: [],
    width: [],
    max_speed: [],
    empty_mass: [],
    max_pax: []
  }

  // Max Speed
  if (max_speed === 120) {
    for (let i = 10; i <= 10_000; i ++) {
      const { price, cost_per_day } = calculatePrice({
        length: DEFAULT.length,
        width: DEFAULT.width,
        max_speed: i,
        empty_mass: DEFAULT.empty_mass,
        max_pax: DEFAULT.max_pax,
      })
      DATA.max_speed.push({ x: i, y: price, z: cost_per_day })
    }
  }

  // Length
  for (let i = 10; i <= 300; i ++) {
    const length = (i / 10).toFixed(1)
    const { price, cost_per_day } = calculatePrice({
      length,
      width: DEFAULT.width,
      max_speed,
      empty_mass: DEFAULT.empty_mass,
      max_pax: DEFAULT.max_pax,
    })
    DATA.length.push({ x: length, y: price, z: cost_per_day })
  }

  // Width
  for (let i = 10; i <= 37.5; i ++) {
    const width = (i / 10).toFixed(1)
    const { price, cost_per_day } = calculatePrice({
      length: DEFAULT.length,
      width,
      max_speed,
      empty_mass: DEFAULT.empty_mass,
      max_pax: DEFAULT.max_pax,
    })
    DATA.width.push({ x: width, y: price, z: cost_per_day })
  }

  // Empty Mass
  for (let i = 1000; i <= 100_000; i += 100) {
    const { price, cost_per_day } = calculatePrice({
      length: DEFAULT.length,
      width: DEFAULT.width,
      max_speed,
      empty_mass: i,
      max_pax: DEFAULT.max_pax,
    })
    DATA.empty_mass.push({ x: i, y: price, z: cost_per_day })
  }

  // Max Pax
  for (let i = 0; i <= 1000; i ++) {
    const { price, cost_per_day } = calculatePrice({
      length: DEFAULT.length,
      width: DEFAULT.width,
      max_speed,
      empty_mass: DEFAULT.empty_mass,
      max_pax: i,
    })
    DATA.max_pax.push({ x: i, y: price, z: cost_per_day })
  }

  Object.keys(DATA).forEach(key => {
    const path = join(OUTPUT, `${key}-${max_speed}.csv`)
    let csv = ''
    DATA[key].forEach(row => {
      csv += `${row.y}\n` // price
      // csv += `${row.z}\n` // cost_per_day
    })
    if (DATA[key].length > 0) writeFileSync(path, csv)
  })
}