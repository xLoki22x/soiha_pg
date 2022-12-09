import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home'
import { Outlet, Link } from "react-router-dom";
import 'animate.css';
import Navbarr from './sharing/navbar'

function App() {


  return (
    <div className="App">
<Navbarr></Navbarr>
    </div>
  )
}

export default App
