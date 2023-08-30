//Importar configuracion de axios
import { axiosInstance } from "./config";
//jwt-decode
import decode from "jwt-decode";

//Peticion de logueo de usuario
export const loginWithNameAndPassword = async (user) => {
  try {
    const { data } = await axiosInstance.post("/users/login", user);
    localStorage.setItem("x-token", data.token);
    //decodificar el token
    const decoded = decode(data.token);
    if (data?.informacion?.id_est) {
      return {
        estudiante: data.informacion,
        ok: true,
        privileges: decoded.privileges,
        nombre: decoded.name_user,
      };
    } else if (data?.informacion?.id_teach) {
      return {
        profesor: data.informacion,
        ok: true,
        privileges: decoded.privileges,
        nombre: decoded.name_user,
      };
    } else {
      return {
        ok: true,
        privileges: decoded.privileges,
        nombre: decoded.name_user,
      };
    }
  } catch (error) {
    console.log(error.response.message);
    return {
      ok: false,
      errorMessage: error.response.data.message,
    };
  }
};

export const logoutWithNamePassword = async () => {
  try {
    localStorage.removeItem("x-token");
  } catch (error) {
    console.log(error);
  }
};
