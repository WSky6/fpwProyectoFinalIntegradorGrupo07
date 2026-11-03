import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Pantalla de Login (Temporal)</h1>
      <p>Aquí ingresará el niño su nombre.</p>
      {/* Enlaces rápidos para probar las páginas mientras tanto */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <Link to="/juego-1"><button>Ir al Juego 1</button></Link>
        <Link to="/juego-2"><button>Ir al Juego 2</button></Link>
        <Link to="/resultados"><button>Ir a Resultados</button></Link>
      </div>
    </div>
  );
}

export default Login;