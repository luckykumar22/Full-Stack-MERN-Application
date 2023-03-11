import React from 'react'
import { BrowserRouter ,Router, Route, Routes} from 'react-router-dom'
import {Login, Signup, Netflix } from './pages/index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={Login} />
        <Route exact path='/signup' element={Signup} />
        <Route exact path='/netflix' element={Netflix} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
