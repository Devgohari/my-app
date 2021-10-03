import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import About from './components/About'
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode= ()=>{
    if (mode==='red' || mode==='green'|| mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#282a35'
      document.body.style.color='white'
      showAlert('Dark Mode has been enabled','success')
      document.title="TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert('Light Mode has been enabled','success')
      document.title="TextUtils "
    }
  }
  const redTheme=()=>{
    if (mode==='green' || mode==='dark'|| mode==='light') {
      setMode('red')
      showAlert('Red Mode has been enabled','success')
      document.body.style.backgroundColor='rgb(178,34,34)'
      document.body.style.color='white'
      document.title="TextUtils - Red Mode"
      console.log('this is non rted');
    }
    else{
      setMode('light')
      showAlert('Light Mode has been enabled','success')

      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      document.title="TextUtils"
    }
  }
  const greenTheme=()=>{
    if (mode==='red' || mode==='dark'|| mode==='light') {
      setMode('green')
      document.body.style.backgroundColor='green'
      document.body.style.color='white'
      showAlert('Green Mode has been enabled','success')
      console.log('this is non rted');
      document.title="TextUtils Green Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black';
      showAlert('Light Mode has been enabled','success')
      document.title="TextUtils"
    }
  }

  return (
    <>
    <Router>

<Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} redTheme={redTheme} greenTheme={greenTheme} />
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route exact    path="/about">
            <About />
          </Route>
          <Route exact path="/">
            {<TextForm showAlert={showAlert} heading = "Enter ther text to analyze"  />}
          </Route>
        </Switch>
</div>
    </Router>
    <h1>asd</h1>
    </>
  ); 
}

export default App;
