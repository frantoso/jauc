/* jshint esversion: 6 */
/* jshint globalstrict:true */

'use strict'

const formula01 = (siValue, unit) => {
  return Number(siValue) * Number(unit.op1 ? unit.op1 : 1.0)
}

const formula01Reverse = (otherValue, unit) => {
  return Number(otherValue) / Number(unit.op1 ? unit.op1 : 1.0)
}

const formula02 = (siValue, unit) => {
  return Number(siValue) - Number(unit.op1 ? unit.op1 : 0.0)
}

const formula02Reverse = (otherValue, unit) => {
  return Number(otherValue) + Number(unit.op1 ? unit.op1 : 0.0)
}

const formula03 = (siValue, unit) => {
  return (Number(siValue) * Number(unit.op1 ? unit.op1 : 1.0)) - Number(unit.op2 ? unit.op2 : 0.0)
}

const formula03Reverse = (otherValue, unit) => {
  return (Number(otherValue) + Number(unit.op2 ? unit.op2 : 0.0)) / Number(unit.op1 ? unit.op1 : 1.0)
}

const formula04 = (siValue, unit) => {
  return (Number(siValue) - Number(unit.op1 ? unit.op1 : 0.0)) * Number(unit.op2 ? unit.op2 : 1.0)
}

const formula04Reverse = (otherValue, unit) => {
  return (Number(otherValue) / Number(unit.op2 ? unit.op2 : 1.0)) + Number(unit.op1 ? unit.op1 : 0.0)
}

const formula05 = (siValue, unit) => {
  return ((Number(siValue) - Number(unit.op1 ? unit.op1 : 0.0)) * Number(unit.op2 ? unit.op2 : 1.0)) + Number(unit.op3 ? unit.op3 : 0.0)
}

const formula05Reverse = (otherValue, unit) => {
  return ((Number(otherValue) - Number(unit.op3 ? unit.op3 : 0.0)) / Number(unit.op2 ? unit.op2 : 1.0)) + Number(unit.op1 ? unit.op1 : 0.0)
}

// eslint-disable-next-line no-unused-vars
const calculations = new Map([
  ['f01', formula01],
  ['f02', formula02],
  ['f03', formula03],
  ['f04', formula04],
  ['f05', formula05]
])

// eslint-disable-next-line no-unused-vars
const calculationsReverse = new Map([
  ['f01', formula01Reverse],
  ['f02', formula02Reverse],
  ['f03', formula03Reverse],
  ['f04', formula04Reverse],
  ['f05', formula05Reverse]
])
