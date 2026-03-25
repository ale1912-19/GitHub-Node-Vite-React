import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // Lógica de monitoreo de cambios
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
          {/* Mostramos el valor actual */}
          <h2 style={{ fontSize: '3rem' }}>{count}</h2>
        </div>

        <div className="card">
          <button onClick={() => setCount((c) => c + 1)}>
            Incrementar (+)
          </button>

          <button onClick={() => setCount((c) => c - 1)} style={{ marginLeft: '10px' }}>
            Decrementar (-)
          </button>
        </div>

        <p className="read-the-docs">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </section>

      {/* El resto de tu código de secciones se mantiene igual... */}
    </>
  )
}

export default App