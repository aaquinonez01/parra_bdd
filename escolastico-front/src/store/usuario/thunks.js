import {
  deleteUsuario,
  getOneUsuario,
  getUsuarios,
  saveUsuario,
  updateOneUsuario,
} from "../../services/usuarioService";
import {
  deleteUsuarioOne,
  getListUsuario,
  getUsuarioOne,
  loadingUsuario,
  saveNewUsuario,
  updateUsuarioOne,
} from "./usuarioSlice";

export const startNewUsuario = (usuario) => async (dispatch) => {
  try {
    const response = await saveUsuario(usuario);
    dispatch(saveNewUsuario(response));
  } catch (error) {
    console.log(error);
  }
};

export const getListUsuarios = () => async (dispatch) => {
  try {
    loadingUsuario(true);
    const response = await getUsuarios();
    console.log(response);
    if (response === null) {
      dispatch(getListUsuario({ data: [], message: response.message }));
    } else {
      dispatch(getListUsuario({ data: response, message: response.message }));
    }

    loadingUsuario(false);
  } catch (error) {
    console.log(error);
  }
};

export const getUsuario = (id) => async (dispatch) => {
  try {
    const { data } = await getOneUsuario(id);
    dispatch(getUsuarioOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateUsuario = (usuario) => async (dispatch) => {
  try {
    const data = await updateOneUsuario(usuario);
    dispatch(updateUsuarioOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteUsuario = (id) => async (dispatch) => {
  try {
    const data = await deleteUsuario(id);
    dispatch(deleteUsuarioOne(id));
  } catch (error) {
    console.log(error);
  }
};
