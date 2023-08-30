import { getConnection, sql } from "../db/connection.js";
import { queries } from "../db/querys.js";

// Método para registrar una nota
export const registrarNota = async (req, res) => {
  const {
    primerParcial,
    segundoParcial,
    tercerParcial,
    idEstudiante,
    idMateria,
  } = req.body;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("primerParcial", sql.Float, primerParcial)
      .input("segundoParcial", sql.Float, segundoParcial)
      .input("tercerParcial", sql.Float, tercerParcial)
      .input("idEstudiante", sql.Int, idEstudiante)
      .input("idMateria", sql.Int, idMateria)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.registrarNota);

    res.json({
      primerParcial,
      segundoParcial,
      tercerParcial,
      idEstudiante,
      idMateria,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para ver la lista de notas
export const verNotas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.verNotas);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para actualizar una nota
export const actualizarNota = async (req, res) => {
  const {
    idNota,
    primerParcial,
    segundoParcial,
    tercerParcial,
    idEstudiante,
    idMateria,
  } = req.body;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idNota", sql.Int, idNota)
      .input("primerParcial", sql.Float, primerParcial)
      .input("segundoParcial", sql.Float, segundoParcial)
      .input("tercerParcial", sql.Float, tercerParcial)
      .input("idEstudiante", sql.Int, idEstudiante)
      .input("idMateria", sql.Int, idMateria)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.actualizarNota);

    res.json({
      idNota,
      primerParcial,
      segundoParcial,
      tercerParcial,
      idEstudiante,
      idMateria,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para eliminar una nota
export const eliminarNota = async (req, res) => {
  const { idNota } = req.params;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idNota", sql.Int, idNota)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.eliminarNota);

    res.json({ idNota });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para obtener las notas por materia y profesor
export const obtenerNotasPorMateriaYProfesor = async (req, res) => {
  const { nombreMateria, nombreProfesor } = req.params;

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("nombreMateria", sql.VarChar, nombreMateria)
      .input("nombreProfesor", sql.VarChar, nombreProfesor)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.obtenerNotasPorMateriaYProfesor);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para obtener las notas por estudiante
export const obtenerNotasPorEstudiante = async (req, res) => {
  const { nombreEstudiante } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("nombreEstudiante", sql.VarChar, nombreEstudiante)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.obtenerNotasPorEstudiante);
    res.json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }
};

// Método para obtener las tres mejores notas por materia
export const obtenerTresMejoresNotasPorMateria = async (req, res) => {
  const { nombreMateria } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("nombreMateria", sql.VarChar, nombreMateria)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.obtenerTresMejoresNotasPorMateria);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};