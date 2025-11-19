/* eslint-disable no-unused-vars */
/* jshint esversion: 6 */
/* globals conversions, calculations, calculationsReverse, formula01, formula01Reverse, translations, Framework7, Dom7 */
/* globals texts, globalization, version */
/* jshint globalstrict:true */

'use strict'

// objects
const $$ = Dom7
let activeConversion

const app = new Framework7({
  root: '#app',
  name: 'Just Another Unit Coverter',
  id: 'flisting.de.jauc.f7',
  version: '1.0.0',
  init: false,
  // Enable swipe panel
  panel: {
    swipe: 'left'
  },
  // Add default routes
  routes: [
    {
      path: '/legalinfo/',
      url: 'http://www.flisting.de/kontakt.html'
    },
    {
      path: '/home/',
      pageName: 'jauchome',
      options: {
        reloadCurrent: true
      }
    }
  ]
  // ... other parameters
})

let mainView

// this function will be called after the html document is loaded
app.on('init', function () {
  mainView = app.views.create('.view-main', { stackPages: true })
  _initializeTexts()

  conversions.forEach(item => {
    const newElement = "<li><button class=\"button button-large color-black\" onclick=\"loadPage('" +
            item.name + "')\">" +
            _getTitle(item) + '</button></li>'

    $$('#menuitems').append(newElement)
  })

  _initializeUserSettings()
})

$$(document).on('page:init page:reinit', function (e) {
  setTimeout(_activateConversion, 30)
})

app.init()

// public functions
function unitChanged () {
  _calculate()
}

function fromValueChanged () {
  _calculate()
}

function toValueChanged () {
  _calculateReverse()
}

function separatorChanged () {
  const valueFrom = globalization.stringToNumber($$('#from-value').val())
  const valueTo = globalization.stringToNumber($$('#to-value').val())

  globalization.decimalSeparator = $$('#separator-selector').val()
  _saveSeparator()
  _setValidationPattern()

  $$('#from-value').val(globalization.numberToString(valueFrom))
  $$('#to-value').val(globalization.numberToString(valueTo))
}

function loadPage (conversionName) {
  _activatePage(conversionName)
  _saveCategory(conversionName)
}

function showAbout () {
  app.panel.close('.panel-left')
  app.dialog.create({
    title: texts.get('About Jauc', true),
    text: texts.get('Just another unit converter', true),
    content: '<div><p>Version ' +
            version +
            '<br/>Author: Frank Listing</p><a class="link external" href="impressum.html">' +
            texts.get('Legal info', true) +
            '</a></div>',
    buttons: [
      {
        text: app.params.dialog.buttonOk,
        bold: true,
        keyCodes: [13, 27, 32]
      }
    ],
    closeByBackdropClick: true,
    destroyOnClose: true
  }).open()
}

// private functions

function _setValidationPattern () {
  const validatePattern = '[+-]?(([0-9' + globalization.groupingSeparator + ']+' +
        globalization.decimalSeparator + '?[0-9]*)|([0-9' +
        globalization.groupingSeparator + ']*' +
        globalization.decimalSeparator + '?[0-9]+))([eE][+-]?[0-9]+)?'
  $$('#from-value').attr('pattern', validatePattern)
  $$('#to-value').attr('pattern', validatePattern)
}

function _initializeTexts () {
  $$('#panel-header').text(texts.get('Categories', true))
  $$('#from-header').text(texts.get('from', true))
  $$('#to-header').text(texts.get('to', true))
  $$('#from-value').attr('placeholder', texts.get('Enter number', true))
  $$('#from-value').attr('data-error-message', texts.get('Only numbers please!', true))
  $$('#to-value').attr('placeholder', texts.get('Enter number', true))
  $$('#to-value').attr('data-error-message', texts.get('Only numbers please!', true))
  $$('#separator-label').text(texts.get('Decimal separator', true))
  $$('#separator-option-comma').text(texts.get(', (comma)', true))
  $$('#separator-option-point').text(texts.get('. (point)', true))
  $$('#menu-about').text(texts.get('about', true))

  _setValidationPattern()

  $$('#separator-selector').val(globalization.decimalSeparator)
}

function _initializeUserSettings () {
  _restoreSeparator()
  _restoreCategory()
}

