import test from 'ava'
import { MU_TAG, createCollectionDescription } from '../index.js'

test('blank description gets generated', t => {
  t.is(createCollectionDescription(), '')
})

test('with company name, region and country', t => {
  t.is(createCollectionDescription({
    companies: [
      { name: 'Wop Corp', region: 'Cornwall' }
    ],
    country: 'the United Kingdom'
  }), 'Collection of 0 EMUs (0 compositions) from 1 company operating in the United Kingdom.\n\nCornwall region:\nWop Corp')
})

test('with company wiki', t => {
  t.is(createCollectionDescription({
    companies: [
      { wiki: 'https://wiki.example', name: 'Wop Corp', region: 'Hokkaidō' },
      { wiki: 'https://wiki2.example', name: 'Ian Corporation', region: 'Tōhoku' }
    ]
  }), 'Collection of 0 EMUs (0 compositions) from 2 companies operating in Japan.\n\nHokkaidō region:\n[url=https://wiki.example]Wop Corp[/url]\n\nTōhoku region:\n[url=https://wiki2.example]Ian Corporation[/url]')
})

test('with company trains', t => {
  t.is(createCollectionDescription({
    companies: [
      {
        name: 'Wop Corp',
        region: 'Hokkaidō',
        trains: [
          { composition: [ {} ] },
          { composition: [ {}, {} ] }
        ]
      }
    ]
  }), 'Collection of 2 EMUs (3 compositions) from 1 company operating in Japan.\n\nHokkaidō region:\nWop Corp 2 EMUs (3 compositions)')
})

test('with company trains and tagged by role', t => {
  t.is(createCollectionDescription({
    companies: [
      {
        name: 'Wop Corp',
        region: 'Hokkaidō',
        trains: [
          { tags: [ MU_TAG.ROLE.METRO ], composition: [ {} ] },
          { tags: [ MU_TAG.ROLE.TRAM ], composition: [ {}, {} ] }
        ]
      }
    ]
  }), 'Collection of 2 EMUs (3 compositions) from 1 company operating in Japan.\n\nHokkaidō region:\nWop Corp 2 EMUs (3 compositions - metro/tram)')
})

test('with company trains and tagged by role, without region', t => {
  t.is(createCollectionDescription({
    companies: [
      {
        name: 'Wop Corp',
        trains: [
          { tags: [ MU_TAG.ROLE.METRO ], composition: [ {} ] },
          { tags: [ MU_TAG.ROLE.TRAM ], composition: [ {}, {} ] }
        ]
      }
    ]
  }), 'Collection of 2 EMUs (3 compositions) from 1 company operating in Japan.\n\nundefined region:\nWop Corp 2 EMUs (3 compositions - metro/tram)')
})

test('with company trains without compositions', t => {
  t.is(createCollectionDescription({
    companies: [
      {
        name: 'Wop Corp',
        trains: [
          { tags: [ MU_TAG.ROLE.METRO ] },
          { tags: [ MU_TAG.ROLE.TRAM ] }
        ]
      }
    ]
  }), 'Collection of 2 EMUs (0 compositions) from 1 company operating in Japan.\n\nundefined region:\nWop Corp 2 EMUs (0 compositions - metro/tram)')
})