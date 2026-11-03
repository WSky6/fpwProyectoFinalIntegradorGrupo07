import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../css/PantallaLoginDiseno.css'

const Login = ({ setNombreJugador }) => {
  const [nombreTemporal, setNombreTemporal] = useState('')
  const navegar = useNavigate()

  const manejarIngreso = (e) => {
    e.preventDefault()

    if (nombreTemporal.trim() !== '') {
      if (setNombreJugador) {
        setNombreJugador(nombreTemporal)
      }

      navegar('/juego-1')
    }
  }

  return (
    <div className="tarjeta-pantalla">
      <h1 className="titulo-granja">¡Bienvenidos a la Granja!</h1>

      <form className="formulario-login" onSubmit={manejarIngreso}>
        <label className="etiqueta-nombre">
          ¿Cómo te llamas?
        </label>

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

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px'
      }}>
        <Link to="/juego-1">
          <button>Ir al Juego 1</button>
        </Link>

        <Link to="/juego-2">
          <button>Ir al Juego 2</button>
        </Link>

        <Link to="/resultados">
          <button>Ir a Resultados</button>
        </Link>
      </div>
    </div>
  )
}

export default Login