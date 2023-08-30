import {
  deleteEstudiante,
  getEstudiantes,
  getOneEstudiante,
  saveEstudiante,
  updateOneEstudiante,
} from "../../services/estudianteService";
import {
  deleteEstudianteOne,
  getEstudianteOne,
  getListEstudiante,
  loadingEstudiante,
  saveNewEstudiante,
  updateEstudianteOne,
} from "./estudianteSlice";
  
  export const startNewEstudiante = (estudiante) => async (dispatch) => {
    try {
      loadingEstudiante(true);
      const response = await saveEstudiante(estudiante);
      dispatch(saveNewEstudiante(response));
    } catch (error) {
      console.log(error);
    } finally {
      loadingEstudiante(false);
    }
  };
  
  export const getListEstudiantes = () => async (dispatch) => {
    try {
        loadingEstudiante(true);
      const response = await getEstudiantes();
      if (response === null) {
        dispatch(getListEstudiante({ data: [], message: response.message }));
      } else {
        dispatch(
          getListEstudiante({ data: response, message: response.message })
        );
      }

        loadingEstudiante(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getEstudiante = (id) => async (dispatch) => {
    try {
      const { data } = await getOneEstudiante(id);
      dispatch(getEstudianteOne(data));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const startUpdateEstudiante = (estudiante) => async (dispatch) => {
    try {
      const data = await updateOneEstudiante(estudiante);
      dispatch(updateEstudianteOne(data));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const startDeleteEstudiante = (id, idUsuario) => async (dispatch) => {
    try {
      const data = await deleteEstudiante(id, idUsuario);
      dispatch(deleteEstudianteOne(id));
    } catch (error) {
      console.log(error);
    }
  };