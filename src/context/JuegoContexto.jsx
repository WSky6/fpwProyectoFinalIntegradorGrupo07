import { createContext, useState } from "react";

export const AutorizacionesContext = createContext(null);

export const ProveedorContext = ({ children }) => {

    const [nombre, setNombre] = useState("");
    const [puntajeJuego1, setPuntajeJuego1] = useState(0);
    const [puntajeJuego2, setPuntajeJuego2] = useState(0);

    const guardarNombre = (nuevoNombre) => setNombre(nuevoNombre);
    const guardarPuntajeJuego1 = (puntos) => setPuntajeJuego1(puntos);
    const guardarPuntajeJuego2 = (puntos) => setPuntajeJuego2(puntos);
    
    const reiniciarJuego = () => {
        setNombre("");
        setPuntajeJuego1(0);
        setPuntajeJuego2(0);
    };

    return (
        <AutorizacionesContext.Provider value={{ 
            nombre, 
            puntajeJuego1, 
            puntajeJuego2, 
            guardarNombre, 
            guardarPuntajeJuego1, 
            guardarPuntajeJuego2, 
            reiniciarJuego 
        }}>
            {children}
        </AutorizacionesContext.Provider>
    );
};