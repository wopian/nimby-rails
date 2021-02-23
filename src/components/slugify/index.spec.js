import test from 'ava'
import { slugify } from '../index.js'

test('converts string to snake_case', t => {
  t.is(slugify('hello world'), 'hello_world')
})

test('converts string with dashes to snake_case', t => {
  t.is(slugify('hello-world'), 'hello_world')
})

test('converts DeHa to deha and not de_ha', t => {
  t.is(slugify('DeHa'), 'deha')
})