import React from "react";
import styled from 'styled-components'

let LangButton = styled.button`
  ${({chosen}) => chosen && 'font-size: 1rem; font-weight: 600;'}
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
            onClick={langChange}
            chosen={buttonLang === lang}
        >
            {buttonLang}
        </LangButton>
    )
}

export default langToggleButton