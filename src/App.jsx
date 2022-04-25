import './css/index.css';
import ContextProvider from "./context/ContextProvider";
import WorkCard from "./components/WorkCard";
import Tools from "./components/Tools";
import Main from "./components/blocks/main/Main";

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
    </ContextProvider>
  );
}

export default App;
