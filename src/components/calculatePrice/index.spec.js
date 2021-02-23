import test from 'ava'
import { calculatePrice } from '../index.js'

test('Matches base game prices for Yamanote E231-500', t => {
  t.deepEqual(calculatePrice({
    max_speed: 120,
    max_pax: 156,
    empty_mass: 25_000,
    length: 20,
    width: 2.95
  }), {
    cost_per_day: 53,
    price: 2_200_000
  })
})

test('Renfe121', t => {
  t.deepEqual(calculatePrice({
    max_speed: 220,
    max_pax: 70,
    empty_mass: 56_250,
    length: 25.78,
    width: 2.92
  }), {
    cost_per_day: 84, // 224
    price: 3_500_000 // 3_500_000
  })
})

test('NYR160', t => {
  t.deepEqual(calculatePrice({
    max_speed: 90,
    max_pax: 135,
    empty_mass: 38_600,
    length: 18.35,
    width: 2.978
  }), {
    cost_per_day: 69, // 33
    price: 2_866_000 // 2_500_000
  })
})

test('AlstomCitadis', t => {
  t.deepEqual(calculatePrice({
    max_speed: 70,
    max_pax: 45,
    empty_mass: 7000,
    length: 6.5,
    width: 2.4
  }), {
    cost_per_day: 20, // 40
    price: 957_000 // 1_700_000
  })
})

test('London1992', t => {
  t.deepEqual(calculatePrice({
    max_speed: 100,
    max_pax: 111,
    empty_mass: 20_500,
    length: 16.25,
    width: 2.62
  }), {
    cost_per_day: 33, // 42
    price: 1_359_000 // 1_900_000
  })
})

test('TgvDuplex', t => {
  t.deepEqual(calculatePrice({
    max_speed: 320,
    max_pax: 63,
    empty_mass: 39_000,
    length: 20,
    width: 2.904
  }), {
    cost_per_day: 73, // 30
    price: 3_047_000 // 3_400_000
  })
})

test('SiemensVelaroE', t => {
  t.deepEqual(calculatePrice({
    max_speed: 350,
    max_pax: 60,
    empty_mass: 55_875,
    length: 25,
    width: 2.95
  }), {
    cost_per_day: 217, // 308
    price: 9_000_000 // 9_000_000
  })
})

test('Keikyu DeHa 1500', t => {
  t.deepEqual(calculatePrice({
    max_speed: 130,
    max_pax: 140,
    empty_mass: 25_000,
    length: 20,
    width: 2.798
  }), {
    cost_per_day: 52,
    price: 2_141_000
  })
})

test('Tokyu 300', t => {
  t.deepEqual(calculatePrice({
    max_speed: 60,
    max_pax: 132,
    empty_mass: 15_350,
    length: 11.99,
    width: 2.5
  }), {
    cost_per_day: 26, // 23
    price: 1_089_000 // 979_896
  })
})

test('Tokyu DeHa 3220', t => {
  t.deepEqual(calculatePrice({
    max_speed: 120,
    max_pax: 155,
    empty_mass: 33_300,
    length: 20,
    width: 2.788
  }), {
    cost_per_day: 69, // 51
    price: 2_869_000 // 2_490_840
  })
})