import { Link } from "react-router-dom";

function Navbar() {
  // Estilo simple para el contenedor de navegación
  const navStyle = {
    padding: "1rem",
    backgroundColor: "#2c3e50",
    color: "white",
    display: "flex",
    gap: "15px",
    alignItems: "center"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Inicio</Link>
      <span>|</span>
      <Link to="/acerca" style={linkStyle}>Acerca de mí</Link>
      <span>|</span>
      <Link to="/contacto" style={linkStyle}>Contacto</Link>
      <span>|</span>
      <Link to="/tablas" style={linkStyle}>Tablas</Link>
      <span>|</span>
      <Link to="/usuarios" style={linkStyle}>Usuarios</Link>
    </nav>
  );
}

export default Navbar;