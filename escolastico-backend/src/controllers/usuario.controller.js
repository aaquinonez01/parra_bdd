import { getConnection, sql } from "../db/connection.js"; // Assuming you have exported the queries object from your database module
import { queries } from "../db/querys.js";

import jwt from "jsonwebtoken";

export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().input
    ("idUsuario", sql.Int, req.body.idUsuario)
    .query(queries.verUsuarios);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postUsuario = async (req, res) => {
  const { nombre, contrasena, privilegios, idUsuario } = req.body;
  try {
    const pool = await getConnection();
    
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("contrasena", sql.VarChar, contrasena)
      .input("privilegios", sql.VarChar, privilegios)
      .input("idUsuario", sql.Int, idUsuario)
      .query(queries.registrarUsuario);
    res.json({ name_user, password_user, privileges });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const actualizarUsuario = async (req, res) => {
  const { usuarioId, idUsuario, nombre, contrasena, privilegios } = req.body;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("UsuarioId", sql.Int, usuarioId)
      .input("nombre", sql.VarChar, nombre)
      .input("contrasena", sql.VarChar, contrasena)
      .input("privilegios", sql.VarChar, privilegios)
      .input("idUsuario", sql.Int, idUsuario)
      .query(queries.actualizarUsuario);

    res.json({ usuarioId, nombre, contrasena, privilegios });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Método para eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  const { idUsuario } = req.body;
  const { UsuarioId } = req.params;
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("UsuarioId", sql.Int, UsuarioId)
      .input("idUsuario", sql.Int, idUsuario)
      .query(queries.eliminarUsuario);

    res.json({ idUsuario });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const loginUsuario = async (req, res) => {
  const { nombre, contrasena } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("nombre", sql.NVarChar, nombre)
      .input("contrasena", sql.NVarChar, contrasena)
      .query(queries.loginUser);

    if (result.recordset.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }
    let informacion ={};
    const user = result.recordset[0];
    //Obtener el estudiante o profesor de la base de datos en base al id del usuario que se acaba de loguear
    const result2 = await pool
      .request()
      .input("idUsuario", sql.Int, user.id_user)
      .query(queries.obtenerEstudiantePorIdUsuario);
    const result3 = await pool
      .request()
      .input("idUsuario", sql.Int, user.id_user)
      .query(queries.obtenerProfesorPorIdUsuario);
    if (result2.recordset.length === 1) {
      informacion = result2.recordset[0];
    }
    if (result3.recordset.length === 1) {
      informacion = result3.recordset[0];
    }

      
    // Generar un token utilizando jsonwebtoken
    const token = jwt.sign({ idUsuario: user.id_user, privileges:user.privileges, name_user:user.name_user }, "tu-secreto-seguro", {
      expiresIn: "72h", // Puedes ajustar la expiración según tus necesidades
    });

    res.status(200).json({token, informacion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
