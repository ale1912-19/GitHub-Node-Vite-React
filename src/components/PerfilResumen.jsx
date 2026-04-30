import { useAlumnoContext } from "../context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h2>Resumen del perfil</h2>
      <p>{alumno.nombre} - {alumno.carrera}</p>
      <p>Grupo: {alumno.grupo} | Semestre: {alumno.semestre}</p>
    </div>
  );
}

export default PerfilResumen;