import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno, setAlumno] = useState({
    nombre: "Juan Pérez",
    carrera: "Ingeniería en Sistemas",
    grupo: "5-1",
    semestre: "5to",
  });

  const actualizarAlumno = (nuevosDatos) => {
    setAlumno(nuevosDatos);
  };

  return (
    <AlumnoContext.Provider value={{ alumno, actualizarAlumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumnoContext() {
  return useContext(AlumnoContext);
}