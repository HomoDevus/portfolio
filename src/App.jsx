import { useIntl } from 'react-intl';
import './css/index.min.css';
import WorkCard from './components/blocks/Works/WorkCard';
import Tools from './components/blocks/Works/Tools';
import Main from './components/blocks/Main/Main';
import WorkPlaces from './components/blocks/WorkPlaces/WorkPlaces';
import Footer from './components/blocks/Footer/Footer';
import minesweeperRec from './assets/recordings/minesweeper-recording.mp4';
import virtualPianoRec from './assets/recordings/virtual-piano-recording.mp4';
import wordCounterRec from './assets/recordings/word-counter-recording.mp4';

function App() {
  const Intl = useIntl()

  return (
    <>
      <Main />
      <div className="works" id="works">
        <WorkCard
          title={Intl.formatMessage({ id: 'project_minesweeper' })}
          description={Intl.formatMessage({ id: 'project_minesweeper_description' })}
          placingClass={'vertical'}
          recordingURL={minesweeperRec}
          key={1}
          projectURL="https://itiseternity.github.io/Minesweeper_Hyperskill/"
        />
        <WorkCard
          title={Intl.formatMessage({ id: 'project_piano' })}
          description={Intl.formatMessage({ id: 'project_piano_description' })}
          placingClass={'horizontal'}
          recordingURL={virtualPianoRec}
          key={2}
          projectURL="https://itiseternity.github.io/VirtualPiano_Hyperskill/"
        />
        <WorkCard
          title={Intl.formatMessage({id: 'project_word_counter'})}
          description={Intl.formatMessage({id: 'project_word_counter_description'})}
          placingClass={'big'}
          key={3}
          recordingURL={wordCounterRec}
          projectURL="https://smart-word-counter.glitch.me/"
        />
      </div>
      <Tools />
      <WorkPlaces />
      <Footer />
    </>
  );
}

export default App;
