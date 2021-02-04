import chalk from 'chalk'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { copySync } from 'fs-extra'
import { join } from 'path'
import { snakeCase } from 'snake-case'
import { createMeta, createTrain } from './components/index.js'
import { companies } from './data/index.js'

const PLACEHOLDERS = join(process.cwd(), 'placeholders')

for (const { name, native, region, trains } of companies) {
  const OUTPUT = join(process.cwd(), 'mods', snakeCase(name))
  let result = createMeta({ name, native, region, totalTrains: trains.length })

  for (const train of trains) {
    result += createTrain(train)
  }

  console.info(`${chalk.blueBright('info')} exported ${chalk.greenBright(trains.length)} train${trains.length > 1 ? 's' : ''} to〝${chalk.magentaBright(name)}〟`)

  if (!existsSync(OUTPUT)) mkdirSync(OUTPUT, { recursive: true })
  writeFileSync(join(OUTPUT, 'mod.txt'), result)

  if (!existsSync(join(OUTPUT, 'placeholder_highspeed')) ||
      !existsSync(join(OUTPUT, 'placeholder_higherspeed')) ||
      !existsSync(join(OUTPUT, 'placeholder_commuter')) ||
      !existsSync(join(OUTPUT, 'placeholder_tram')) ||
      !existsSync(join(OUTPUT, 'placeholder_metro'))
  ) {
    copySync(join(PLACEHOLDERS), OUTPUT)
    console.info(`${chalk.blueBright('info')} exported placeholder graphics to〝${chalk.magentaBright(name)}〟`)
  }
}