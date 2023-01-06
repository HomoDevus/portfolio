import LangToggleButton from './LangToggleButton'
import { useContext, useLayoutEffect, useState } from 'react'
import { Context } from '../../../context/ContextProvider'
import { LOCALES } from '../../../assets/languages/locales'
import { FormattedMessage } from 'react-intl'

export default function SideMenus({ children }) {
    const { language, setLanguage } = useContext(Context)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useLayoutEffect(() => {
        function updateWindowWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateWindowWidth)
        updateWindowWidth()
        return () => {
            window.removeEventListener('resize', updateWindowWidth)
        }
    })

    return windowWidth > 600 ? (
        <>
            <aside className="landing__left-links__outer">
                <nav className="landing__left-links">
                    <div className="landing__link-outer top left">
                        <a className="link" href="#work">
                            <FormattedMessage id="menu_works" />
                        </a>
                    </div>
                    <div className="landing__link-outer bottom left">
                        <a className="link" href="#about">
                            <FormattedMessage id="menu_about" />
                        </a>
                    </div>
                </nav>
            </aside>
            {children}
            <aside className="landing__right-links__outer">
                <nav className="landing__right-links">
                    <div className="language-toggler landing__link-outer top right">
                        <LangToggleButton
                            lang={language}
                            setLang={setLanguage}
                            buttonLang={LOCALES.RUSSIAN}
                        />
                        <LangToggleButton
                            lang={language}
                            setLang={setLanguage}
                            buttonLang={LOCALES.ENGLISH}
                        />
                    </div>
                    <div className="landing__mail-link landing__link-outer bottom right">
                        <a className="link" href="mailto:lavrovslava207@gmail.com">
                            <FormattedMessage id="menu_mail" />
                        </a>
                    </div>
                </nav>
            </aside>
        </>
    ) : (
        <>
            <header className="landing__mobile-header">
                <div className="landing__mobile-header__links">
                    <a className="link" href="#works">
                        <FormattedMessage id="menu_works" />
                    </a>
                    <a className="link" href="#about">
                        <FormattedMessage id="menu_about" />
                    </a>
                    <a className="link" href="mailto:lavrovslava207@gmail.com">
                        <FormattedMessage id="menu_mail" />
                    </a>
                    <div className="landing__mobile-header__separator" />
                </div>
                <div className="landing__mobile-header__language language-toggle-button">
                    <LangToggleButton lang={language} setLang={setLanguage} buttonLang={LOCALES.RUSSIAN} />
                    <LangToggleButton lang={language} setLang={setLanguage} buttonLang={LOCALES.ENGLISH} />
                </div>
            </header>
            {children}
        </>
    )
}
