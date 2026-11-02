import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { routes } from "./routes/routes";

// Importa tu proveedor de contexto (ajusta la ruta si tu archivo se llama AutorizacionesContext o JuegoContext)
import { ProveedorContext } from './context/JuegoContexto';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProveedorContext>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ProveedorContext>
  </StrictMode>
);