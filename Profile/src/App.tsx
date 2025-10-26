import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
// Compoonenets
import Home from "./Pages/Home/Index"
import Ripples from "./Pages/Ripples/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/Ripples" element={<Ripples/>} />
        </Routes>
    </>
  )
}

export default App
