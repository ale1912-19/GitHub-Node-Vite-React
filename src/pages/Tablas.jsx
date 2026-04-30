function Tablas() {
  const usuarios = [
    { nombre: 'Carlos', apellido: 'Pérez', edad: 28 },
    { nombre: 'Ana', apellido: 'García', edad: 15 },
    { nombre: 'Luis', apellido: 'Rodríguez', edad: 34 },
  ];

  return (
    <div>
      <h1>Tabla de Usuarios</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u, i) => (
            <tr key={i}>
              <td>{u.nombre}</td>
              <td>{u.apellido}</td>
              <td>{u.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablas;