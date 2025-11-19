/* jshint esversion: 6 */
/* globals window */
/* jshint globalstrict:true */

'use strict'

// eslint-disable-next-line no-unused-vars
class Translator {
  constructor (translations) {
    this.translations = (translations != null) ? translations : []
    this.activeTranslation = null

    this.setTranslation()
  }

  setTranslation () {
    for (const translation of this.translations) {
      if (window.navigator.language.indexOf(translation.lang) > -1) {
        this.activeTranslation = translation.texts
      }
    }
  }

  get (key, defaultValue) {
    if (this.activeTranslation && this.activeTranslation.has(key)) {
      return this.activeTranslation.get(key)
    }

    return defaultValue === true ? key : defaultValue
  }
}
