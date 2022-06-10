import { IntlProvider } from "react-intl";
import { useContext } from "react";
import './css/index.css';
import { Context } from "./context/ContextProvider";
import WorkCard from "./components/blocks/Works/WorkCard";
import Tools from "./components/blocks/Works/Tools";
import Main from "./components/blocks/Main/Main";
import WorkPlaces from "./components/blocks/WorkPlaces/WorkPlaces";
import Footer from "./components/blocks/Footer/Footer";
import minesweeperRec from './assets/recordings/minesweeper-recording.mp4';
import virtualPianoRec from './assets/recordings/virtual-piano-recording.mp4';
import { LOCALES } from "./assets/languages/locales";
import { MESSAGES } from "./assets/languages/messages";

function App() {
  const { language } = useContext(Context)

  return (
    <IntlProvider
      locale={language}
      defaultLocale={LOCALES.ENGLISH}
      messages={MESSAGES[language]}
      className='App'
    >
      <Main />
      <div className='works' id='works'>
        <WorkCard placingClass={'vertical'} recordingURL={minesweeperRec} key={1} />
        <WorkCard placingClass={'horizontal'} recordingURL={virtualPianoRec} key={2} />
        <WorkCard placingClass={'big'} key={3} />
        <WorkCard placingClass={'vertical'} key={4} />
      </div>
      <Tools />
      <WorkPlaces />
      <Footer />
    </IntlProvider>
  );
}

export default App;
