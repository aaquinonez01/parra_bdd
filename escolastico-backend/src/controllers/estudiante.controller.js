import { getConnection, sql } from "../db/connection.js";
import { queries } from "../db/querys.js";

// Método para registrar un estudiante
export const registrarEstudiante = async (req, res) => {
  const {
    nombre,
    contrasena,
    privilegios,
    nombreEstudiante,
    apellidoEstudiante,
    identificacionEstudiante,
    emailEstudiante,
    fechaNacimientoEstudiante,
    direccionEstudiante,
    telefonoEstudiante,
  } = req.body;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("contrasena", sql.VarChar, contrasena)
      .input("privilegios", sql.VarChar, privilegios)
      .input("nombreEstudiante", sql.NVarChar, nombreEstudiante)
      .input("apellidoEstudiante", sql.NVarChar, apellidoEstudiante)
      .input("identificacionEstudiante", sql.NVarChar, identificacionEstudiante)
      .input("emailEstudiante", sql.NVarChar, emailEstudiante)
      .input("fechaNacimientoEstudiante", sql.Date, fechaNacimientoEstudiante)
      .input("direccionEstudiante", sql.NVarChar, direccionEstudiante)
      .input("telefonoEstudiante", sql.NVarChar, telefonoEstudiante)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.registrarEstudiante);

    res.json({
      nombre,
      contrasena,
      privilegios,
      nombreEstudiante,
      apellidoEstudiante,
      identificacionEstudiante,
      emailEstudiante,
      fechaNacimientoEstudiante,
      direccionEstudiante,
      telefonoEstudiante,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para ver la lista de estudiantes
export const verEstudiantes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.verEstudiantes);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para actualizar un estudiante
export const actualizarEstudiante = async (req, res) => {
  const {
    idEstudiante,
    nombreEstudiante,
    apellidoEstudiante,
    identificacionEstudiante,
    emailEstudiante,
    fechaNacimientoEstudiante,
    direccionEstudiante,
    telefonoEstudiante,
  } = req.body;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idEstudiante", sql.Int, idEstudiante)
      .input("nombreEstudiante", sql.NVarChar, nombreEstudiante)
      .input("apellidoEstudiante", sql.NVarChar, apellidoEstudiante)
      .input("identificacionEstudiante", sql.NVarChar, identificacionEstudiante)
      .input("emailEstudiante", sql.NVarChar, emailEstudiante)
      .input("fechaNacimientoEstudiante", sql.Date, fechaNacimientoEstudiante)
      .input("direccionEstudiante", sql.NVarChar, direccionEstudiante)
      .input("telefonoEstudiante", sql.NVarChar, telefonoEstudiante)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.actualizarEstudiante);

    res.json({
      idEstudiante,
      nombreEstudiante,
      apellidoEstudiante,
      identificacionEstudiante,
      emailEstudiante,
      fechaNacimientoEstudiante,
      direccionEstudiante,
      telefonoEstudiante,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para eliminar un estudiante
export const eliminarEstudiante = async (req, res) => {
  const { idEstudiante, UsuarioId } = req.params;
  console.log(idEstudiante, UsuarioId)
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idEstudiante", sql.Int, idEstudiante)
      .input("UsuarioId", sql.Int, UsuarioId)
      .input("idUsuario", sql.Int, req.body.idUsuario) // Supongo que estás utilizando un sistema de autenticación y tienes el ID del usuario en req.user.id
      .query(queries.eliminarEstudiante);

    res.json({ idEstudiante });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para obtener un estudiante por su id
export const obtenerEstudiantePorIdUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.idUsuario)
      .query(queries.obtenerEstudiantePorIdUsuario);
      console.log(result.recordset)
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};