import { blue, green, magenta } from 'colorette'
import { render as exportSVG } from 'svgexport'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { copySync } from 'fs-extra'
import { join } from 'path'
import { createMod, createCollectionDescription, slugify } from './components/index.js'
import { companies } from './data/index.js'

const CWD = process.cwd()
const MODS = join(CWD, 'mods')
const GRAPHICS = join(CWD, 'graphics')
const PLACEHOLDERS = join(GRAPHICS, 'placeholders')
const COMPANIES = join(GRAPHICS, 'companies')

for (const { name, native, region, version, units, trains } of companies) {
  const OUTPUT = join(MODS, slugify(name))
  const { data, description, totalTrains, totalCompositions } = createMod({ name, native, region, version, units, trains })

  if (!existsSync(OUTPUT)) mkdirSync(OUTPUT, { recursive: true })
  writeFileSync(join(OUTPUT, 'mod.txt'), data)
  writeFileSync(join(OUTPUT, 'title.txt'), `${name} / ${native}`)
  writeFileSync(join(OUTPUT, 'description.txt'), description)

  console.info(`${blue('info')} exported ${green(totalTrains)} train${totalTrains > 1 ? 's' : ''} (${green(totalCompositions)} composition${totalCompositions > 1 ? 's' : ''}) to〝${magenta(name)}〟`)

  // Company Logos - TODO: Relocate to seperate method
  exportSVG({
    input: [join(COMPANIES, `${slugify(name)}.svg`)],
    output: [
      [join(OUTPUT, 'thumbnail.jpg'), '1080', '90%'],
      [join(OUTPUT, 'preview.jpg'), '1920:1080', '90%', 'pad']
    ]
  })
  console.info(`${blue('info')} exported thumbnail/preview to〝${magenta(name)}〟`)

  // Placeholder Graphics - TODO: Relocate to seperate method
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

// Collection Logo - TODO: Relocate to method
exportSVG({
  input: [join(GRAPHICS, 'thumbnail.svg')],
  output: [
    [join(MODS, 'thumbnail.jpg'), '1080', '90%']
  ]
})
console.info(`${blue('info')} finished generating mod files`)