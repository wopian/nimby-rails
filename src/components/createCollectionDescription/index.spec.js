import test from 'ava'
import { createCollectionDescription } from '../index.js'

test('blank description gets generated', t => {
  t.is(createCollectionDescription(), '')
})

test('with company name, region and country', t => {
  t.is(createCollectionDescription({
    companies: [
      { name: 'Wop Corp', region: 'Cornwall' }
    ],
    country: 'the United Kingdom'
  }), 'Collection of 0 trains from 1 companies operating in the United Kingdom.\n\nCornwall region:\nWop Corp\n\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.')
})

test('with company wiki', t => {
  t.is(createCollectionDescription({
    companies: [
      { wiki: 'https://wiki.example', name: 'Wop Corp', region: 'Hokkaidō' },
      { wiki: 'https://wiki2.example', name: 'Ian Corporation', region: 'Tōhoku' }
    ]
  }), 'Collection of 0 trains from 2 companies operating in Japan.\n\nHokkaidō region (red on map):\n[url=https://wiki.example]Wop Corp[/url]\n\nTōhoku region (yellow on map):\n[url=https://wiki2.example]Ian Corporation[/url]\n\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.')
})

test('with company trains', t => {
  t.is(createCollectionDescription({
    companies: [
      {
        name: 'Wop Corp',
        region: 'Hokkaidō',
        trains: [
          { max_speed: 120 },
          { max_speed: 300 }
        ]
      }
    ]
  }), 'Collection of 2 trains from 1 companies operating in Japan.\n\nHokkaidō region (red on map):\nWop Corp 1 highspeed, 1 commuter\n\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.')
})