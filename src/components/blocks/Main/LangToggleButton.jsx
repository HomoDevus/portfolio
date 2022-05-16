import React, {useEffect} from "react";
import i18next from "i18next";

function LangToggleButton({lang, setLang, buttonLang}) {
    useEffect(() => {
        i18next.changeLanguage(lang)
    }, [lang])

    function langChange() {
        if (buttonLang !== lang) {
            setLang(buttonLang)
        }
    }

    let isButtonChosen = buttonLang === lang

    return (
        <button
            className={`language-toggle-button ${isButtonChosen && 'chosen'} link`}
            id={lang === buttonLang ? 'active-lang': ''}
            onClick={langChange}
        >
            {buttonLang}
        </button>
    )
}

export default LangToggleButton