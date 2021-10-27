import React from "react";
import styled from 'styled-components'

let LangButton = styled.button`
  ${({chosen}) => chosen && 'text-decoration: underline'}
`

function langToggleButton({lang, setLang, buttonLang}) {
    function langChange() {
        if (buttonLang !== lang) {
            setLang(buttonLang)
        }
    }

    return (
        <LangButton
            className='language-toggle-button'
            onClick={langChange}
            chosen={buttonLang === lang}
        >
            {buttonLang}
        </LangButton>
    )
}

export default langToggleButton