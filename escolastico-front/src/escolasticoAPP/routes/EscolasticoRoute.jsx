import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { EscolasticoLayout } from "../layout/EscolasticoLayout";
import { HomePage } from "../pages/HomePage";
import { MisNotas } from "../pages/estudiante/MisNotas";
import { NotaMateriaFormPage } from "../pages/profesor/NotaMateriaFormPage";
import { NotaMateriaPage } from "../pages/profesor/NotaMateriaPage";
import { EstudianteRoute } from "./admin/EstudianteRoute";
import { MateriaRoute } from "./admin/MateriaRoute";
import { NotaRoute } from "./admin/NotaRoute";
import { ProfesorRoute } from "./admin/ProfesorRoute";
import { UsuarioRoute } from "./admin/UsuarioRoute";
export const EscolasticoRoute = () => {
  const { estudiante } = useSelector((state) => state.estudiante);
  const { profesor } = useSelector((state) => state.profesor);
  return (
    <EscolasticoLayout>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        {estudiante?.id_est && (
          <Route
            path="/mis-notas"
            element={<MisNotas />}
          />
        )}
        {profesor?.id_teach && (
          <>
            <Route
              path="/notas-materia"
              element={<NotaMateriaPage />}
            />
            <Route
              path="/notas-materia/crear"
              element={<NotaMateriaFormPage />}
            />
            <Route
              path="/notas-materia/editar/:id"
              element={<NotaMateriaFormPage />}
            />
          </>
        )}
        <Route
          path="/materias/*"
          element={<MateriaRoute />}
        />
        <Route
          path="/notas/*"
          element={<NotaRoute />}
        />
        <Route
          path="/profesores/*"
          element={<ProfesorRoute />}
        />
        <Route
          path="/estudiantes/*"
          element={<EstudianteRoute />}
        />
        <Route
          path="/usuarios/*"
          element={<UsuarioRoute />}
        />
      </Routes>
    </EscolasticoLayout>
  );
};
