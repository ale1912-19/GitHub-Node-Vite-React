import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '100px' }}>
        <h1>Bienvenido a mi Portafolio Profesional</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Explora mis proyectos de desarrollo de software y mi trayectoria académica.
        </p>
      </header>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        flexWrap: 'wrap' 
      }}>
        {/* Tarjeta 1: Acerca de mí */}
        <div style={cardStyle}>
          <h3>¿Quién soy?</h3>
          <p>Conoce más sobre mi formación en Informática y mis intereses en ciberseguridad.</p>
          <Link to="/acerca" style={linkButtonStyle}>Ver Perfil</Link>
        </div>

        {/* Tarjeta 2: Tablas/Proyectos */}
        <div style={cardStyle}>
          <h3>Proyectos</h3>
          <p>Revisa la implementación de mis componentes y tablas de datos dinámicas.</p>
          <Link to="/tablas" style={linkButtonStyle}>Ver Tablas</Link>
        </div>
      </div>

      <footer style={{ marginTop: '50px', color: '#888', fontSize: '0.9rem' }}>
        <p>© 2026 - Licenciatura en Informática | Mazatlán, Sinaloa</p>
      </footer>
    </div>
  );
}

// Estilos rápidos para las tarjetas
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '20px',
  width: '250px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff'
};

const linkButtonStyle = {
  display: 'inline-block',
  marginTop: '10px',
  padding: '10px 15px',
  backgroundColor: '#4CAF50',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  fontWeight: 'bold'
};

export default Home;