import { Router } from "express";
import { validarJWT } from "../middleware/validar-jwt.js";
import {
  actualizarProfesor,
  eliminarProfesor,
  obtenerProfesorPorIdUsuario,
  registrarProfesor,
  verProfesores,
} from "../controllers/profesor.controller.js";

const router = Router();

router.use(validarJWT);

router.post("/save", registrarProfesor);

router.get("/list", verProfesores);

router.put("/update/:idProfesor", actualizarProfesor);

router.delete("/delete/:idProfesor/:UsuarioId", eliminarProfesor);

router.get("/obtenerProfesorPorIdUsuario", obtenerProfesorPorIdUsuario);

export default router;
