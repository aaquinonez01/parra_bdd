import { createSlice } from "@reduxjs/toolkit";

export const materiaSlice = createSlice({
  name: "materia",
  initialState: {
    materias: [],
    materia: {},
    loading: false,
    message: null,
  },
  reducers: {
    loadingMateria: (state, action) => {
      state.loading = action.payload;
    },
    saveNewMateria: (state, action) => {
      state.materias.push(action.payload);
    },
    getListMateria: (state, action) => {
      state.materias = action.payload.data;
      state.message = action.payload.message;
    },
    getMateriaOne: (state, action) => {
      state.materia = action.payload;
    },
    deleteMateriaOne: (state, action) => {
      state.materias = state.materias.filter(
        (materia) => materia.id_subj !== action.payload
      );
    },
    updateMateriaOne: (state, action) => {
      state.materia = action.payload.data;
      state.materias = state.materias.map((materia) => {
        if (materia.id_subj === action.payload.idMateria) {
          return {
            id_subj: action.payload.idMateria,
            name_subj: action.payload.nombreMateria,
            id_teach: action.payload.profesorId,
          };
        } else {
          return materia;
        }
      });
    },
    emptyMateria: (state, action) => {
      state.materia = {};
    },
    getMAteriaByProfesor: (state, { payload }) => {
      state.materia = state.materias.find(
        (materia) => materia.teacher_id === payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveNewMateria,
  getMateriaOne,
  getListMateria,
  deleteMateriaOne,
  updateMateriaOne,
  emptyMateria,
  loadingMateria,
  getMAteriaByProfesor,
} = materiaSlice.actions;
