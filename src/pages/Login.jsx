import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/PantallaLoginDiseno.css'

function Login({ setNombreJugador }) {
  const [nombreTemporal, setNombreTemporal] = useState('')
  const navegar = useNavigate()

  const manejarIngreso = (e) => {
    e.preventDefault()
    
    if (nombreTemporal.trim() !== '') {
      if (setNombreJugador) setNombreJugador(nombreTemporal)
      navegar("/juego_1") 
    }
  }

  return (
    <div className="tarjeta-pantalla">
      <h1 className="titulo-granja">¡Bienvenidos a la Granja!</h1>
      <form className="formulario-login" onSubmit={manejarIngreso}>
        <label className="etiqueta-nombre">¿Cómo te llamas?</label>
        <input 
          type="text" 
          className="entrada-nombre"
          value={nombreTemporal}
          onChange={(evento) => setNombreTemporal(evento.target.value)}
        />
        <button 
          type="submit"
          className="boton-comenzar" 
        >
          Comenzar
        </button>
      </form>
    </div>
  )
}

export default Login;