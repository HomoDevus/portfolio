import React from 'react'
import { LOCALES } from '../../../assets/languages/locales'
import { FormattedMessage } from 'react-intl';

function LangToggleButton({ lang, setLang, buttonLang }) {
  function langChange() {
    if (buttonLang !== lang) {
      setLang(buttonLang)
      localStorage.setItem('locale', buttonLang)
    }
  }

  let isButtonChosen = buttonLang === lang

  return (
    <button
      className={`language-toggle-button ${isButtonChosen && 'chosen'} link`}
      id={lang === buttonLang ? 'active-lang' : ''}
      onClick={langChange}
      lang={lang}
    >
      {buttonLang === LOCALES.RUSSIAN ? <FormattedMessage id="menu_lang_ru" /> : <FormattedMessage id="menu_lang_en" />}
    </button>
  )
}

export default LangToggleButton
