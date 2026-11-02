import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'

function App() {
  const [nombreJugador, setNombreJugador] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Login setNombreJugador={setNombreJugador} />} 
        />
        <Route 
          path="/juego_1" 
          element={
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>
              ¡Hola {nombreJugador}! Aqui estara el juego 1.
            </h1>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;