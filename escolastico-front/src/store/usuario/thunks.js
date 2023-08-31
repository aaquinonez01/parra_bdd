import {
  deleteUsuario,
  getAuditoria,
  getOneUsuario,
  getUsuarios,
  saveUsuario,
  updateOneUsuario,
} from "../../services/usuarioService";
import {
  deleteUsuarioOne,
  getListAuditoria,
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

export const startUpdateUsuario = (id, usuario) => async (dispatch) => {
  try {
    const data = await updateOneUsuario(id, usuario);
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

export const startGetAuditoria = () => async (dispatch) => {
  try {
    const data = await getAuditoria();
    dispatch(getListAuditoria({ data }));
  } catch (error) {
    console.log(error);
  }
};
