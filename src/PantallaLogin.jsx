import { useState } from 'react'
import '../css/PantallaLoginDiseno.css'

export default function PantallaLogin({ setNombreJugador, setPantallaActiva }) {
  const [nombreTemporal, setNombreTemporal] = useState('')

  const manejarIngreso = () => {
    if (nombreTemporal.trim() !== '') {
      setNombreJugador(nombreTemporal)
      setPantallaActiva(2)
    }
  }

  return (
    <div className="tarjeta-pantalla">
      <h1 className="titulo-granja">¡Bienvenidos a la Granja!</h1>
      <div className="formulario-login">
        <label className="etiqueta-nombre">¿Cómo te llamas?</label>
        <input 
          type="text" 
          className="entrada-nombre"
          value={nombreTemporal}
          onChange={(evento) => setNombreTemporal(evento.target.value)}
        />
        <button 
          className="boton-comenzar" 
          onClick={manejarIngreso}
        >
          Comenzar
        </button>
      </div>
    </div>
  )
}