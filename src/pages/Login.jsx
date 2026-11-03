import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
<<<<<<< Updated upstream
import '../../css/PantallaLoginDiseno.css'
=======
import '../../css/PantallaLoginDiseno.css';
>>>>>>> Stashed changes

const Login = ({ setNombreJugador }) => {
  const [nombreTemporal, setNombreTemporal] = useState('')
  const navegar = useNavigate()

  const manejarIngreso = (e) => {
    e.preventDefault()
    
    if (nombreTemporal.trim() !== '') {
      if (setNombreJugador) setNombreJugador(nombreTemporal)
<<<<<<< Updated upstream
      navegar("/juego_1") 
=======
      // Le avisa al Router que cambie la URL
      navegar("/juego-1") 
>>>>>>> Stashed changes
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