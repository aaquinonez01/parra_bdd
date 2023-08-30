import { Router } from "express";
import { validarJWT } from "../middleware/validar-jwt.js";
import {
  actualizarNota,
  eliminarNota,
  obtenerNotasPorEstudiante,
  obtenerNotasPorMateriaYProfesor,
  obtenerTresMejoresNotasPorMateria,
  registrarNota,
  verNotas,
} from "../controllers/nota.controller.js";

const router = Router();

router.use(validarJWT);

router.post("/save", registrarNota);

router.get("/list", verNotas);

router.put("/update/:idNota", actualizarNota);

router.delete("/delete/:idNota", eliminarNota);

router.get("/obtenerNotasPorMateriaYProfesor/:nombreMateria/:nombreProfesor", obtenerNotasPorMateriaYProfesor);

router.get("/obtenerNotasPorEstudiante/:nombreEstudiante", obtenerNotasPorEstudiante);

router.get("/obtenerTresMejoresNotasPorMateria/:nombreMateria", obtenerTresMejoresNotasPorMateria);



export default router;
