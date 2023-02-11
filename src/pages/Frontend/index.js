import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Frontend/Home';
import About from '../../pages/Frontend/About';
import Header from './components/Header';
import Footer from './components/Footer';


export default function index() {
  return (

    <>
    <Header/>
    <main>

    <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
    </Routes>
    </main>
        <Footer/>
    </>
  )
}
