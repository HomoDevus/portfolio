import './css/index.css';
import ContextProvider from "./context/ContextProvider";
import WorkCard from "./components/blocks/Works/WorkCard";
import Tools from "./components/blocks/Works/Tools";
import Main from "./components/blocks/Main/Main";
import WorkPlaces from "./components/blocks/WorkPlaces/WorkPlaces";
import Footer from "./components/blocks/Footer/Footer";
import minesweeperRec from './recordings/minesweeper-recording.mp4';
import virtualPianoRec from './recordings/virtual-piano-recording.mp4';

function App() {

  return (
    <ContextProvider className="App">
      <Main/>
      <div className='works' id='works'>
        <WorkCard placingClass={'vertical'} recordingURL={minesweeperRec} key={1} />
        <WorkCard placingClass={'horizontal'} recordingURL={virtualPianoRec} key={2} />
        <WorkCard placingClass={'big'} key={3}/>
        <WorkCard placingClass={'vertical'} key={4}/>
      </div>
      <Tools/>
      <WorkPlaces />
      <Footer />
    </ContextProvider>
  );
}

export default App;
