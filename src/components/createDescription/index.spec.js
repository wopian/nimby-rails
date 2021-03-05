import test from 'ava'
import { MU_TAG, createDescription } from '../index.js'

test('blank description gets generated', t => {
  t.is(createDescription(), 'Collection of 0 EMUs (0 compositions) operated by Company in Japan.\n\nTrain models use accurate and realistic figures. Purchase price and running costs are balanced with the built-in trains and all other mods published by wopian.')
})

test('with company name and trains gets generated', t => {
  t.is(createDescription({
    name: 'Wop Corp',
    trains: [
      { name: 'Train 1', tags: [MU_TAG.ROLE.COMMUTER] },
      { name: 'Train 2', tags: [MU_TAG.ROLE.TRAM] },
      { name: 'Train 3', tags: [MU_TAG.ROLE.HIGHSPEED] }
    ],
    totalTrains: 3,
    totalCompositions: 6
  }), 'Collection of 3 EMUs (6 compositions) operated by Wop Corp in Japan.\n\nTrain models use accurate and realistic figures. Purchase price and running costs are balanced with the built-in trains and all other mods published by wopian.\n\nCommuter:\nTrain 1\n\nHigh-speed:\nTrain 3\n\nTram:\nTrain 2')
})

test('wiki links get generated', t => {
  t.is(createDescription({
    trains: [
      { wiki: 'https://wiki.example', name: 'Train 1', tags: [MU_TAG.ROLE.COMMUTER] }
    ],
    totalTrains: 1,
    totalCompositions: 1
  }), 'Collection of 1 EMU (1 composition) operated by Company in Japan.\n\nTrain models use accurate and realistic figures. Purchase price and running costs are balanced with the built-in trains and all other mods published by wopian.\n\nCommuter:\n[url=https://wiki.example]Train 1[/url]')
})

test('region gets generated', t => {
  t.is(createDescription({
    region: 'Hokkaidō'
  }), 'Collection of 0 EMUs (0 compositions) operated by Company in the Hokkaidō region, Japan.\n\nTrain models use accurate and realistic figures. Purchase price and running costs are balanced with the built-in trains and all other mods published by wopian.')
})

test('train list gets generated without tags', t => {
  t.is(createDescription({
    trains: [
      { wiki: 'https://wiki.example', name: 'Train 1' }
    ],
    totalTrains: 1,
    totalCompositions: 1
  }), 'Collection of 1 EMU (1 composition) operated by Company in Japan.\n\nTrain models use accurate and realistic figures. Purchase price and running costs are balanced with the built-in trains and all other mods published by wopian.\n\n[url=https://wiki.example]Train 1[/url]')
})