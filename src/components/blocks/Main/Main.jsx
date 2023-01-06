import React from 'react'
import SideMenus from './SideMenus'
import { FormattedMessage } from 'react-intl'
import { useIntl } from 'react-intl'
import { landingTextLastLine, landingTextBeforeLastLine, landingText } from '../../../constants'

export default function Main() {
    const Intl = useIntl()

    document.title = Intl.formatMessage({ id: 'name' })

    return (
        <main className="landing-page">
            <SideMenus>
                <div className="landing__main-text-container">
                    <div className="landing__main-text">
                        {landingText}
                        <p>
                            Nam sceler
                            {/*<span className='landing__main-text__heading'*/}
                            {/*      data-text='Suspe&nbsp;Praese'>Suspe&nbsp;Praese</span>*/}
                            <span className="landing__main-text__heading" data-text="Slava&nbsp;Lavrov">
                                Slava&nbsp;Lavrov
                            </span>
                            pharetra consequat. Aliquam dapibus elementum risus vitae euismod. hendrerit id
                            eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. in lorem et
                            arcu facilisis eget
                        </p>
                        {landingTextBeforeLastLine}
                        <p>
                            Praes semr
                            <span
                                className="landing__main-text__heading"
                                data-text={Intl.formatMessage({ id: 'profession' })}
                            >
                                <FormattedMessage id="profession" />
                            </span>
                            el in felis. Curabitur bibendum non sem non pretium.
                        </p>
                        {landingTextLastLine}
                    </div>
                </div>
            </SideMenus>
        </main>
    )
}
