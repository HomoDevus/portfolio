import React from "react";
import styled from 'styled-components'

let LangButton = styled.button`
  ${({chosen}) => chosen && 'font-weight: 500; color: black!important;'}
`

function langToggleButton({lang, setLang, buttonLang}) {
    function langChange() {
        if (buttonLang !== lang) {
            setLang(buttonLang)
        }
    }

    return (
        <LangButton
            className='language-toggle-button link'
            id={lang === buttonLang ? 'active-lang': ''}
            onClick={langChange}
            chosen={buttonLang === lang}
        >
            {buttonLang}
        </LangButton>
    )
}

export default langToggleButton