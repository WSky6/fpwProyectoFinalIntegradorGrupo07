import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
};

export default App;