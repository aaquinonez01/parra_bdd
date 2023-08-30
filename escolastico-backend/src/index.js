import express from "express";
import cors from "cors";
import morgan from "morgan";

import config from "./config.js";
import userRoutes from "./routes/usuario.routes.js";
import subjectRoutes from "./routes/materia.routes.js";
import estudianteRoutes from "./routes/estudiante.routes.js";
import profesorRoutes from "./routes/profesor.routes.js";
import notaRoutes from "./routes/nota.routes.js";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/subjects", subjectRoutes);
app.use("/api/v1/students", estudianteRoutes);
app.use("/api/v1/teachers", profesorRoutes);
app.use("/api/v1/notes", notaRoutes);
app.listen(app.get("port"), () => {
  console.log("Corriendo Programa en el puerto " + app.get("port"));
});
