import React from 'react';
import SideMenus from "./SideMenus";
import { loremIpsum } from "lorem-ipsum";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

const LOREM_IPSUM_OPTIONS = { count: 10 }
let landingText = []
let landingTextBeforeLastLine = loremIpsum(LOREM_IPSUM_OPTIONS)
let landingTextLastLine = loremIpsum(LOREM_IPSUM_OPTIONS)

for (let i = 0; i < 40; i++) {
  landingText.push(<p key={i}>{loremIpsum(LOREM_IPSUM_OPTIONS)}</p>)
}

export default function Main() {
  const Intl = useIntl()

  document.title = Intl.formatMessage({id: 'name'})

  return (
    <main className='landing-page'>
      <SideMenus>
        <div className='landing__main-text-container'>
          <div className='landing__main-text'>
            {landingText}
            {/*<span className='landing__main-text__heading' data-text='Slava&nbsp;Lavrov'>Slava&nbsp;Lavrov</span>*/}
            <p>
              Nam sceler
              <span className='landing__main-text__heading'
                    data-text='Suspe&nbsp;Praese'>Suspe&nbsp;Praese</span>
              pharetra consequat. Aliquam dapibus elementum risus vitae euismod.
              hendrerit id eget metus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. in lorem et arcu facilisis eget
            </p>
            {landingTextBeforeLastLine}
            <p>
              Praes semr
              <span
                className='landing__main-text__heading'
                data-text={Intl.formatMessage({ id: 'profession' })}
              >
                <FormattedMessage id='profession' />
              </span>
              el in felis. Curabitur
              bibendum non sem non pretium.
            </p>
            {landingTextLastLine}
          </div>
        </div>
      </SideMenus>
    </main>
  )
}