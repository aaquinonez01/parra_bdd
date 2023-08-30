import { getConnection, sql } from "../db/connection.js";
import { queries } from "../db/querys.js";

// Método para registrar un profesor
export const registrarProfesor = async (req, res) => {
  const {
    nombre,
    contrasena,
    nombreProfesor,
    privilegios,
    apellidoProfesor,
    identificacionProfesor,
    emailProfesor,
    profesionProfesor,
    direccionProfesor,
    telefonoProfesor,
  } = req.body;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("contrasena", sql.VarChar, contrasena)
      .input("nombreProfesor", sql.NVarChar, nombreProfesor)
      .input("privilegios", sql.VarChar, privilegios)
      .input("apellidoProfesor", sql.NVarChar, apellidoProfesor)
      .input("identificacionProfesor", sql.NVarChar, identificacionProfesor)
      .input("emailProfesor", sql.NVarChar, emailProfesor)
      .input("profesionProfesor", sql.NVarChar, profesionProfesor)
      .input("direccionProfesor", sql.NVarChar, direccionProfesor)
      .input("telefonoProfesor", sql.NVarChar, telefonoProfesor)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.registrarProfesor);

    res.json({
      nombre,
      contrasena,
      nombreProfesor,
      privilegios,
      apellidoProfesor,
      identificacionProfesor,
      emailProfesor,
      profesionProfesor,
      direccionProfesor,
      telefonoProfesor,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }
};

// Método para ver la lista de profesores
export const verProfesores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.verProfesores);

    res.json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }
};

// Método para actualizar un profesor
export const actualizarProfesor = async (req, res) => {
  const {
    idProfesor,
    nombreProfesor,
    apellidoProfesor,
    identificacionProfesor,
    emailProfesor,
    profesionProfesor,
    direccionProfesor,
    telefonoProfesor,
  } = req.body;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idProfesor", sql.Int, idProfesor)
      .input("nombreProfesor", sql.NVarChar, nombreProfesor)
      .input("apellidoProfesor", sql.NVarChar, apellidoProfesor)
      .input("identificacionProfesor", sql.NVarChar, identificacionProfesor)
      .input("emailProfesor", sql.NVarChar, emailProfesor)
      .input("profesionProfesor", sql.NVarChar, profesionProfesor)
      .input("direccionProfesor", sql.NVarChar, direccionProfesor)
      .input("telefonoProfesor", sql.NVarChar, telefonoProfesor)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.actualizarProfesor);

    res.json({
      idProfesor,
      nombreProfesor,
      apellidoProfesor,
      identificacionProfesor,
      emailProfesor,
      profesionProfesor,
      direccionProfesor,
      telefonoProfesor,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para eliminar un profesor
export const eliminarProfesor = async (req, res) => {
  const { idProfesor, UsuarioId } = req.params;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idProfesor", sql.Int, idProfesor)
      .input("UsuarioId", sql.Int, UsuarioId)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.eliminarProfesor);

    res.json({ idProfesor });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para obtener un profesor por su ID de usuario
export const obtenerProfesorPorIdUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.idUsuario)
      .query(queries.obtenerProfesorPorIdUsuario);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}