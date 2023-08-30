import { createSlice } from "@reduxjs/toolkit";

export const notaSlice = createSlice({
  name: "nota",
  initialState: {
    notas: [],
    nota: {},
    notasEstudiante: [],
    notasProfesor: [],
    loading: false,
    message: null,
  },
  reducers: {
    loadingNota: (state, action) => {
      state.loading = action.payload;
    },
    saveNewNota: (state, action) => {
      state.notas.push(action.payload);
    },
    getListNota: (state, action) => {
      state.notas = action.payload.data;
      state.message = action.payload.message;
    },
    getNotaOne: (state, action) => {
      state.nota = action.payload;
    },
    deleteNotaOne: (state, action) => {
      state.notas = state.notas.filter(
        (nota) => nota.id_note !== action.payload
      );
    },
    updateNotaOne: (state, action) => {
      state.nota = action.payload.data;
      state.notas = state.notas.map((nota) => {
        if (nota.id_note === action.payload.idNota) {
          return {
            id_note: action.payload.idNota,
            name_note: action.payload.nombreNota,
            id_: action.payload.profesorId,
          };
        } else {
          return nota;
        }
      });
    },
    getNotasEstudiante: (state, action) => {
      state.notasEstudiante = action.payload.data;
      state.message = action.payload.message;
    },
    getNotasProfesor: (state, action) => {
      state.notasProfesor = action.payload.data;
      state.message = action.payload.message;
    },
    emptyNota: (state, action) => {
      state.nota = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveNewNota,
  getNotaOne,
  getListNota,
  deleteNotaOne,
  updateNotaOne,
  emptyNota,
  loadingNota,
  getNotasEstudiante,
  getNotasProfesor,
} = notaSlice.actions;
