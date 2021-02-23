export const REGION = {
  HOKKAIDO: 'Hokkaidō',
  TOHOKU: 'Tōhoku',
  KANTO: 'Kantō',
  CHUBU: 'Chūbu',
  KANSAI: 'Kansai',
  CHUGOKU: 'Chūgoku',
  SHIKOKU: 'Shikoku',
  KYUSHU: 'Kyūshū'
}

export const UNIT_TAG = {
  POWER: {
    STEAM: 'steam',
    TURBINE: 'turbine',
    ELECTRIC: 'electric',
    DIESEL: 'diesel',
    HYBRID: 'hybrid'
  },
  GAUGE: {
    MINIMUM: 'minimum-gauge',
    NARROW: 'narrow',
    STANDARD: 'standard',
    BROAD: 'broad',
    MONORAIL: 'monorail',
    MAGLEV: 'maglev',
    TYRES: 'tyres'
  },
  FEATURES: {
    COACH: 'coach',
    RESTAURANT: 'restaurant',
    BAR: 'bar',
    LOUNGE: 'lounge',
    OBSERVATION: 'observation',
    BAGGAGE: 'baggage',
    SLEEPER: 'sleeper',
    SITTING: 'sitting',
    STANDING: 'standing',
    TRAM: 'tram',
    CABLECAR: 'cable-car',
    CONTROL: 'control',
    ENDOFTRAIN: 'end-of-train',
    RAILBUS: 'railbus',
    LOCOMOTIVE: 'locomotive',
    DEPOSIT: 'deposit',
    TENDER: 'tender',
    GENERATOR: 'generator'
  }
}

export const MU_TAG = {
  POWER: UNIT_TAG.POWER,
  GAUGE: UNIT_TAG.GAUGE,
  ROLE: {
    METRO: 'metro',
    COMMUTER: 'commuter',
    INTERCITY: 'intercity',
    HIGHSPEED: 'high-speed',
    TRAM: 'tram',
    LIGHTRAIL: 'light-rail',
    REGIONAL: 'regional',
    LONGDISTANCE: 'long-distance',
    SHUTTLE: 'shuttle',
    PEOPLEMOVER: 'people-mover'
  },
  MISCELLANEOUS: {
    LINEARINDUCTION: 'linear-induction',
    THIRDRAIL: 'third-rail',
    CABLE: 'cable',
    HERITAGE: 'heritage',
    PROTOTYPE: 'prototype',
    FANTASY: 'fantasy',
    PRIVATE: 'private',
    HOTEL: 'hotel',
    TILTING: 'tilting',
    MULTIUNIT: 'mu'
  }
}

const VEHICLE_TYPE = {
  MO: [UNIT_TAG.POWER.ELECTRIC, UNIT_TAG.FEATURES.GENERATOR],
  KU: [UNIT_TAG.FEATURES.CONTROL],
  SA: [], // Ancillary
  KI: [UNIT_TAG.POWER.DIESEL],
  NE: [UNIT_TAG.FEATURES.SLEEPER],
  SI: [UNIT_TAG.FEATURES.RESTAURANT],
  YA: [], // Test car
  FU: [], // Brake car,
  NI: [UNIT_TAG.FEATURES.BAGGAGE],
  TE: [UNIT_TAG.FEATURES.OBSERVATION],
}

const VEHICLE_GRADE = {
  HA: [UNIT_TAG.FEATURES.COACH, UNIT_TAG.FEATURES.SITTING, UNIT_TAG.FEATURES.STANDING]
}

VEHICLE_TYPE.DE = VEHICLE_TYPE.MO
VEHICLE_TYPE.KUMO = [...VEHICLE_TYPE.KU, ...VEHICLE_TYPE.MO]
VEHICLE_TYPE.YU = VEHICLE_TYPE.NI
VEHICLE_GRADE.RO = VEHICLE_GRADE.HA

export const PRESET_TAG = {
  ...VEHICLE_TYPE,
  ...VEHICLE_GRADE,
  // Vehicle Type + Vehicle Grade
  KUHA: [...VEHICLE_TYPE.KU, ...VEHICLE_GRADE.HA],
  KUMOHA: [...VEHICLE_TYPE.KUMO, ...VEHICLE_GRADE.HA],
  DEHA: [...VEHICLE_TYPE.DE, ...VEHICLE_GRADE.HA],
  SAHA: [...VEHICLE_TYPE.SA, ...VEHICLE_GRADE.HA]
}

