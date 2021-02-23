import { blue } from 'colorette'
import { spawnSync } from 'child_process'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { snakeCase } from 'snake-case'
import { companies } from './data/index.js'

const chunkify = (a,n)=>[...Array(Math.ceil(a.length/n))].map((_,i)=>a.slice(n*i,n+n*i));

let index = 0
const CWD = process.cwd()
const INPUT = join(CWD, 'graphics', 'companies')
const OUTPUT = join(CWD, 'tmp')
const total = companies.length
const perRow = total <= 10 ? 5 : (total <= 12 ? 4 : (total <= 20 ? 5 : (total <= 24 ? 6 : 7)))
const width = 1080 / perRow
const chunks = chunkify(companies, perRow)

if (!existsSync(OUTPUT)) mkdirSync(OUTPUT, { recursive: true })

for (const chunk of chunks) {
  const names = chunk.map(a => join(INPUT, `${snakeCase(a.name)}.svg`))
  const chunkOutput = join(OUTPUT, `${index++}.jpg`)
  spawnSync('magick', ['convert', '-size', `${width}x${width}`, '+append', names.join(' '), chunkOutput ], { shell: true })
}

spawnSync('magick', ['convert', '-size', '1920x1080', '-append', join(OUTPUT, '[0-4].jpg'), join(CWD, 'mods', 'preview.jpg')])

console.info(`${blue('info')} finished generating collection thumbnail`)