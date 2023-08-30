import {
  loginWithNameAndPassword,
  logoutWithNamePassword,
} from "../../services/authService";
import {
  emptyEstudiante,
  getEstudianteOne,
} from "../estudiante/estudianteSlice";
import { emptyProfesor, getProfesorOne } from "../profesor/profesorSlice";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startLoginWithNamePassword = ({ nombre, contrasena }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithNameAndPassword({ nombre, contrasena });
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
    if (result.estudiante?.id_est) {
      dispatch(getEstudianteOne(result.estudiante));
    } else if (result.profesor?.id_teach) {
      dispatch(getProfesorOne(result.profesor));
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutWithNamePassword();
    dispatch(logout());
    dispatch(emptyProfesor());
    dispatch(emptyEstudiante());
  };
};
