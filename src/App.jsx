import './css/index.css';
import ContextProvider from "./context/ContextProvider";
import WorkCard from "./components/blocks/Works/WorkCard";
import Tools from "./components/blocks/Works/Tools";
import Main from "./components/blocks/Main/Main";
import WorkPlaces from "./components/blocks/WorkPlaces/WorkPlaces";

function App() {

  return (
    <ContextProvider className="App">
      <Main/>
      <div className='works' id='works'>
        <WorkCard placingClass={'vertical'}/>
        <WorkCard placingClass={'horizontal'}/>
        <WorkCard placingClass={'big'}/>
        <WorkCard placingClass={'vertical'}/>
      </div>
      <Tools/>
      <WorkPlaces />
    </ContextProvider>
  );
}

export default App;
