import { Route, Routes } from "react-router-dom";
import { ProfesorFormPage } from "../../pages/admin/profesor/ProfesorFormPage";
import { ProfesorPage } from "../../pages/admin/profesor/ProfesorPage";

export const ProfesorRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<ProfesorPage />}
      />
      <Route
        path="/editar/:id"
        element={<ProfesorFormPage />}
      />
    </Routes>
  );
};
