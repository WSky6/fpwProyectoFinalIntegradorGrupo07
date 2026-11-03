import axios from "axios";

export const obtenerJuego1 = async () => {
  try {
    const respuesta = await axios.get("/data/juego1.json");

    return respuesta.data;

  } catch (error) {
    console.error("Error al cargar el Juego 1:", error);
    throw error;
  }
};