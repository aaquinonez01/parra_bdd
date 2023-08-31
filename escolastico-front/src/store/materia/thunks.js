import {
  deleteMateria,
  getMaterias,
  getOneMateria,
  saveMateria,
  updateOneMateria,
} from "../../services/materiaService";
import {
  deleteMateriaOne,
  getListMateria,
  getMateriaOne,
  loadingMateria,
  saveNewMateria,
  updateMateriaOne,
} from "./materiaSlice";

export const startNewMateria = (materia) => async (dispatch) => {
  try {
    loadingMateria(true);
    const response = await saveMateria(materia);
    dispatch(saveNewMateria(response));
  } catch (error) {
    console.log(error);
  } finally {
    loadingMateria(false);
  }
};

export const getListMaterias = () => async (dispatch) => {
  try {
    loadingMateria(true);
    const response = await getMaterias();
    if (response === null) {
      dispatch(getListMateria({ data: [], message: response.message }));
    } else {
      dispatch(getListMateria({ data: response, message: response.message }));
    }

    loadingMateria(false);
  } catch (error) {
    console.log(error);
  }
};

export const getMateria = (id) => async (dispatch) => {
  try {
    const { data } = await getOneMateria(id);
    dispatch(getMateriaOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateMateria = (materia) => async (dispatch) => {
  try {
    const data = await updateOneMateria(materia);
    dispatch(updateMateriaOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteMateria = (id) => async (dispatch) => {
  try {
    const data = await deleteMateria(id);
    dispatch(deleteMateriaOne(id));
  } catch (error) {
    console.log(error);
  }
};
