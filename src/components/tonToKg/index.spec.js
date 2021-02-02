import test from 'ava'
import { tonToKg } from '../index.js'

test('converts tons to kg', t => {
  const ton = 10
  t.is(tonToKg(ton), 10_000)
})