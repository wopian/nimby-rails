import { spawnSync } from 'child_process'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { snakeCase } from 'snake-case'
import { companies } from './data/index.js'

const chunkify = (a,n)=>[...Array(Math.ceil(a.length/n))].map((_,i)=>a.slice(n*i,n+n*i));

let index = 0
const total = companies.length // 28
const perRow = 5 // 7
const width = 1080 / perRow
const chunks = chunkify(companies, perRow)
const INPUT = join(process.cwd(), 'graphics', 'companies')
const OUTPUT = join(process.cwd(), 'tmp')

if (!existsSync(OUTPUT)) mkdirSync(OUTPUT, { recursive: true })

for (const chunk of chunks) {
  const names = chunk.map(a => join(INPUT, `${snakeCase(a.name)}.svg`))
  const chunkOutput = join(OUTPUT, `${index++}.jpg`)
  spawnSync('magick', ['convert', '-size', `${width}x${width}`, '+append', names.join(' '), chunkOutput ], { shell: true })
}

spawnSync('magick', ['convert', '-size', '1920x1080', '-append', join(OUTPUT, '[0-4].jpg'), join(process.cwd(), 'mods', 'preview.jpg')])