import React from "react";
import { Route, Routes } from "react-router-dom";
import { UsuarioFormPage } from "../../pages/admin/usuario/UsuarioFormPage";
import { UsuarioPage } from "../../pages/admin/usuario/UsuarioPage";

export const UsuarioRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<UsuarioPage />}
      />
      <Route
        path="/editar/:id"
        element={<UsuarioFormPage />}
      />
      <Route
        path="/crear"
        element={<UsuarioFormPage />}
      />
    </Routes>
  );
};
