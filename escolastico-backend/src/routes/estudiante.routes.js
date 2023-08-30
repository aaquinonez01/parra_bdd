import { Router } from "express";
import { validarJWT } from "../middleware/validar-jwt.js";
import {
  actualizarEstudiante,
  eliminarEstudiante,
  obtenerEstudiantePorIdUsuario,
  registrarEstudiante,
  verEstudiantes,
} from "../controllers/estudiante.controller.js";

const router = Router();

router.use(validarJWT);

router.post("/save", registrarEstudiante);

router.get("/list", verEstudiantes);

router.put("/update/:idEstudiante", actualizarEstudiante);

router.delete("/delete/:idEstudiante/:UsuarioId", eliminarEstudiante);

router.get("/obtenerEstudiantePorIdUsuario", obtenerEstudiantePorIdUsuario);


export default router;
