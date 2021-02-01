import chalk from 'chalk'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { snakeCase } from 'snake-case'
import { createMeta, createTrain } from './utils/index.js'
import data from '../data/trains.js'

for (const { name, trains } of data) {
  const OUTPUT = join(process.cwd(), 'mods', snakeCase(name))
  let result = createMeta({ name })

  for (const train of trains) {
    result += createTrain(train)
  }

  console.log(`${chalk.blueBright('[info]')} exported ${chalk.greenBright(trains.length)} train${trains.length > 1 ? 's' : ''} to〝${chalk.magentaBright(name)}〟`)

  if (!existsSync(OUTPUT)) mkdirSync(OUTPUT, { recursive: true })
  writeFileSync(join(OUTPUT, 'mod.txt'), result)
}