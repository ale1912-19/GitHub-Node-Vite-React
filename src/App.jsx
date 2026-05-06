import { Routes, Route } from "react-router-dom";

// IMPORTANTE: Verifica que las mayúsculas coincidan con tus archivos
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Tablas from "./pages/Tablas";
import Usuarios from "./pages/Usuarios";
import EditarAlumno from "./pages/EditarAlumno";



function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tablas" element={<Tablas />} />
          <Route path="/editar-alumno" element={<EditarAlumno />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </div>
    </>
  );
} // <--- Asegúrate de que esta llave exista

export default App;