import test from 'ava'
import { createMeta } from '../index.js'

test('blank mod meta', t => {
  t.is(createMeta(), '[ModMeta]\nschema=1\nname=Mod Name\nauthor=wopian\ndesc=Collection of trains from Mod Name\nversion=0.0.1\n')
})

test('mod meta with name', t => {
  t.is(createMeta({
    name: 'Test'
  }), '[ModMeta]\nschema=1\nname=Test\nauthor=wopian\ndesc=Collection of trains from Test\nversion=0.0.1\n')
})

test('mod meta with name and version', t => {
  t.is(createMeta({
    name: 'Test 2',
    version: '1.3.7'
  }), '[ModMeta]\nschema=1\nname=Test 2\nauthor=wopian\ndesc=Collection of trains from Test 2\nversion=1.3.7\n')
})

test('mod meta with name, desc and version', t => {
  t.is(createMeta({
    name: 'Test 3',
    desc: 'Custom Mod Description',
    version: '2.0.1'
  }), '[ModMeta]\nschema=1\nname=Test 3\nauthor=wopian\ndesc=Custom Mod Description\nversion=2.0.1\n')
})
