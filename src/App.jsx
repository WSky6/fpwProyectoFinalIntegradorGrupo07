import { useState } from 'react'
import PantallaLogin from './PantallaLogin.jsx'

function App() {
  const [pantallaActiva, setPantallaActiva] = useState(1)
  const [nombreJugador, setNombreJugador] = useState('')

  return (
    <div>
      {pantallaActiva === 1 && (
        <PantallaLogin 
          setNombreJugador={setNombreJugador} 
          setPantallaActiva={setPantallaActiva} 
        />
      )}
      
      {pantallaActiva === 2 && (
        <h1 style={{textAlign: 'center', marginTop: '50px'}}>
          ¡Hola {nombreJugador}! Aquí irá el Juego 1
        </h1>
      )}
    </div>
  )
}

export default App;