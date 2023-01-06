import { LOCALES } from './assets/languages/locales'
import { MESSAGES } from './assets/languages/messages'
import { useContext } from 'react'
import { Context } from './context/ContextProvider'
import { IntlProvider } from 'react-intl'

export default function Intl({ children }) {
    const { language } = useContext(Context)

    return (
        <IntlProvider
            locale={language}
            defaultLocale={LOCALES.ENGLISH}
            messages={MESSAGES[language]}
            className="App"
        >
            {children}
        </IntlProvider>
    )
}
