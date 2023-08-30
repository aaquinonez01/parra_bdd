import { Route, Routes } from "react-router-dom";
import { NotaFormPage } from "../../pages/admin/nota/NotaFormPage";
import { NotaPage } from "../../pages/admin/nota/NotaPage";
export const NotaRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<NotaPage />}
      />
      <Route
        path="/editar/:id"
        element={<NotaFormPage />}
      />
      <Route
        path="/crear"
        element={<NotaFormPage />}
      />
    </Routes>
  );
};
