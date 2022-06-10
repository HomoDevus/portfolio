import React from "react";
import { FormattedMessage } from "react-intl";
import {LOCALES} from "../../../assets/languages/locales";

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
    >
      <FormattedMessage id={`menu_lang_${buttonLang === LOCALES.RUSSIAN ? 'ru': 'en'}`} />
    </button>
  )
}

export default LangToggleButton