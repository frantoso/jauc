/* eslint-disable no-unused-vars */
/* jshint esversion: 6 */
/* jshint globalstrict:true */

'use strict'

class Globalization {
  constructor () {
    this.decimalSeparator = this._readDecimalSeparator()
  }

  get decimalSeparator () {
    return this._decimalSeparator
  }

  get groupingSeparator () {
    return this._groupingSeparator
  }

  set decimalSeparator (separator) {
    if (!(separator === '.' || separator === ',')) {
      return
    }

    this._decimalSeparator = separator
    this._groupingSeparator = separator === '.' ? ',' : '.'
  }

  stringToNumber (text) {
    // use user defined decimal separator
    let newText = this._removeGroupingSeparators(text)
    newText = this._replaceDecimalSeparator(newText)
    return Number(newText)
  }

  numberToString (number) {
    let numberText = this._roundIfNeeded(number.toString())
    const precision = this._getPrecision(numberText)
    if (precision <= 15) {
      numberText = Number(numberText).toLocaleString('en-US', { maximumFractionDigits: precision })
    }

    return this._adjustSeparators(numberText)
    // return this._adjustSeparators(numberText) + "   [" + number + "]";
  }

  _getPrecision (numberText) {
    const indexExponent = numberText.toLowerCase().search(/e[+-]/)
    const indexPoint = numberText.indexOf('.')
    let precision = 0
    if (indexPoint > -1) {
      if (indexExponent > -1) {
        precision = indexExponent - indexPoint - 1
      } else {
        precision = numberText.length - indexPoint - 1
      }
    }

    if (indexExponent > -1) {
      precision = Number(numberText.substring(indexExponent + 2)) + precision
    }

    return precision
  }

  _roundIfNeeded (numberText) {
    let postfix = ''
    let mainPart = numberText
    const indexExponent = numberText.toLowerCase().indexOf('e-')
    if (indexExponent > -1) {
      postfix = mainPart.slice(indexExponent)
      mainPart = mainPart.slice(0, indexExponent)
    }

    const indexPoint = mainPart.indexOf('.')
    if (indexPoint > -1) {
      let prefix = mainPart.slice(0, indexPoint)
      if (!prefix) {
        prefix = '0'
      }

      mainPart = mainPart.slice(indexPoint)
      mainPart = this._roundOffIfNeeded(prefix, mainPart);
      ({ main: mainPart, prefix } = this._roundUpIfNeeded(mainPart, prefix))
      mainPart = prefix + mainPart
    }

    return Number(mainPart + postfix).toString()
  }

  _roundUpIfNeeded (main, prefix) {
    if (/99[5-9]$/.test(main)) {
      main = main.slice(0, main.length - 1)
      while (main.endsWith('9')) {
        main = main.slice(0, main.length - 1)
      }

      if (main === '.') {
        prefix = Number(prefix) + 1
      } else {
        const digit = main.slice(main.length - 1)
        main = main.slice(0, main.length - 1)
        main += Number(digit) + 1
      }
    }

    return { main, prefix }
  }

  _roundOffIfNeeded (prefix, main) {
    if (Number(prefix) > 0) {
      const index = main.indexOf('000')
      if (index > -1) {
        main = main.slice(0, index)
      }
    }

    return main
  }

  _adjustSeparators (numberText) {
    if (this._decimalSeparator === '.') {
      return numberText
    }

    numberText = numberText.replace(/,/g, '_')
    numberText = numberText.replace(/\./g, this._decimalSeparator)
    numberText = numberText.replace(/_/g, this._groupingSeparator)

    return numberText
  }

  _removeGroupingSeparators (text) {
    return text.replace(new RegExp('[' + this._groupingSeparator + ']', 'g'), '')
  }

  _replaceDecimalSeparator (text) {
    return text.replace(this._decimalSeparator, '.')
  }

  _readDecimalSeparator () {
    return this._readSeparator(1.2345)
  }

  _readGroupingSeparator () {
    return this._readSeparator(12345)
  }

  _readSeparator (number) {
    const numberString = number.toLocaleString()
    return numberString.replace(/\d/g, '')
  }
}

const globalization = new Globalization()
