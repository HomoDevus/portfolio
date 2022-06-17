import { IntlProvider } from 'react-intl';
import { useContext } from 'react';
import './css/index.css';
import { Context } from './context/ContextProvider';
import WorkCard from './components/blocks/Works/WorkCard';
import Tools from './components/blocks/Works/Tools';
import Main from './components/blocks/Main/Main';
import WorkPlaces from './components/blocks/WorkPlaces/WorkPlaces';
import Footer from './components/blocks/Footer/Footer';
import minesweeperRec from './assets/recordings/minesweeper-recording.mp4';
import virtualPianoRec from './assets/recordings/virtual-piano-recording.mp4';
import wordCounterRec from './assets/recordings/word-counter-recording.mp4';
import { LOCALES } from './assets/languages/locales';
import { MESSAGES } from './assets/languages/messages';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const { language } = useContext(Context)

  return (
    <ErrorBoundary>
      <IntlProvider
        locale={language}
        defaultLocale={LOCALES.ENGLISH}
        messages={MESSAGES[language]}
        className="App"
      >
        <Main />
        <div className="works" id="works">
          <WorkCard
            placingClass={'vertical'}
            title="Minesweeper"
            recordingURL={minesweeperRec}
            key={1}
            projectURL="https://itiseternity.github.io/Minesweeper_Hyperskill/"
          />
          <WorkCard
            placingClass={'horizontal'}
            recordingURL={virtualPianoRec}
            key={2}
            projectURL="https://itiseternity.github.io/VirtualPiano_Hyperskill/"
          />
          <WorkCard
            placingClass={'big'}
            key={3}
            recordingURL={wordCounterRec}
            projectURL="https://smart-word-counter.glitch.me/"
          />
        </div>
        <Tools />
        <WorkPlaces />
        <Footer />
      </IntlProvider>
    </ErrorBoundary>
  );
}

export default App;
