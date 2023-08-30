import {
  deleteProfesor,
  getOneProfesor,
  getProfesores,
  saveProfesor,
  updateOneProfesor,
} from "../../services/profesorService";
import {
  deleteProfesorOne,
  getListProfesor,
  getProfesorOne,
  loadingProfesor,
  saveNewProfesor,
  updateProfesorOne,
} from "./profesorSlice";
  
  export const startNewProfesor = (profesor) => async (dispatch) => {
    try {
      loadingProfesor(true);
      const response = await saveProfesor(profesor);
      dispatch(saveNewProfesor(response));
    } catch (error) {
      console.log(error);
    } finally {
      loadingProfesor(false);
    }
  };
  
  export const getListProfesores = () => async (dispatch) => {
    try {
        loadingProfesor(true);
      const response = await getProfesores();
      if (response === null) {
        dispatch(getListProfesor({ data: [], message: response.message }));
      } else {
        dispatch(
          getListProfesor({ data: response, message: response.message })
        );
      }

        loadingProfesor(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getProfesor = (id) => async (dispatch) => {
    try {
      const { data } = await getOneProfesor(id);
      console.log(data);
      dispatch(getProfesorOne(data));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const startUpdateProfesor = (profesor) => async (dispatch) => {
    try {
      const data = await updateOneProfesor(profesor);
      console.log(data);
      dispatch(updateProfesorOne(data));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const startDeleteProfesor = (id, idUsuario) => async (dispatch) => {
    try {
      const data = await deleteProfesor(id, idUsuario);
      console.log(data);
      dispatch(deleteProfesorOne(id));
    } catch (error) {
      console.log(error);
    }
  };