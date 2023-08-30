import { Route, Routes } from "react-router-dom";
import { MateriaFormPage } from "../../pages/admin/materia/MateriaFormPage";
import { MateriaPage } from "../../pages/admin/materia/MateriaPage";

export const MateriaRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MateriaPage />}
      />
      <Route
        path="/editar/:id"
        element={<MateriaFormPage />}
      />
      <Route
        path="/crear"
        element={<MateriaFormPage />}
      />
    </Routes>
  );
};
