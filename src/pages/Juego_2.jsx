import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutorizacionesContext } from '../context/JuegoContexto';
import { Box, Typography, Button, Container, Grid, Paper, Alert } from '@mui/material';

// Rondas exactas según la consigna del profesor
const rondasJuego2 = [
  {
    id: 1,
    opciones: [
      { nombre: "Perro", esIntruso: false, emoji: "🐶" },
      { nombre: "Gato", esIntruso: false, emoji: "🐱" },
      { nombre: "León", esIntruso: true, emoji: "🦁" }
    ]
  },
  {
    id: 2,
    opciones: [
      { nombre: "Vaca", esIntruso: false, emoji: "🐮" },
      { nombre: "Oveja", esIntruso: false, emoji: "🐑" },
      { nombre: "Cocodrilo", esIntruso: true, emoji: "🐊" }
    ]
  },
  {
    id: 3,
    opciones: [
      { nombre: "Gallina", esIntruso: false, emoji: "🐔" },
      { nombre: "Chancho", esIntruso: false, emoji: "🐷" },
      { nombre: "Elefante", esIntruso: true, emoji: "🐘" }
    ]
  },
  {
    id: 4,
    opciones: [
      { nombre: "Caballo", esIntruso: false, emoji: "🐴" },
      { nombre: "Vaca", esIntruso: false, emoji: "🐮" },
      { nombre: "Tiburón", esIntruso: true, emoji: "🦈" }
    ]
  },
  {
    id: 5,
    opciones: [
      { nombre: "Oveja", esIntruso: false, emoji: "🐑" },
      { nombre: "Perro", esIntruso: false, emoji: "🐶" },
      { nombre: "Pingüino", esIntruso: true, emoji: "🐧" }
    ]
  }
];

const Juego2 = () => {
  const { nombre, guardarPuntajeJuego2 } = useContext(AutorizacionesContext);
  const navigate = useNavigate();

  const [rondaActual, setRondaActual] = useState(0);
  const [puntosLocal, setPuntosLocal] = useState(0);
  const [mensajeFeedback, setMensajeFeedback] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const ronda = rondasJuego2[rondaActual];

  const seleccionarOpcion = (opcion, index) => {
    if (opcionSeleccionada !== null) return; // Evita doble clic

    setOpcionSeleccionada(index);

    let nuevosPuntos = puntosLocal;
    if (opcion.esIntruso) {
      nuevosPuntos += 10;
      setPuntosLocal(nuevosPuntos);
      setMensajeFeedback("¡Sacaste al intruso! La granja está a salvo. El niño gana 10 puntos.");
    } else {
      setMensajeFeedback("Incorrecto. Ese sí es de la granja[cite: 4].");
    }

    // Espera 1.5 segundos para pasar a la siguiente ronda o finalizar
    setTimeout(() => {
      setMensajeFeedback("");
      setOpcionSeleccionada(null);

      if (rondaActual + 1 < rondasJuego2.length) {
        setRondaActual(rondaActual + 1);
      } else {
        guardarPuntajeJuego2(nuevosPuntos);
        navigate('/resultados');
      }
    }, 1500);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, backgroundColor: '#fffde7' }}>
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          Juego 2: El Intruso de la Granja 🔍[cite: 4]
        </Typography>

        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          ¡Un animal que NO es de la granja se metió! Tenés que encontrarlo y sacarlo[cite: 4].
        </Typography>

        <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
          Jugador: <b>{nombre || "Pequeño Granjero"}</b> | Ronda {rondaActual + 1} de {rondasJuego2.length}
        </Typography>

        <Typography variant="h5" sx={{ my: 3, color: '#333', fontWeight: 'bold' }}>
          Haz clic en el animal que NO pertenece a la granja[cite: 4]
        </Typography>

        <Grid container spacing={3} justifyContent="center" sx={{ my: 2 }}>
          {ronda.opciones.map((opcion, index) => {
            // Estilos dinámicos para acierto (verde) o error (rojo) como en el ejemplo
            let backgroundColor = '#81c784'; // Verde por defecto para animales de granja
            if (opcion.esIntruso && opcionSeleccionada !== null) {
              backgroundColor = '#e57373'; // Rojo si es el intruso revelado
            }

            return (
              <Grid item xs={12} sm={4} key={index}>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={opcionSeleccionada !== null}
                  onClick={() => seleccionarOpcion(opcion, index)}
                  sx={{
                    height: 160,
                    flexDirection: 'column',
                    fontSize: '1.2rem',
                    backgroundColor: opcionSeleccionada === index 
                      ? (opcion.esIntruso ? '#e57373' : '#81c784') 
                      : '#a5d6a7',
                    color: '#000',
                    borderRadius: '50px',
                    boxShadow: 3,
                    '&:hover': { backgroundColor: '#81c784' }
                  }}
                >
                  <span style={{ fontSize: '3.5rem', marginBottom: '8px' }}>{opcion.emoji}</span>
                  <b>{opcion.nombre}</b>
                  {opcionSeleccionada !== null && opcion.esIntruso && (
                    <Typography variant="caption" sx={{ color: '#b71c1c', fontWeight: 'bold', mt: 1 }}>
                      ¡INTRUSO![cite: 4]
                    </Typography>
                  )}
                </Button>
              </Grid>
            );
          })}
        </Grid>

        {mensajeFeedback && (
          <Box sx={{ mt: 3 }}>
            <Alert 
              severity={mensajeFeedback.includes("salvo") ? "success" : "error"}
              sx={{ fontSize: '1.1rem', justifyContent: 'center' }}
            >
              {mensajeFeedback}
            </Alert>
          </Box>
        )}

        <Typography variant="h6" sx={{ mt: 4, color: '#2e7d32' }}>
          Puntos acumulados en este juego: {puntosLocal}
        </Typography>
      </Paper>
    </Container>
  );
  
}

export default Juego2;