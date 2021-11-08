import './App.css';
import {useState} from "react";
import LangToggleButton from './components/LangToggleButton'
import WithHtml from "./components/WithHtml";

function App() {
  const [lang, setLang] = useState('EN')

  return (
    <div className="App">
      <div className='landing-page'>
        <div className='landing__left-links'>
          <WithHtml element='a' attributes={{href: '#work'}}>
            <a href="#work">WORKS</a>
          </WithHtml>
          <WithHtml element='a' attributes={{href: '#about'}}>
            <a href="#about">ABOUT</a>
          </WithHtml>
        </div>
        <div className='landing__main-text'>
          <WithHtml element='h2'>
            <h2>Slava Lavrov</h2>
          </WithHtml>
          <div className='landing__main-header'>
            <WithHtml element='h1'>
              <h1>Front-end Developer</h1>
            </WithHtml>
          </div>
        </div>
        <div className='landing__right-links'>
          <div className='language-toggler'>
            <LangToggleButton lang={lang} setLang={setLang} buttonLang={'RU'} />
            <LangToggleButton lang={lang} setLang={setLang} buttonLang={'EN'} />
          </div>
          <div className='landing__mail-link'>
            <WithHtml element='a' attributes={{href: "mailto:lavrovslava207@gmail.com"}}>
              <a href="mailto:lavrovslava207@gmail.com" onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>MAIL</a>
            </WithHtml>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
