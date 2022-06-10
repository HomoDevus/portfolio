import React, {useEffect} from "react";

function LangToggleButton({lang, setLang, buttonLang}) {

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