import test from 'ava'
import { roundTo } from '../index.js'

test('rounds 100 in increments of 100', t => {
  t.is(roundTo(100, 100), 100)
})

test('rounds 199 in increments of 100', t => {
  t.is(roundTo(199, 100), 100)
})

test('rounds 5 in increments of 5', t => {
  t.is(roundTo(5), 5)
})

test('rounds 199 in increments of 5', t => {
  t.is(roundTo(199, 5), 195)
})

test('rounds in increments of 2', t => {
  t.is(roundTo(1, 2), 0)
})

test('rounds negative numbers', t => {
  t.is(roundTo(-13, 5), -10)
})