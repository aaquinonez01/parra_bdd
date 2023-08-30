import { Router } from "express";
import { actualizarUsuario, eliminarUsuario, getUsuarios, loginUsuario, postUsuario } from "../controllers/usuario.controller.js";
import { validarJWT } from "../middleware/validar-jwt.js";
const routes = Router();
routes.post("/login", loginUsuario);
routes.get("/list",validarJWT, getUsuarios);
routes.post("/save",validarJWT, postUsuario);
routes.put("/update",validarJWT, actualizarUsuario);
routes.delete("/delete/:UsuarioId",validarJWT, eliminarUsuario);

export default routes;
