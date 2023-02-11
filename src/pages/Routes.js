import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontend from './Frontend';

export default function CoustomRoutes() {
  return (
    <BrowserRouter>

      
      <Routes>
        <Route path='/*' element= {<Frontend/>}/>
      </Routes>

    </BrowserRouter>
  )
}
