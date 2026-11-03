import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AutorizacionesContext } from '../context/JuegoContexto';

import '../../css/PantallaLoginDiseno.css';

const Login = () => {
  const [nombreTemporal, setNombreTemporal] = useState('');

  const navegar = useNavigate();

  const { guardarNombre } = useContext(
    AutorizacionesContext
  );

  const manejarIngreso = (e) => {
    e.preventDefault();

    const nombre = nombreTemporal.trim();

    if (nombre !== '') {
      guardarNombre(nombre);

      navegar('/juego-1');
    }
  };

  return (
    <div className="tarjeta-pantalla">

      <h1 className="titulo-granja">
        ¡Bienvenidos a la Granja!
      </h1>

      <form
        className="formulario-login"
        onSubmit={manejarIngreso}
      >
        <label
          htmlFor="nombre"
          className="etiqueta-nombre"
        >
          ¿Cómo te llamas?
        </label>

        <input
          id="nombre"
          type="text"
          className="entrada-nombre"
          value={nombreTemporal}
          onChange={(evento) =>
            setNombreTemporal(evento.target.value)
          }
          placeholder="Escribí tu nombre"
        />

        <button
          type="submit"
          className="boton-comenzar"
        >
          Comenzar
        </button>

      </form>

    </div>
  );
};

export default Login;