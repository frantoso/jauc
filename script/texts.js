/* eslint-disable no-unused-vars */
/* jshint esversion: 6 */
/* globals Translator */
/* jshint globalstrict:true */

'use strict'

const textsDe = new Map([
  ['from', 'Von'],
  ['to', 'Nach'],
  ['Categories', 'Kategorien'],
  ['Decimal separator', 'Dezimaltrennzeichen'],
  [', (comma)', ', (Komma)'],
  ['. (point)', '. (Punkt)'],
  ['Enter number', 'Zahl eingeben'],
  ['Only numbers please!', 'Bitte nur Zahlen!'],
  ['about', 'Info'],
  ['Legal info', 'Impressum'],
  ['About FtsJauc', 'Über FtsJauc'],
  ['Just Another Unit Converter', 'Noch ein Einheiten-Konverter'],
  ['', '']
  // ["", ""],
])

const texts = new Translator([
  { lang: 'de', texts: textsDe }
])
