import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import Login from './pages/Login.jsx'

function App = () => {
  const [nombreJugador, setNombreJugador] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Container>
              <Outlet />
            </Container>
          }
        >
          <Route
            path="/"
            element={<Login setNombreJugador={setNombreJugador} />}
          />

          <Route
            path="/juego_1"
            element={
              <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
                ¡Hola {nombreJugador}! Aquí estará el Juego 1.
              </h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App