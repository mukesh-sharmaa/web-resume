import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {

  const [currentState, setCurrentState] = useState("aboutMe");

  function handleSelect(selectedItem){
    setCurrentState(selectedItem);
  }

  return (
    <div>
    <Header name="MUKESH SHARMA" title="SENIOR SOFTWARE TEST ENGINEER" onNavigation={handleSelect}/>
    {currentState === "aboutMe" && <AboutMe onResumeClick = {() =>setCurrentState("resume")}/>}
    {currentState === "resume" && <Resume />}
    </div>
  );
}

export default App;
