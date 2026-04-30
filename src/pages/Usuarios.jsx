import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const nombresLatinos = [
    "Juan Pérez",
    "María López",
    "Carlos Ramírez",
    "Ana Torres",
    "Luis Hernández",
    "Sofía García",
    "Miguel Castro",
    "Fernanda Ruiz",
    "José Martínez",
    "Valeria Flores"
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Sitio Web</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {usuarios.map((usuario, index) => (
            <TableRow key={usuario.id}>
              <TableCell>{nombresLatinos[index]}</TableCell>
              <TableCell>{usuario.email}</TableCell>
              <TableCell>{usuario.phone}</TableCell>
              <TableCell>{usuario.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default Usuarios;