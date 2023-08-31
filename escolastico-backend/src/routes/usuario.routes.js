import { Router } from "express";
import { actualizarUsuario, eliminarUsuario, getUsuarios, loginUsuario, obtenerAuditorias, postUsuario } from "../controllers/usuario.controller.js";
import { validarJWT } from "../middleware/validar-jwt.js";
const routes = Router();
routes.post("/login", loginUsuario);
routes.get("/list", validarJWT, getUsuarios);
routes.post("/save", validarJWT, postUsuario);
routes.put("/update/:usuarioId", validarJWT, actualizarUsuario);
routes.delete("/delete/:UsuarioId", validarJWT, eliminarUsuario);
routes.get("/obtenerAuditorias", validarJWT, obtenerAuditorias);

export default routes;
