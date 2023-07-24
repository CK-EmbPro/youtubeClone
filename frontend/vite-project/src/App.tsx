import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'
import Search from './pages/Search.js'
import Watch from './pages/Watch.js'


const App = () => {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/watch/:id' element={<Watch/>} />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </BrowserRouter>
   
  )
}

export default App