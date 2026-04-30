import foto from "../assets/YO.jpeg";
import { useAlumnoContext } from "../context/AlumnoContext";

function Acerca() {
  const { alumno } = useAlumnoContext();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Acerca de mí</h1>

      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Carrera:</strong> {alumno.carrera}</p>
      <p><strong>Grupo:</strong> {alumno.grupo}</p>
      <p><strong>Semestre:</strong> {alumno.semestre}</p>

      <p>
        Soy una estudiante de la Licenciatura en Informática con un gran interés en el desarrollo web 
        y las tecnologías modernas. Me gusta aprender constantemente nuevas herramientas que me permitan 
        mejorar mis habilidades y crear aplicaciones funcionales y atractivas. Disfruto trabajar en equipo 
        y enfrentar retos que me ayuden a crecer tanto personal como profesionalmente. Además, me interesa 
        el área de la ciberseguridad y el desarrollo de soluciones tecnológicas eficientes.
      </p>

      <h3>Habilidades</h3>
      <ul>
        <li>Trabajo en equipo</li>
        <li>Resolución de problemas</li>
        <li>Comunicación efectiva</li>
        <li>Empatía</li>
      </ul>

      <img
        src={foto}
        alt="Foto de perfil"
        width="150"
        style={{
          borderRadius: "50%",
          marginTop: "15px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}
      />
    </div>
  );
}

export default Acerca;