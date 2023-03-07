import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
