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

Exports `schema=1` compatible mod files to `mods/:company/mod.txt`

### Company Schema


| Property | Type              | Default    | Required | Description
| -------- | ----------------- | ---------- | -------- | -----------
| wiki     | string            | undefined  | ❌       | Link to the company on Wikipedia
| name     | string            | 'Mod Name' | ❌       | Name of the company in English
| native   | string            | undefined  | ❌       | Name of the company in the local language
| region   | string            | undefined  | ❌       | Region the company operates in
| trains   | array[TrainUnit]  | undefined  | ❌       | Array of TrainUnit objects

### TrainUnit Schema

| Property        | Type           | Default       | Required | Description
| --------------- | -------------- | ------------- | -------- | -----------
| wiki            | string         | undefined     | ❌       | Link to the train on Wikipedia
| train_type      | string         | \*            | ❌       | <span>\* Calculated from `max_speed` by default<br>Valid values are 'highspeed', 'higherspeed', 'commuter', 'metro' or 'tram'</span>
| name            | string         | 'Train Name'  | ❌       | Name of the train (series/model)
| names           | object         | undefined     | ❌       | Name of the individual TrainUnits
| names.head      | string         |               | ❌       | Name of the head TrainUnits
| names.car       | string         |               | ❌       | Name of the car TrainUnits
| min_cars        | number         | 2             | ❌       | Includes the head and tail TrainUnits
| max_cars        | number         | 10            | ❌       | Includes the head and tail TrainUnits
| max_speed       | number         | 120           | ❌       | Maximum speed in km/h
| length          | number\|object | 20            | ❌       | Length of the TrainUnits in metres
| length.head     | number         |               | ❌       | Length of the head TrainUnits in metres
| length.car      | number         |               | ❌       | Length of the car TrainUnits in metres
| width           | number         | 2.8           | ❌       | Width of the TrainUnit in metres
| power           | number         | \*            | ❌       | <span>\* Calculated from `train_type` and `max_speed` by default<br>Power of the TrainUnit in kW</span>
| max_pax         | number\|object | 130           | ❌       | Number of passengers the TrainUnit can carry
| max_pax.head    | number         |               | ❌       | Passengers the head TrainUnit can carry
| max_pax.car     | number         |               | ❌       | Passengers the car TrainUnit can carry
| empty_mass      | number\|object | \*            | ❌       | <span>\* Calculated from `train_type` and `length` by default<br>Weight of the TrainUnit in tonnes (1,000kg)</span>
| empty_mass.head | number         |               | ❌       | Weight of the head TrainUnit in tonnes (1,000kg)
| empty_mass.car  | number         |               | ❌       | Weight of the car TrainUnit in tonnes (1,000kg)

See the official [Mod Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2268014666) for further details

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