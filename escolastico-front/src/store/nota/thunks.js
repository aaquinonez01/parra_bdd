import {
  deleteNota,
  getNotas,
  getNotasByEstudiante,
  getNotasByProfesor,
  getOneNota,
  saveNota,
  updateOneNota,
} from "../../services/notaService";
import {
  deleteNotaOne,
  getListNota,
  getNotaOne,
  getNotasEstudiante,
  getNotasProfesor,
  loadingNota,
  saveNewNota,
  updateNotaOne,
} from "./notaSlice";

export const startNewNota = (nota) => async (dispatch) => {
  try {
    loadingNota(true);
    const response = await saveNota(nota);
    dispatch(saveNewNota(response));
  } catch (error) {
    console.log(error);
  } finally {
    loadingNota(false);
  }
};

export const getListNotas = () => async (dispatch) => {
  try {
    loadingNota(true);
    const response = await getNotas();
    if (response === null) {
      dispatch(getListNota({ data: [], message: response.message }));
    } else {
      dispatch(getListNota({ data: response, message: response.message }));
    }

    loadingNota(false);
  } catch (error) {
    console.log(error);
  }
};

export const getNota = (id) => async (dispatch) => {
  try {
    const { data } = await getOneNota(id);
    dispatch(getNotaOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateNota = (nota) => async (dispatch) => {
  try {
    const data = await updateOneNota(nota);
    dispatch(updateNotaOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteNota = (id) => async (dispatch) => {
  try {
    const data = await deleteNota(id);
    dispatch(deleteNotaOne(id));
  } catch (error) {
    console.log(error);
  }
};

export const startGetNotasByEstudiante =
  (nombreEstudiante) => async (dispatch) => {
    try {
      loadingNota(true);
      const response = await getNotasByEstudiante(nombreEstudiante);
      if (response === null) {
        dispatch(getNotasEstudiante({ data: [], message: response.message }));
      } else {
        dispatch(
          getNotasEstudiante({ data: response, message: response.message })
        );
      }

      loadingNota(false);
    } catch (error) {
      console.log(error);
    }
  };

export const startGetNotasByProfesor =
  (nombreProfesor, nombreMateria) => async (dispatch) => {
    try {
      loadingNota(true);
      const response = await getNotasByProfesor(nombreProfesor, nombreMateria);
      if (response === null) {
        dispatch(getNotasProfesor({ data: [], message: response.message }));
      } else {
        dispatch(
          getNotasProfesor({ data: response, message: response.message })
        );
      }

      loadingNota(false);
    } catch (error) {
      console.log(error);
    }
  };
