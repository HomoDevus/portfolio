import LangToggleButton from "./LangToggleButton";
import {useContext, useLayoutEffect, useState} from "react";
import {Context} from "../../../context/ContextProvider";

export default function SideMenus({children}) {
  let {language, setLanguage} = useContext(Context)
  let [windowWidth, setWindowWidth] = useState(window.innerWidth)

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

  console.log(windowWidth)

  return windowWidth > 600 ? (
    <>
      <aside className='landing__left-links__outer'>
        <nav className='landing__left-links'>
          <div className='landing__link-outer top left'>
            <a href="#work">WORKS</a>
          </div>
          <div className='landing__link-outer bottom left'>
            <a href="#about">ABOUT</a>
          </div>
        </nav>
      </aside>
      {children}
      <aside className='landing__right-links__outer'>
        <nav className='landing__right-links'>
          <div className='language-toggler landing__link-outer top right'>
            <LangToggleButton lang={language} setLang={setLanguage} buttonLang={'RU'}/>
            <LangToggleButton lang={language} setLang={setLanguage} buttonLang={'EN'}/>
          </div>
          <div className='landing__mail-link landing__link-outer bottom right'>
            <a href="mailto:lavrovslava207@gmail.com" onClick={
              () => {
                navigator.clipboard.writeText(this.state.textToCopy)
              }
            }>MAIL</a>
          </div>
        </nav>
      </aside>
    </>
  ) : (
    <>
      <header className='landing__mobile-header'>
        <div className='landing__mobile-header__links'>
          <a href='#work'>WORK</a>
          <a href='#about'>ABOUT</a>
          <a href="mailto:lavrovslava207@gmail.com" onClick={
            () => {
              navigator.clipboard.writeText(this.state.textToCopy)
            }
          }>MAIL</a>
          <div className='landing__mobile-header__separator'/>
        </div>
        <div className='landing__mobile-header__language language-toggle-button'>
          <LangToggleButton lang={language} setLang={setLanguage} buttonLang={'RU'}/>
          <LangToggleButton lang={language} setLang={setLanguage} buttonLang={'EN'}/>
        </div>
      </header>
      {children}
    </>
  )
}