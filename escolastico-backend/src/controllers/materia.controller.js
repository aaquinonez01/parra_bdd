import { getConnection, sql } from "../db/connection.js";
import { queries } from "../db/querys.js";

// Método para registrar una materia
export const registrarMateria = async (req, res) => {
  const { nombreMateria, profesorId } = req.body;

  try {
    const pool = await getConnection();
    console.log(req.body.idUsuario);
    await pool
      .request()
      .input("nombreMateria", sql.NVarChar, nombreMateria)
      .input("profesorId", sql.Int, profesorId)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.registrarMateria);

    res.json({ nombreMateria, idProfesor });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para ver la lista de materias
export const verMaterias = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.verMaterias);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para actualizar una materia
export const actualizarMateria = async (req, res) => {
  const { nombreMateria, profesorId } = req.body;
  let { idMateria } = req.params;
  //convertir a int idMateria
  idMateria = parseInt(idMateria);
  try {
    const pool = await getConnection();
    console.log(idMateria);
    await pool
      .request()
      .input("idMateria", sql.Int, idMateria)
      .input("nombreMateria", sql.NVarChar, nombreMateria)
      .input("profesorId", sql.Int, profesorId)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.actualizarMateria);

    res.json({ idMateria, nombreMateria, profesorId });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para eliminar una materia
export const eliminarMateria = async (req, res) => {
  const { idMateria } = req.params;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idMateria", sql.Int, idMateria)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.eliminarMateria);

    res.json({ idMateria });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
