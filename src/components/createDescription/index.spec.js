import test from 'ava'
import { TRAIN_TYPE, createDescription } from '../index.js'

test('blank description gets generated', t => {
  t.is(createDescription(), 'Collection of 0 EMUs operated by Company.\n\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.')
})

test('with company name and trains gets generated', t => {
  t.is(createDescription({
    name: 'Wop Corp',
    trains: [
      { name: 'Train 1', max_speed: 120 },
      { name: 'Train 2', max_speed: 60 },
      { name: 'Train 3', train_type: TRAIN_TYPE.HIGHSPEED }
    ]
  }), 'Collection of 3 EMUs operated by Wop Corp.\n\nHighspeed:\nTrain 3\n\nCommuter:\nTrain 1\n\nTram:\nTrain 2\n\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.')
})

test('wiki links get generated', t => {
  t.is(createDescription({
    trains: [
      { wiki: 'https://wiki.example', name: 'Train 1', max_speed: 120 }
    ]
  }), 'Collection of 1 EMUs operated by Company.\n\nCommuter:\n[url=https://wiki.example]Train 1[/url]\n\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.')
})

test('region gets generated', t => {
  t.is(createDescription({
    region: 'Hokkaidō'
  }), 'Collection of 0 EMUs operated by Company in the Hokkaidō region.\n\nCurrently these are using placeholder graphics from the built-in trains. Graphics are planned for a future update.')
})