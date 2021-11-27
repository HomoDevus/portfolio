import './css/App.css';
import './css/works.css';
import {useState} from "react";
import LangToggleButton from './components/LangToggleButton'
// import WithHtml from "./components/WithHtml";
import WorkCard from "./components/WorkCard";

function App() {
  const [lang, setLang] = useState('EN')

  return (
    <div className="App">
        <div className='landing-page'>
            <div className='landing__left-links__outer'>
                <div className='landing__left-links'>
                    <div className='landing__link-outer top left'>
                        <a href="#work">WORKS</a>
                    </div>
                    <div className='landing__link-outer bottom left'>
                        <a href="#about">ABOUT</a>
                    </div>
                </div>
            </div>
            <div className='landing__main'>
                <div className='landing__main-text'>
                    isque eleifend, neque eget posuere ultricies, nulla tellus bibendum augue,
                    ut ornare diam lorem non ipsum. Aenean in erat pharetra, semper orci id,
                    pretium felis. Sed at velit non erat finibus elementum at a neque. Mauris
                    bibendum auctor dignissim. Etiam convallis lacus enim, at pretium urna dictum vel.
                    Aenean molestie sem qu
                    <span className='landing__main-text__heading' data-text='Slava&nbsp;Lavrov'>Slava&nbsp;Lavrov</span>fermentum
                    hendrerit id eget metus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. in lorem et arcu facilisis
                    <span className='landing__main-text__heading' data-text='Frontend&nbsp;Developer'>Frontend&nbsp;Developer</span>
                    el in felis. Curabitur
                    bibendum non sem non pretium.
                    Duis sed felis a dolor viverra mollis et nec libero. Quisque lacus ex, luctus et odio eu, pretium
                    sed et pretium est. Praesent cursus lacus a mattis posuere. Suspendisse porttitor nulla non neque
                    iaculis, iaculis malesuada enim a ante lobortis malesuada interdum eget magna. Nunc malesuada risus
                    ac arcu fermentum vestibulum. Nullam dolor odio, efficitur at tempus sit amet, efficitur nec nulla.
                    Donec sit amet magna tortor. Aenean at risus rhoncus, facilisis ex et, ultricies neque.
                </div>
            </div>
            <div className='landing__right-links__outer'>
                <div className='landing__right-links'>
                    <div className='language-toggler landing__link-outer top right'>
                        <LangToggleButton lang={lang} setLang={setLang} buttonLang={'RU'} />
                        <LangToggleButton lang={lang} setLang={setLang} buttonLang={'EN'} />
                    </div>
                    <div className='landing__mail-link landing__link-outer bottom right'>
                        <a href="mailto:lavrovslava207@gmail.com" onClick={
                            () => {navigator.clipboard.writeText(this.state.textToCopy)}
                        }>MAIL</a>
                    </div>
                    </div>
                </div>
            </div>
        <div className='works' id='works'>
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
        </div>
    </div>
  );
}

export default App;
