import { blue, green, magenta } from 'kleur/colors'
import { render as exportSVG } from 'svgexport'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { copySync } from 'fs-extra'
import { join } from 'path'
import { snakeCase } from 'snake-case'
import { createMeta, createTrain, createDescription, createCollectionDescription, ini } from './components/index.js'
import { companies } from './data/index.js'

const CWD = process.cwd()
const MODS = join(CWD, 'mods')
const GRAPHICS = join(CWD, 'graphics')
const PLACEHOLDERS = join(GRAPHICS, 'placeholders')
const COMPANIES = join(GRAPHICS, 'companies')

for (const { name, native, region, trains } of companies) {
  const OUTPUT = join(MODS, snakeCase(name))
  let result = ini(createMeta({ name, native, region, totalTrains: trains.length }))

  for (const train of trains) {
    result += ini(createTrain(train))
  }

  if (!existsSync(OUTPUT)) mkdirSync(OUTPUT, { recursive: true })

  writeFileSync(join(OUTPUT, 'mod.txt'), result.trimEnd())
  writeFileSync(join(OUTPUT, 'title.txt'), `${name} / ${native}`)
  writeFileSync(join(OUTPUT, 'description.txt'), createDescription({ name, native, region, trains }))

  console.info(`${blue('info')} exported ${green(trains.length)} train${trains.length > 1 ? 's' : ''} to〝${magenta(name)}〟`)

  if (!existsSync(join(OUTPUT, 'thumbnail.jpg'))) {
    exportSVG({
      input: [
        join(COMPANIES, `${snakeCase(name)}.svg`)
      ],
      output: [
        [
          join(OUTPUT, 'thumbnail.jpg'),
          '1080',
          '90%'
        ],
        [
          join(OUTPUT, 'preview.jpg'),
          '1920:1080',
          '90%',
          'pad'
        ]
      ]
    })
    console.info(`${blue('info')} exported thumbnail/preview to〝${magenta(name)}〟`)
  }

  if (!existsSync(join(OUTPUT, 'placeholder_highspeed')) ||
      !existsSync(join(OUTPUT, 'placeholder_higherspeed')) ||
      !existsSync(join(OUTPUT, 'placeholder_commuter')) ||
      !existsSync(join(OUTPUT, 'placeholder_tram')) ||
      !existsSync(join(OUTPUT, 'placeholder_metro'))
  ) {
    copySync(PLACEHOLDERS, OUTPUT)
    console.info(`${blue('info')} exported placeholder graphics to〝${magenta(name)}〟`)
  }
}

writeFileSync(join(MODS, 'description.txt'), createCollectionDescription({ companies }))

exportSVG({
  input: [
    join(GRAPHICS, 'thumbnail.svg')
  ],
  output: [
    [
      join(MODS, 'thumbnail.jpg'),
      '1080',
      '90%'
    ]
  ]
})

console.info(`${blue('info')} finished generating mod files`)