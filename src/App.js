// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

import { Routes, Route } from "react-router-dom";




function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type: type,
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }

  const [mode, setMode] = useState('light');

  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-secondary')
  // }


  const toogleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark Mode has been enabled", "success")
    }
    else {
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
    <Routes>
      <Route exact path="/" element={<><Navbar dinesh="Dinesh's Tool Kit" mode = {mode} toggleMode={toogleMode}/><Alert alert={alert}/><TextForm heading="Enter the text below to analyze" mode = {mode} showAlert={showAlert} /></>}>
      </Route>
      <Route exact path="/about" element={<><Navbar dinesh="Dinesh's Tool Kit" mode = {mode} toggleMode={toogleMode}/><Alert alert={alert}/><About/></>}></Route>
    </Routes>
      {/* <Navbar dinesh="Dinesh's Tool Kit" mode = {mode} toggleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze" mode = {mode} showAlert={showAlert} />
      <About/>
      </div> */}
    </>
  );
}

export default App;
