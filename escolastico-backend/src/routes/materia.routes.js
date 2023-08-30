import { Router } from "express";
import { validarJWT } from "../middleware/validar-jwt.js";
import {
  actualizarMateria,
  eliminarMateria,
  registrarMateria,
  verMaterias,
} from "../controllers/materia.controller.js";

const router = Router();

router.use(validarJWT);

router.post("/save", registrarMateria);

router.get("/list", verMaterias);

router.put("/update/:idMateria", actualizarMateria);

router.delete("/delete/:idMateria", eliminarMateria);

export default router;
