import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Importaciones de Material UI para la tabla
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const [count, setCount] = useState(0)

  // 1. Creación del Arreglo con más de 5 elementos (2 menores de edad)
  const personas = [
    { nombre: "Ana", apellido: "García", edad: 25 },
    { nombre: "Luis", apellido: "Pérez", edad: 15 }, // Menor de edad
    { nombre: "María", apellido: "Rodríguez", edad: 30 },
    { nombre: "Jorge", apellido: "Sánchez", edad: 12 }, // Menor de edad
    { nombre: "Elena", apellido: "Martínez", edad: 22 },
    { nombre: "Roberto", apellido: "Díaz", edad: 40 }
  ];

  useEffect(() => {
    if (count > 10) {
      alert("¡Límite alcanzado! El valor máximo es 10.");
      setCount(10);
    }
    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        <div>
          <h1>Contador React</h1>
          <h2 style={{ fontSize: '3rem' }}>{count}</h2>
        </div>

        <div className="card">
          <button onClick={() => setCount((c) => c + 1)}>Incrementar (+)</button>
          <button onClick={() => setCount((c) => c - 1)} style={{ marginLeft: '10px' }}>
            Decrementar (-)
          </button>
        </div>

        {/* --- SECCIÓN DE LA TABLA MUI --- */}
        <div style={{ marginTop: '40px', padding: '20px' }}>
          <h2>Lista de Usuarios</h2>
          <TableContainer component={Paper} sx={{ maxWidth: 650, margin: '0 auto' }}>
            <Table aria-label="tabla de personas">
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell><strong>Nombre</strong></TableCell>
                  <TableCell><strong>Apellido</strong></TableCell>
                  <TableCell align="right"><strong>Edad</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* 2. Implementación del .map() dentro del JSX */}
                {personas.map((persona, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {persona.nombre}
                    </TableCell>
                    <TableCell>{persona.apellido}</TableCell>
                    <TableCell align="right">{persona.edad}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <p className="read-the-docs">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </section>
    </>
  )
}

export default App