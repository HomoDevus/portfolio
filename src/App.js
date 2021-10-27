import './App.css';
import {useState} from "react";
import LangToggleButton from './components/LangToggleButton'
import WithHtml from "./components/WithHtml";

function App() {
  const [lang, setLang] = useState('En')

  return (
    <div className="App">
      <div className='landing-page'>
        <div className='landing__left-links'>
          <WithHtml element='a' attributes={{href: '#work'}}>
            <a href="#work">Work</a>
          </WithHtml>
          <WithHtml element='a' attributes={{href: '#about'}}>
            <a href="#about">About</a>
          </WithHtml>
        </div>
        <div className='landing__main-text'>
          <h2>Slava Lavrov</h2>
          <h1>Front-end Developer</h1>
        </div>
        <div className='landing__right-links'>
          <div className='language-toggler'>
            <LangToggleButton lang={lang} setLang={setLang} buttonLang={'Ru'} />
            <LangToggleButton lang={lang} setLang={setLang} buttonLang={'En'} />
          </div>
          <div className='landing__mail-link'>
            <WithHtml element='a' attributes={{href: "mailto:lavrovslava207@gmail.com"}}>
              <a href="mailto:lavrovslava207@gmail.com">Mail</a>
            </WithHtml>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
