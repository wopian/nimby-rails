import test from 'ava'
import { ini } from '../index.js'

test('converts json object to ini format', t => {
  t.is(ini({ ModMeta: { schema: 1 }}), '[ModMeta]\nschema=1\n\n')
})

test('converts json array to ini format', t => {
  t.is(ini([
    { TrainUnit: { id: '1' } },
    { TrainUnit: { id: '2' } }
  ]), '[TrainUnit]\nid=1\n\n[TrainUnit]\nid=2\n\n')
})