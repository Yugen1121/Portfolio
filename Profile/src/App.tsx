import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
// Compoonenets
import Home from "./Pages/Home"
import Ripples from "./Pages/Ripples/index.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:"flex", justifyContent: "center", flexDirection: "column", alignItems:"center", width: "100vw"}}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/Ripples" element={<Ripples/>} />
        </Routes>
      
    </div>
    </>
  )
}

export default App
