# NIMBY Rails Mods

Collection of mods for the rail simulation game [NIMBY Rails](https://store.steampowered.com/app/1134710/NIMBY_Rails)

## Prerequisites

- Node 15.6.x or newer
- Yarn 1.22.x or newer
- ImageMagick 7.0.x or newer

## Meaning of unit names

Vehicle type is followed by vehicle grade. For example, クハ/KuHa is a standard-size car with a driver cab

### Vehicle Type

- モ/Mo = Electric motor car
- デ/De = Electric car (equivalent to モ/Mo)
- ク/Ku = Driver cab car
- クモ/KuMo = Driver cab and electric motor car
- サ/Sa = Ancillary car (no motor or driver cab, lighter)
- キ/Ki = Diesel engine car
- ネ/Ne = Sleeper car
- シ/Si = Dining car
- ユ/Yu = Postal car
- ヤ/Ya = Test car
- フ/Fu = Brake van
- ニ/Ni = Luggage car
- テ/Te = Observation car (large windows)

### Vehicle Grade

- ロ/Ro = Green car (more seat space and higher price)
- ハ/Ha = Standard car

## File Structure

### Getting Started

Mod data is stored in `src/data/:company_name/index.js`

A blank template is available in [`src/data/template/index.js`](https://github.com/wopian/nimby-rails/blob/master/src/data/template/template.js)

Exports `schema=2` compatible mod files to `mods/:company/mod.txt`

### Company Schema


| Property | Type              | Default    | Required | Description
| -------- | ----------------- | ---------- | -------- | -----------
| wiki     | string            | undefined  | ❌       | Link to the company on Wikipedia
| name     | string            | 'Mod Name' | ✔       | Name of the company in English
| native   | string            | undefined  | ❌       | Name of the company in the local language
| region   | string            | undefined  | ❌       | Region the company operates in
| units    | array\[`TrainUnit`\]  | \[\]  | ✔       | Array of `TrainUnit` objects
| trains   | array\[`TrainMultipleUnit`\] | \[\] | ✔ | Array of `TrainMultipleUnit` objects

### TrainUnit Schema

| Property     | Type   | Default     | Required | Description
| ------------ | ------ | ----------- | -------- | -----------
| name         | string | 'Unit Name' | ✔ | Name of the unit (e.g. model number)
| length       | number | 20          | ❌ | Length of the TrainUnit in metres
| width        | number | 2.8         | ❌ | Width of the TrainUnit in metres
| max_speed    | number | 120         | ❌ | Maximum speed in km/h
| power        | number | \*          | ❌ | <span>\* **NOTE:** Calculated from `train_type` and `max_speed` by default<br>Power of the TrainUnit in kW</span>
| acceleration | number | 3\*         | ❌ | <span>\* **NOTE:** Value only used if `power` is not provided for more accurate `power` calculations<br>Acceleration in km/h/s</span>
| empty_mass   | number | \*          | ❌ | <span>\* Calculated from `train_type` and `length` by default<br>Weight of the TrainUnit in metric tonnes (1 t = 1,000kg)</span>
| max_pax      | number | 0           | ❌ | Number of passengers the TrainUnit can carry
| tags       | array\[string\] | \[\] | ❌ | See the official [Mod Guide] for available tags
| cost_per_km_per_pax | number | 0.05 | ❌ | Default value of all base-game trains
| recolor_base  | boolean | true      | ❌ | Whether the base colour can be recoloured by players
| recolor_decor | boolean | true      | ❌ | Whether the decor colour can be recoloured by players
| graphics      | object  | \*        | ❌ | <span>\* **NOTE:** Defaults to the in-game Yamanote textures<br>Textures used for the TrainUnit</span>
| graphics.tex_base   | string |      | ❌ | Relative path to an RGBA 1024x128 PNG file
| graphics.tex_top    | string |      | ❌ | Relative path to an RGBA 1024x128 PNG file
| graphics.tex_decors | array\[string\] | | ❌ | Relative paths to RGBA 1024x128 PNG files

### TrainMultipleUnit Schema

| Property        | Type           | Default       | Required | Description
| --------------- | -------------- | ------------- | -------- | -----------
| wiki            | string         | undefined     | ❌       | Link to the train on Wikipedia
| name            | string         | 'Train Name'  | ✔       | Name of the train (series/model)
| description     | string         | ''            | ❌       | Description of the train
| year_introduced | number         |               | ❌       | Year in YYYY format (`2020`)
| year_retired    | number         |               | ❌       | Year in YYYY format (`2020`)
| countries_operated | string      | 'jp'          | ❌       | [ISO-3166-2] country code
| countries_built | string         | 'jp'          | ❌       | [ISO-3166-2] country code
| default_code    | string         | \*            | ❌       | Defaults to first 3 letters of `name` with 2 random numbers. Use \# for digit and @ for number placeholders
| default_name    | string         | \*            | ❌       | Defaults to `name`. Use \# for digit and @ for number placeholders
| photo           | string         |               | ❌       |
| tags            | array\[string\]      | \[\]    | ❌       | See the official [Mod Guide] for available tags
| composition     | array\[`Composition`\] | \[\]    | ✔       | Array of `Composition` objects

### Composition Schema

| Property     | Type      | Default | Required | Description
| ------------ | --------- | ------- | -------- | -----------
| name         | string    |         | ✔       | Name of composition
| units  | array\[object\] | \[\]    | ✔       | Array of units forming the composition
| units[].unit | `TrainUnit` |       | ✔       | Reference to a previously defined `TrainUnit` object
| units[].min  | number    | 1       | ❌       | Minimum number of units (`0-`)
| units[].def  | number    | 1       | ❌       | Default number of units (`0-`)
| units[].max  | number    | 1       | ❌       | Maximum number of units (`1-`)
| units[].flip | boolean   | false   | ❌       | Whether the graphic if flipped horizontally

See the official [Mod Guide] for further details

## Commands

### Building mod files

```
yarn start
```

### Running tests

```
yarn test
```

#### Running tests with code coverage

```
yarn coverage
```

[Mod Guide]:https://steamcommunity.com/sharedfiles/filedetails/?id=2268014666
[ISO 3166-2]:https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2