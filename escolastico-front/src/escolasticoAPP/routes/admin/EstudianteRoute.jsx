import React from "react";
import { Route, Routes } from "react-router-dom";
import { EstudianteFormPage } from "../../pages/admin/estudiante/EstudianteFormPage";
import { EstudiantePage } from "../../pages/admin/estudiante/EstudiantePage";

export const EstudianteRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<EstudiantePage />}
      />
      <Route
        path="/editar/:id"
        element={<EstudianteFormPage />}
      />
    </Routes>
  );
};
