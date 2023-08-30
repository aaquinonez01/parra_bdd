import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import decode from "jwt-decode";
import { getEstudianteByUser } from "../services/estudianteService";
import { getProfesorByUser } from "../services/profesorService";
import { login, logout } from "../store/auth/authSlice";
import { getEstudianteOne } from "../store/estudiante/estudianteSlice";
import { getListEstudiantes } from "../store/estudiante/thunks";
import { getListMaterias } from "../store/materia/thunks";
import { getListNotas } from "../store/nota/thunks";
import { getProfesorOne } from "../store/profesor/profesorSlice";
import { getListProfesores } from "../store/profesor/thunks";
import { getListUsuarios } from "../store/usuario/thunks";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("x-token");
    if (token) {
      const { name_user, privileges } = decode(token);
      getEstudianteByUser().then((response) => {
        if (response.length !== 0) {
          dispatch(getEstudianteOne(response[0]));
        } else {
          getProfesorByUser().then((response) => {
            if (response.length !== 0) {
              dispatch(getProfesorOne(response[0]));
            }
          });
        }
      });

      dispatch(login({ nombre: name_user, privileges }));
      if (privileges[1] === "1") {
        console.log("entro");
        dispatch(getListUsuarios());
      }
      if (privileges[5] === "1") {
        dispatch(getListEstudiantes());
      }
      if (privileges[9] === "1") {
        dispatch(getListProfesores());
      }
      if (privileges[13] === "1") {
        dispatch(getListMaterias());
      }
      if (privileges[17] === "1") {
        dispatch(getListNotas());
      }
    } else {
      dispatch(logout());
    }
  }, []);

  return status;
};