function _activateConversion () {
  if (!activeConversion) {
    activeConversion = conversions[0]
  }

  $$('#conversionheader').html(_getTitle(activeConversion))

  const fromSelector = $$('#from-selector')
  const toSelector = $$('#to-selector')
  fromSelector.html('')
  toSelector.html('')
  activeConversion.units.forEach(unit => {
    const newListItem = '<option value="' + unit.name + '">' + _getTitle(unit) + _getSymbol(unit) + '</option>'
    fromSelector.append(newListItem)
    toSelector.append(newListItem)
  })

  _restoreConversionData()
  unitChanged()
}

function _getConversionFromName (name) {
  const conversion = _getFromName(name, conversions)
  if (conversion) {
    conversion.siUnit = _getSiUnit(conversion)
  }

  return conversion
}

function _getSiUnit (conversion) {
  let siUnit = null
  for (const index in conversion.units) {
    if (conversion.units[index].si) {
      siUnit = conversion.units[index]
      break
    }
  }

  return siUnit
}

function _getUnitFromName (name) {
  const unit = _getFromName(name, activeConversion.units)
  if (unit) {
    _insertFormula(unit)
  }

  return unit
}

function _getFromName (name, collection) {
  let item = null
  for (const index in collection) {
    if (collection[index].name === name) {
      item = collection[index]
      break
    }
  }

  return item
}

function _insertFormula (unit) {
  if (!unit) {
    return
  }

  unit.formulaForewards = _findFormula(unit.formula, calculations, formula01)
  unit.formulaReverse = _findFormula(unit.formula, calculationsReverse, formula01Reverse)
}

function _findFormula (formula, dictionary, defaultFormula) {
  if (formula && dictionary.has(formula)) {
    return dictionary.get(formula)
  }

  return defaultFormula
}

function _getTitle (object) {
  const translation = translations.get(object.name)
  let title = (translation) ? translation.title : object.title

  if (title === undefined) {
    title = object.name
  }

  if (title === undefined) {
    title = '---'
  }

  return title
}

function _getSymbol (object) {
  const translation = translations.get(object.name)
  const symbol = (translation) ? translation.symbol : object.symbol

  if (symbol === undefined || symbol === '' || symbol === '-') {
    return ''
  }

  return ' (' + symbol + ')'
}

function _calculate () {
  const result = _calculateResult('#from-selector', '#to-selector', '#from-value')
  $$('#to-value').val(result)
  _saveConversionData()
}

function _calculateReverse () {
  const result = _calculateResult('#to-selector', '#from-selector', '#to-value')
  $$('#from-value').val(result)
  _saveConversionData()
}

function _calculateResult (fromUnitSelector, toUnitSelector, fromValueSelector) {
  const unitFrom = _getUnitFromName($$(fromUnitSelector).val())
  const unitTo = _getUnitFromName($$(toUnitSelector).val())
  let valueFrom = $$(fromValueSelector).val()
  valueFrom = globalization.stringToNumber(valueFrom)

  if (valueFrom && unitFrom && unitTo) {
    try {
      const valueTo = unitTo.formulaForewards(unitFrom.formulaReverse(valueFrom, unitFrom), unitTo)
      return globalization.numberToString(valueTo)
      // eslint-disable-next-line no-empty
    } catch (ex) { }
  }

  return '---'
}

function _activatePage (conversionName) {
  app.panel.close('.panel-left')
  activeConversion = _getConversionFromName(conversionName)
  mainView.router.navigate('/home/')
}

function _saveCategory (conversionName) {
  localStorage.setItem('category', conversionName)
}

function _restoreCategory () {
  const conversionName = localStorage.getItem('category')
  if (conversionName) {
    _activatePage(conversionName)
  }
}

function _saveConversionData () {
  const conversionData = {
    unitFrom: $$('#from-selector').val(),
    unitTo: $$('#to-selector').val(),
    valueFrom: $$('#from-value').val()
  }

  const data = JSON.stringify(conversionData)
  localStorage.setItem('conversion-' + activeConversion.name, data)
}

function _restoreConversionData () {
  const data = localStorage.getItem('conversion-' + activeConversion.name)
  if (data) {
    const conversionData = JSON.parse(data)
    $$('#from-selector').val(conversionData.unitFrom)
    $$('#to-selector').val(conversionData.unitTo)
    $$('#from-value').val(conversionData.valueFrom)
    const result = _calculateResult('#from-selector', '#to-selector', '#from-value')
    $$('#to-value').val(result)
  }
}

function _saveSeparator () {
  localStorage.setItem('separator', globalization.decimalSeparator)
}

function _restoreSeparator () {
  const separator = localStorage.getItem('separator')
  if (separator) {
    globalization.decimalSeparator = separator
    $$('#separator-selector').val(globalization.decimalSeparator)
  }
}