export const PLACEHOLDER = {
  HIGHSPEED: {
    HEAD: {
      base: 'placeholder_highspeed/loco_0.png',
      top: 'placeholder_highspeed/loco_2.png',
      decors: 'placeholder_highspeed/loco_1_0.png,placeholder_highspeed/loco_1_1.png,placeholder_highspeed/loco_1_2.png,placeholder_highspeed/loco_1_5.png,placeholder_highspeed/loco_1_7.png'.split(',')
    },
    CAR: {
      base: 'placeholder_highspeed/car_0.png',
      top: 'placeholder_highspeed/car_2.png',
      decors: 'placeholder_highspeed/car_1_0.png,placeholder_highspeed/car_1_1.png,placeholder_highspeed/car_1_2.png,placeholder_highspeed/car_1_5.png,placeholder_highspeed/car_1_7.png'.split(',')
    }
  },
  HIGHERSPEED: {
    HEAD: {
      base: 'placeholder_higherspeed/loco_0.png',
      top: 'placeholder_higherspeed/loco_2.png',
      decors: 'placeholder_higherspeed/loco_1_0.png,placeholder_higherspeed/loco_1_1.png,placeholder_higherspeed/loco_1_2.png,placeholder_higherspeed/loco_1_5.png,placeholder_higherspeed/loco_1_7.png'.split(',')
    },
    CAR: {
      base: 'placeholder_higherspeed/car_0.png',
      top: 'placeholder_higherspeed/car_2.png',
      decors: 'placeholder_higherspeed/car_1_0.png,placeholder_higherspeed/car_1_1.png,placeholder_higherspeed/car_1_2.png,placeholder_higherspeed/car_1_5.png,placeholder_higherspeed/car_1_7.png'.split(',')
    }
  },
  COMMUTER: {
    HEAD: {
      base: 'placeholder_commuter/loco_0.png',
      top: 'placeholder_commuter/loco_2.png',
      decors: 'placeholder_commuter/loco_1_0.png,placeholder_commuter/loco_1_1.png,placeholder_commuter/loco_1_2.png,placeholder_commuter/loco_1_5.png,placeholder_commuter/loco_1_7.png'.split(',')
    },
    CAR: {
      base: 'placeholder_commuter/car_0.png',
      top: 'placeholder_commuter/car_2.png',
      decors: 'placeholder_commuter/car_1_0.png,placeholder_commuter/car_1_1.png,placeholder_commuter/car_1_2.png,placeholder_commuter/car_1_5.png,placeholder_commuter/car_1_7.png'.split(',')
    }
  },
  METRO: {
    HEAD: {
      base: 'placeholder_metro/loco_0.png',
      top: 'placeholder_metro/loco_2.png',
      decors: 'placeholder_metro/loco_1_0.png,placeholder_metro/loco_1_1.png,placeholder_metro/loco_1_2.png,placeholder_metro/loco_1_5.png,placeholder_metro/loco_1_7.png'.split(',')
    },
    CAR: {
      base: 'placeholder_metro/car_0.png',
      top: 'placeholder_metro/car_2.png',
      decors: 'placeholder_metro/car_1_0.png,placeholder_metro/car_1_1.png,placeholder_metro/car_1_2.png,placeholder_metro/car_1_5.png,placeholder_metro/car_1_7.png'.split(',')
    }
  },
  TRAM: {
    HEAD: {
      base: 'placeholder_tram/loco_0.png',
      top: 'placeholder_tram/loco_2.png',
      decors: 'placeholder_tram/loco_1_0.png,placeholder_tram/loco_1_1.png,placeholder_tram/loco_1_2.png,placeholder_tram/loco_1_5.png,placeholder_tram/loco_1_7.png'.split(',')
    },
    CAR: {
      base: 'placeholder_tram/car_0.png',
      top: 'placeholder_tram/car_2.png',
      decors: 'placeholder_tram/car_1_0.png,placeholder_tram/car_1_1.png,placeholder_tram/car_1_2.png,placeholder_tram/car_1_5.png,placeholder_tram/car_1_7.png'.split(',')
    }
  }
}