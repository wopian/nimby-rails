import { REGION, PRESET_TAG, UNIT_TAG, MU_TAG, PLACEHOLDER } from '../../components/index.js'

const UNITS = {
  DeHa_1500_M1c: {
    name: 'Keikyu DeHa 1500 (M1c)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 32,
    power: 155 * 4, // * 4
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1500_M1: {
    name: 'Keikyu DeHa 1500 (M1)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 31.5,
    power: 155 * 4, // * 4
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1500_M2c: {
    name: 'Keikyu DeHa 1500 (M2c)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 31.5,
    power: 155 * 4, // * 4
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1500_M2: {
    name: 'Keikyu DeHa 1500 (M2)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 31,
    power: 155 * 4, // * 4
    tags: [...PRESET_TAG.DEHA]
  },
  SaHa_1900_Tu: {
    name: 'Keikyu SaHa 1900 (Tu)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 24.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1900_Ts: {
    name: 'Keikyu Saha 1900 (Ts)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 25.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  DeHa_1700_M1c: {
    name: 'Keikyu DeHa 1500 (M1c)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 32,
    power: 120 * 4, // * 4
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1700_M1: {
    name: 'Keikyu DeHa 1500 (M1)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 31.5,
    power: 120 * 4, // * 4
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1700_M2c: {
    name: 'Keikyu DeHa 1500 (M2c)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 31.5,
    power: 120 * 4, // * 4
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1700_M2: {
    name: 'Keikyu DeHa 1500 (M2)',
    max_speed: 130,
    length: 18,
    width: 2.798,
    max_pax: 140,
    empty_mass: 31,
    power: 120 * 4, // * 4
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_600_M1c: {
    name: 'Keikyu DeHa 600 III (M1c)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 118,
    empty_mass: 33.5,
    power: 120 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_600_M2c: {
    name: 'Keikyu DeHa 600 III (M2c)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 118,
    empty_mass: 33,
    power: 120 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_600_M1a: {
    name: 'Keikyu DeHa 600 III (M1\')',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 118,
    empty_mass: 33,
    power: 120 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_600_M2a: {
    name: 'Keikyu DeHa 600 III (M2\')',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 118,
    empty_mass: 32,
    power: 120 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_600_M1: {
    name: 'Keikyu DeHa 600 III (M1)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 118,
    empty_mass: 32.5,
    power: 120 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_600_M2: {
    name: 'Keikyu DeHa 600 III (M2)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 118,
    empty_mass: 32,
    power: 120 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  SaHa_600_Tu: {
    name: 'Keikyu SaHa 600 III (Tu)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 128,
    empty_mass: 24.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_600_Ts: {
    name: 'Keikyu SaHa 600 III (Ts)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 128,
    empty_mass: 25.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  DeHa_600_Muc: {
    name: 'Keikyu DeHa 600 III (Muc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 118,
    empty_mass: 34,
    power: 180 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_600_Msc: {
    name: 'Keikyu DeHa 600 III (Msc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 118,
    empty_mass: 32,
    power: 180 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_600_Mu: {
    name: 'Keikyu DeHa 600 III (Mu)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 128,
    empty_mass: 31.5,
    power: 180 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_600_Ms: {
    name: 'Keikyu DeHa 600 III (Ms)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 128,
    empty_mass: 32,
    power: 180 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  SaHa_600_Tp: {
    name: 'Keikyu SaHa 600 III (Tp)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 128,
    empty_mass: 25.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_600_T: {
    name: 'Keikyu SaHa 600 III (T)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 128,
    empty_mass: 23.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  DeHa_2100_Muc: {
    name: 'Keikyu DeHa 2100 (Muc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 111,
    empty_mass: 33,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_2100_Msc: {
    name: 'Keikyu DeHa 2100 (Msc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 111,
    empty_mass: 33,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_2100_Mu: {
    name: 'Keikyu DeHa 2100 (Mu)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 120,
    empty_mass: 30.5,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_2100_Ms: {
    name: 'Keikyu DeHa 2100 (Ms)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 120,
    empty_mass: 30.5,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  SaHa_2100_Tp: {
    name: 'Keikyu SaHa 2100 (Tp)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 120,
    empty_mass: 26.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_2100_T: {
    name: 'Keikyu SaHa 2100 (T)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 120,
    empty_mass: 24.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  DeHa_1000_Muc: {
    name: 'Keikyu DeHa 1000 II (Muc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 122,
    empty_mass: 33,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_Muc_3: {
    name: 'Keikyu DeHa 1000 II 3rd (Muc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 122,
    empty_mass: 32,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_Msc: {
    name: 'Keikyu DeHa 1000 II (Msc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 122,
    empty_mass: 33,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_Msc_3: {
    name: 'Keikyu DeHa 1000 II 3rd (Msc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 122,
    empty_mass: 32,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_Mu: {
    name: 'Keikyu DeHa 1000 II (Mu)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 31,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_Ms: {
    name: 'Keikyu DeHa 1000 II (Ms)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 31,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_M1u: {
    name: 'Keikyu DeHa 1000 II (M1u)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 30,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_M2u: {
    name: 'Keikyu DeHa 1000 II (M2u)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 30,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_M2: {
    name: 'Keikyu DeHa 1000 II (M2)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 31,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_M1s: {
    name: 'Keikyu DeHa 1000 II (M1s)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 30,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_M2s: {
    name: 'Keikyu DeHa 1000 II (M2s)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 30,
    power: 190 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  SaHa_1000_Tpu: {
    name: 'Keikyu SaHa 1000 II (Tpu)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 27,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_Tpu1: {
    name: 'Keikyu SaHa 1000 II (Tpu1)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 26.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_Tu: {
    name: 'Keikyu SaHa 1000 II (Tu)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 23,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_T: {
    name: 'Keikyu SaHa 1000 II (T)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 24,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_Ts: {
    name: 'Keikyu SaHa 1000 II (Ts)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 23,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_Tp: {
    name: 'Keikyu SaHa 1000 II (Tp)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 27,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_Tps: {
    name: 'Keikyu SaHa 1000 II (Tps)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 27,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_Tps1: {
    name: 'Keikyu SaHa 1000 II (Tps1)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 26.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  DeHa_1000_M2uc_6: {
    name: 'Keikyu DeHa 1000 II 6th (M2uc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 119,
    empty_mass: 33.5,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_M2sc_6: {
    name: 'Keikyu DeHa 1000 II 6th (M2sc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 119,
    empty_mass: 33.5,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_M1u_6: {
    name: 'Keikyu DeHa 1000 II 6th (M1u)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 32.5,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_M1ua_6: {
    name: 'Keikyu DeHa 1000 II 6th (M1u\')',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 32,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_M2s_6: {
    name: 'Keikyu DeHa 1000 II 6th (M2s)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 28.5,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  DeHa_1000_M1s_6: {
    name: 'Keikyu DeHa 1000 II 6th (M1s)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 32.5,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA]
  },
  SaHa_1000_Tu_6: {
    name: 'Keikyu SaHa 1000 II 6th (Tu)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 24.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_Ts_6: {
    name: 'Keikyu SaHa 1000 II 6th (Ts)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 130,
    empty_mass: 24.5,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  DeHa_1000_M2uc_8: {
    name: 'Keikyu DeHa 1000 II 8th (M2uc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 119,
    empty_mass: 34.5,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_M2sc_8: {
    name: 'Keikyu DeHa 1000 II 8th (M2sc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 119,
    empty_mass: 34.5,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  SaHa_1000_Tu_11: {
    name: 'Keikyu SaHa 1000 II 11th (Tu)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 129,
    empty_mass: 24,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  SaHa_1000_Ts_11: {
    name: 'Keikyu SaHa 1000 II 11th (Ts)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 129,
    empty_mass: 24,
    power: 0,
    tags: [...PRESET_TAG.SAHA]
  },
  DeHa_1000_M2uc_15: {
    name: 'Keikyu DeHa 1000 II 15th (M2uc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 119,
    empty_mass: 35,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_M2sc_15: {
    name: 'Keikyu DeHa 1000 II 15th (M2sc)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 119,
    empty_mass: 35,
    power: 155 * 4,
    tags: [...PRESET_TAG.DEHA, UNIT_TAG.FEATURES.CONTROL],
    graphics: PLACEHOLDER.COMMUTER.HEAD
  },
  DeHa_1000_M1u_15: {
    name: 'Keikyu DeHa 1000 II 15th (M1u)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 129,
    empty_mass: 33,
    power: 155 * 4,
    tags: [...PRESET_TAG.SAHA]
  },
  DeHa_1000_M1s_15: {
    name: 'Keikyu DeHa 1000 II 15th (M1s)',
    max_speed: 130,
    length: 18,
    width: 2.83,
    max_pax: 129,
    empty_mass: 33,
    power: 155 * 4,
    tags: [...PRESET_TAG.SAHA]
  }
}

export const keikyu = {
  wiki: 'https://ja.wikipedia.org/wiki/京浜急行電鉄',
  name: 'Keikyu',
  native: '京急',
  region: REGION.KANTO,
  units: UNITS,
  trains: [
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急1500形電車',
      name: 'Keikyu 1500',
      description: 'Manufactured by Kawasaki Heavy Industries and Tokyu Car Corporation',
      year_introduced: 1985,
      tags: [MU_TAG.GAUGE.STANDARD, MU_TAG.POWER.ELECTRIC, MU_TAG.ROLE.COMMUTER],
      composition: [
        {
          name: 'Keikyu 1500 4M2T & 4M (2001)',
          units: [
            { unit: UNITS.DeHa_1500_M1c },
            { unit: UNITS.DeHa_1500_M2 },
            { unit: UNITS.SaHa_1900_Tu, min: 0, def: 1, max: 1 },
            { unit: UNITS.SaHa_1900_Ts, min: 0, def: 1, max: 1 },
            { unit: UNITS.DeHa_1500_M1 },
            { unit: UNITS.DeHa_1500_M2c, flip: true }
          ]
        },
        {
          name: 'Keikyu 1700 6M2T & 6M (1992)',
          units: [
            { unit: UNITS.DeHa_1700_M1c },
            { unit: UNITS.DeHa_1700_M2 },
            { unit: UNITS.SaHa_1900_Tu, min: 0, def: 1, max: 1 },
            { unit: UNITS.SaHa_1900_Ts, min: 0, def: 1, max: 1 },
            { unit: UNITS.DeHa_1700_M1 },
            { unit: UNITS.DeHa_1700_M2 },
            { unit: UNITS.DeHa_1700_M1 },
            { unit: UNITS.DeHa_1700_M2c, flip: true }
          ]
        }
      ]
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急600形電車_(3代)',
      name: 'Keikyu 600 III',
      description: 'Manufactured by Kawasaki Heavy Industries and Tokyu Car Corporation',
      year_introduced: 1994,
      tags: [MU_TAG.GAUGE.STANDARD, MU_TAG.POWER.ELECTRIC, MU_TAG.ROLE.COMMUTER],
      composition: [
        {
          name: 'Keikyu 600 III 6M2T (1994)',
          units: [
            { unit: UNITS.DeHa_600_M1c },
            { unit: UNITS.DeHa_600_M2 },
            { unit: UNITS.SaHa_600_Tu },
            { unit: UNITS.SaHa_600_Ts },
            { unit: UNITS.DeHa_600_M1a },
            { unit: UNITS.DeHa_600_M2a },
            { unit: UNITS.DeHa_600_M1 },
            { unit: UNITS.DeHa_600_M2c, flip: true }
          ]
        },
        {
          name: 'Keikyu 600 III 6M2T (1996)',
          units: [
            { unit: UNITS.DeHa_600_Muc },
            { unit: UNITS.SaHa_600_T },
            { unit: UNITS.SaHa_600_Tp },
            { unit: UNITS.DeHa_600_Mu },
            { unit: UNITS.DeHa_600_Ms },
            { unit: UNITS.SaHa_600_T },
            { unit: UNITS.SaHa_600_Tp },
            { unit: UNITS.DeHa_600_Msc, flip: true }
          ]
        },
        {
          name: 'Keikyu 600 III 2M2T (1996)',
          units: [
            { unit: UNITS.DeHa_600_Muc },
            { unit: UNITS.SaHa_600_T },
            { unit: UNITS.SaHa_600_Tp },
            { unit: UNITS.DeHa_600_Msc, flip: true }
          ]
        }
      ]
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急2100形電車',
      name: 'Keikyu 2100',
      description: 'Manufactured by Kawasaki Heavy Industries and Tokyu Car Corporation',
      year_introduced: 1998,
      tags: [MU_TAG.GAUGE.STANDARD, MU_TAG.POWER.ELECTRIC, MU_TAG.ROLE.COMMUTER],
      composition: [
        {
          name: 'Keikyu 2100 4M4T (1998)',
          units: [
            { unit: UNITS.DeHa_2100_Muc },
            { unit: UNITS.SaHa_2100_T },
            { unit: UNITS.SaHa_2100_Tp },
            { unit: UNITS.DeHa_2100_Mu },
            { unit: UNITS.DeHa_2100_Ms },
            { unit: UNITS.SaHa_2100_T },
            { unit: UNITS.SaHa_2100_Tp },
            { unit: UNITS.DeHa_2100_Msc, flip: true }
          ]
        }
      ]
    },
    {
      wiki: 'https://ja.wikipedia.org/wiki/京急1000形電車_(2代)',
      name: 'Keikyu 1000 II',
      description: 'Manufactured by Kawasaki Heavy Industries and Tokyu Car Corporation',
      year_introduced: 2002,
      tags: [MU_TAG.GAUGE.STANDARD, MU_TAG.POWER.ELECTRIC, MU_TAG.ROLE.COMMUTER],
      composition: [
        {
          name: 'Keikyu 1000 II 4M4T (2002)',
          units: [
            { unit: UNITS.DeHa_1000_Muc },
            { unit: UNITS.SaHa_1000_Tpu },
            { unit: UNITS.SaHa_1000_Tu },
            { unit: UNITS.DeHa_1000_Mu },
            { unit: UNITS.DeHa_1000_Ms },
            { unit: UNITS.SaHa_1000_Ts },
            { unit: UNITS.SaHa_1000_Tps },
            { unit: UNITS.DeHa_1000_Msc, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 2M2T (2002)',
          units: [
            { unit: UNITS.DeHa_1000_Muc },
            { unit: UNITS.SaHa_1000_Tpu1 },
            { unit: UNITS.SaHa_1000_Tps1 },
            { unit: UNITS.DeHa_1000_Msc, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 2M2T (2003)',
          units: [
            { unit: UNITS.DeHa_1000_Muc },
            { unit: UNITS.SaHa_1000_T },
            { unit: UNITS.SaHa_1000_Tp },
            { unit: UNITS.DeHa_1000_Msc, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 6M2T (2005)',
          units: [
            { unit: UNITS.DeHa_1000_Muc_3 },
            { unit: UNITS.SaHa_1000_Tpu },
            { unit: UNITS.DeHa_1000_M2u },
            { unit: UNITS.DeHa_1000_M1u },
            { unit: UNITS.DeHa_1000_M1s },
            { unit: UNITS.DeHa_1000_M2s },
            { unit: UNITS.SaHa_1000_Tps },
            { unit: UNITS.DeHa_1000_Msc_3, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 3M1T (2005)',
          units: [
            { unit: UNITS.DeHa_1000_Muc_3 },
            { unit: UNITS.DeHa_1000_M2 },
            { unit: UNITS.SaHa_1000_Tp },
            { unit: UNITS.DeHa_1000_Msc_3, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 6M2T (2007)',
          units: [
            { unit: UNITS.DeHa_1000_M2uc_6 },
            { unit: UNITS.DeHa_1000_M1u_6 },
            { unit: UNITS.SaHa_1000_Tu_6 },
            { unit: UNITS.DeHa_1000_M1ua_6 },
            { unit: UNITS.DeHa_1000_M2s_6 },
            { unit: UNITS.SaHa_1000_Ts_6 },
            { unit: UNITS.DeHa_1000_M1s_6 },
            { unit: UNITS.DeHa_1000_M2sc_6, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 6M2T (2008)',
          units: [
            { unit: UNITS.DeHa_1000_M2uc_6 },
            { unit: UNITS.DeHa_1000_M1u_6 },
            { unit: UNITS.SaHa_1000_Tu_6 },
            { unit: UNITS.DeHa_1000_M1u_6 },
            { unit: UNITS.DeHa_1000_M2s_6 },
            { unit: UNITS.SaHa_1000_Ts_6 },
            { unit: UNITS.DeHa_1000_M1s_6 },
            { unit: UNITS.DeHa_1000_M2sc_6, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 4M (2008)',
          units: [
            { unit: UNITS.DeHa_1000_M2uc_8 },
            { unit: UNITS.DeHa_1000_M1u_6 },
            { unit: UNITS.DeHa_1000_M1s_6 },
            { unit: UNITS.DeHa_1000_M2sc_8, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 4M2T (2011)',
          units: [
            { unit: UNITS.DeHa_1000_M2uc_8 },
            { unit: UNITS.DeHa_1000_M1u_6 },
            { unit: UNITS.SaHa_1000_Tu_11 },
            { unit: UNITS.SaHa_1000_Ts_11 },
            { unit: UNITS.DeHa_1000_M1s_6 },
            { unit: UNITS.DeHa_1000_M2sc_8, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 4M2T (2015)',
          units: [
            { unit: UNITS.DeHa_1000_M2uc_8 },
            { unit: UNITS.DeHa_1000_M1u_15 },
            { unit: UNITS.SaHa_1000_Tu_11 },
            { unit: UNITS.SaHa_1000_Ts_11 },
            { unit: UNITS.DeHa_1000_M1s_15 },
            { unit: UNITS.DeHa_1000_M2sc_8, flip: true }
          ]
        },
        {
          name: 'Keikyu 1000 II 4M (2016)',
          units: [
            { unit: UNITS.DeHa_1000_M2uc_15 },
            { unit: UNITS.DeHa_1000_M1u_15 },
            { unit: UNITS.DeHa_1000_M1s_15 },
            { unit: UNITS.DeHa_1000_M2sc_15, flip: true }
          ]
        },
      ]
    }
  ],
  legacy: '\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1500_head\nname_loc=wopian_keikyu_1500_head_name\nname_en=DeHa 1500\nlength=18\nwidth=2.798\nmax_speed=130\npower=100\nempty_mass=31500\nprice=2370060\nmax_pax=140\ncost_per_km_per_pax=0.05\ncost_per_day=57\ntex_base=placeholder_commuter/loco_0.png\ntex_top=placeholder_commuter/loco_2.png\ntex_decors=placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1500_car\nname_loc=wopian_keikyu_1500_car_name\nname_en=DeHa 1500,SaHa 1900\nlength=18\nwidth=2.798\nmax_speed=130\npower=100\nempty_mass=28250\nprice=1901790\nmax_pax=140\ncost_per_km_per_pax=0.05\ncost_per_day=39\ntex_base=placeholder_commuter/car_0.png\ntex_top=placeholder_commuter/car_2.png\ntex_decors=placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_600_iii_head\nname_loc=wopian_keikyu_600_iii_head_name\nname_en=DeHa 1500\nlength=18\nwidth=2.83\nmax_speed=130\npower=180\nempty_mass=34000\nprice=2558160\nmax_pax=123\ncost_per_km_per_pax=0.05\ncost_per_day=62\ntex_base=placeholder_commuter/loco_0.png\ntex_top=placeholder_commuter/loco_2.png\ntex_decors=placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_600_iii_car\nname_loc=wopian_keikyu_600_iii_car_name\nname_en=DeHa 1500,SaHa 1900\nlength=18\nwidth=2.83\nmax_speed=130\npower=180\nempty_mass=26917\nprice=1812030\nmax_pax=132\ncost_per_km_per_pax=0.05\ncost_per_day=37\ntex_base=placeholder_commuter/car_0.png\ntex_top=placeholder_commuter/car_2.png\ntex_decors=placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_2100_head\nname_loc=wopian_keikyu_2100_head_name\nname_en=DeHa 2100\nlength=18\nwidth=2.83\nmax_speed=130\npower=190\nempty_mass=33000\nprice=2482920\nmax_pax=111\ncost_per_km_per_pax=0.05\ncost_per_day=60\ntex_base=placeholder_commuter/loco_0.png\ntex_top=placeholder_commuter/loco_2.png\ntex_decors=placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_2100_car\nname_loc=wopian_keikyu_2100_car_name\nname_en=DeHa 2100,SaHa 2100\nlength=18\nwidth=2.83\nmax_speed=130\npower=190\nempty_mass=27167\nprice=1828860\nmax_pax=120\ncost_per_km_per_pax=0.05\ncost_per_day=37\ntex_base=placeholder_commuter/car_0.png\ntex_top=placeholder_commuter/car_2.png\ntex_decors=placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1000_ii_batch_1_5_head\nname_loc=wopian_keikyu_1000_ii_batch_1_5_head_name\nname_en=DeHa 1000\nlength=18\nwidth=2.83\nmax_speed=130\npower=190\nempty_mass=33000\nprice=2482920\nmax_pax=122\ncost_per_km_per_pax=0.05\ncost_per_day=60\ntex_base=placeholder_commuter/loco_0.png\ntex_top=placeholder_commuter/loco_2.png\ntex_decors=placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1000_ii_batch_1_5_car\nname_loc=wopian_keikyu_1000_ii_batch_1_5_car_name\nname_en=DeHa 1000,SaHa 1000\nlength=18\nwidth=2.83\nmax_speed=130\npower=190\nempty_mass=27000\nprice=1817640\nmax_pax=130\ncost_per_km_per_pax=0.05\ncost_per_day=37\ntex_base=placeholder_commuter/car_0.png\ntex_top=placeholder_commuter/car_2.png\ntex_decors=placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1000_ii_batch_6_9_head\nname_loc=wopian_keikyu_1000_ii_batch_6_9_head_name\nname_en=DeHa 1000\nlength=18\nwidth=2.83\nmax_speed=130\npower=155\nempty_mass=33500\nprice=2520540\nmax_pax=119\ncost_per_km_per_pax=0.05\ncost_per_day=61\ntex_base=placeholder_commuter/loco_0.png\ntex_top=placeholder_commuter/loco_2.png\ntex_decors=placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1000_ii_batch_6_9_car\nname_loc=wopian_keikyu_1000_ii_batch_6_9_car_name\nname_en=DeHa 1000,SaHa 1000\nlength=18\nwidth=2.83\nmax_speed=130\npower=155\nempty_mass=29083\nprice=1957890\nmax_pax=130\ncost_per_km_per_pax=0.05\ncost_per_day=40\ntex_base=placeholder_commuter/car_0.png\ntex_top=placeholder_commuter/car_2.png\ntex_decors=placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1000_ii_batch_10_15_head\nname_loc=wopian_keikyu_1000_ii_batch_10_15_head_name\nname_en=DeHa 1000\nlength=18\nwidth=2.83\nmax_speed=130\npower=155\nempty_mass=34500\nprice=2595780\nmax_pax=118\ncost_per_km_per_pax=0.05\ncost_per_day=63\ntex_base=placeholder_commuter/loco_0.png\ntex_top=placeholder_commuter/loco_2.png\ntex_decors=placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1000_ii_batch_10_15_car\nname_loc=wopian_keikyu_1000_ii_batch_10_15_car_name\nname_en=DeHa 1000,SaHa 1000\nlength=18\nwidth=2.83\nmax_speed=130\npower=155\nempty_mass=28250\nprice=1901790\nmax_pax=129\ncost_per_km_per_pax=0.05\ncost_per_day=39\ntex_base=placeholder_commuter/car_0.png\ntex_top=placeholder_commuter/car_2.png\ntex_decors=placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1000_ii_batch_16_head\nname_loc=wopian_keikyu_1000_ii_batch_16_head_name\nname_en=DeHa 1000\nlength=18\nwidth=2.83\nmax_speed=130\npower=155\nempty_mass=34500\nprice=2595780\nmax_pax=122\ncost_per_km_per_pax=0.05\ncost_per_day=63\ntex_base=placeholder_commuter/loco_0.png\ntex_top=placeholder_commuter/loco_2.png\ntex_decors=placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n\n[TrainUnit]\nschema=1\nid=wopian_keikyu_1000_ii_batch_16_car\nname_loc=wopian_keikyu_1000_ii_batch_16_car_name\nname_en=DeHa 1000,SaHa 1000\nlength=18\nwidth=2.83\nmax_speed=130\npower=155\nempty_mass=28500\nprice=1918620\nmax_pax=130\ncost_per_km_per_pax=0.05\ncost_per_day=39\ntex_base=placeholder_commuter/car_0.png\ntex_top=placeholder_commuter/car_2.png\ntex_decors=placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png\ntex_m_width=30\ntex_m_height=3.75\n'
}