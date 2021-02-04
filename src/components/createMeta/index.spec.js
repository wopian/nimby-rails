import test from 'ava'
import { createMeta } from '../index.js'

test('blank mod meta', t => {
  t.deepEqual(createMeta(), {
    ModMeta: {
      author: 'wopian',
      desc: '0 EMUs operated in the undefined region',
      name: 'Mod Name',
      schema: 1,
      version: '0.0.1'
    }
  })
})

test('mod meta with name', t => {
  t.deepEqual(createMeta({
    name: 'Test'
  }), {
    ModMeta: {
      author: 'wopian',
      desc: '0 EMUs operated in the undefined region',
      name: 'Test',
      schema: 1,
      version: '0.0.1'
    }
  })
})

test('mod meta with name and version', t => {
  t.deepEqual(createMeta({
    name: 'Test 2',
    version: '1.3.7'
  }), {
    ModMeta: {
      author: 'wopian',
      desc: '0 EMUs operated in the undefined region',
      name: 'Test 2',
      schema: 1,
      version: '1.3.7'
    }
  })
})

test('mod meta with name, desc and version', t => {
  t.deepEqual(createMeta({
    name: 'Test 3',
    desc: 'Custom Mod Description',
    version: '2.0.1'
  }), {
    ModMeta: {
      author: 'wopian',
      desc: 'Custom Mod Description',
      name: 'Test 3',
      schema: 1,
      version: '2.0.1'
    }
  })
})
