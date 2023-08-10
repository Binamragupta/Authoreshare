import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from 'react'

function App() {
    const [mode,setmode]=useState('light')
    const [alert,setalert]=useState(null);

    const showalert=(message,type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
    }
    const togglemode=()=>{
      if(mode==='light')
      {
        setmode('dark')
        document.body.style.backgroundColor='rgb(5 22 46)'
       showalert("dark mode has been enabled","success")
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='white'
        showalert("dark mode has been disabled","success")
      }
    }
  return (
    <>
    {/*  keep router at outside inside which is routes(switch in older version) inside which is route  where u keep the element of component based on the respective path
    '/'-represent home */}
    <Router basename="/Authoreshare">
    <Navbar title="Authoreshare" aboutText="about us" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-4">
    <Routes>
          <Route exact path="/Authoreshare" element={<TextForm heading="Enter a text to analyze below" mode={mode} showalert={showalert}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          {/* <TextForm heading="Enter a text to analyze below" mode={mode} showalert={showalert}/> */}
          
      
        </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App;
