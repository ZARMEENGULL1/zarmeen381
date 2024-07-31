
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
 const toggleMode =()=>{
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor = '#515355'
  }else{
     setMode("light")
     document.body.style.backgroundColor = 'white'
  }
  }
  return (
    <>
    <Navbar title={"ZarmeenGull"} mode={mode} toggleMode={toggleMode}/>
    <TextForm heading={"Enter the text to analyze"} mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
