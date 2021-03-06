import test from 'ava'
import { calculateEmptyMass } from '../index.js'

test('mass of 25.78x2.92m', t => {
  t.deepEqual(calculateEmptyMass({
    length: 25.78,
    width: 2.92
  }), 37600)
})

test('mass of 18.35x2.978m', t => {
  t.deepEqual(calculateEmptyMass({
    length: 18.35,
    width: 2.978
  }), 27300)
})

test('mass of 20x2.95m', t => {
  t.deepEqual(calculateEmptyMass({
    length: 20,
    width: 2.95
  }), 29500)
})

test('mass of 6.5x2.4', t => {
  t.deepEqual(calculateEmptyMass({
    length: 6.5,
    width: 2.4
  }), 7800)
})

test('mass of 6.5x2.4 with tram', t => {
  t.deepEqual(calculateEmptyMass({
    length: 6.5,
    width: 2.4,
    tags: 'tram'
  }), 6900)
})

test('mass of 20x2.95m with bar', t => {
  t.deepEqual(calculateEmptyMass({
    length: 20,
    width: 2.95,
    tags: 'bar'
  }), 30400)
})

test('mass of 20x2.95m with generator', t => {
  t.deepEqual(calculateEmptyMass({
    length: 20,
    width: 2.95,
    tags: 'generator'
  }), 32400)
})

test('mass of 20x2.95m with sleeper', t => {
  t.deepEqual(calculateEmptyMass({
    length: 20,
    width: 2.95,
    tags: 'sleeper'
  }), 28000)
})

test('mass of 20x2.95m with restaurant and baggage', t => {
  t.deepEqual(calculateEmptyMass({
    length: 20,
    width: 2.95,
    tags: 'baggage,restaurant'
  }), 28800)
})