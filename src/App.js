import React, { createContext, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import LogOut from './Components/LogOut';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import ErrorPage from './Components/ErrorPage';
import './App.css'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {initialState, reducer} from '../src/reducer/UseReducer'
import Alert from './Components/Alert';
import Test from './Components/Test';


const axios = require('axios');

// context api
export const UserContext = createContext();



const App = (props) => {
 

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("app" + state)

  const [alert, setAlert] =  useState(null);
 const  showAlert = (message, type )=>{
    setAlert({
      type: type,
    message: message})
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
 
  return (
    <>

    <Router>
    <UserContext.Provider value ={{state, dispatch}}>
    <Navbar/>
    <Alert alert = {alert} />
      <Routes>

        <Route path="/"  element = { <Home/>} ></Route>
        <Route path="/about" element = {  <About/>} ></Route>
        <Route path="/test" element = {  <Test/>} ></Route>
        <Route  path="/login" element = { <Login showAlert={showAlert}/>}  ></Route>
        <Route path="/signup" element = { <Signup showAlert={showAlert}/>} ></Route>
        <Route path="/contact" element = { <Contact showAlert={showAlert} />} ></Route>
        <Route path="/logout" element = { <LogOut showAlert={showAlert}/>} ></Route>
      
        <Route path="*" element = { <ErrorPage/>} ></Route>
      </Routes>
      </UserContext.Provider>
    </Router>


  
   
    </>
  )
}


export default App;
