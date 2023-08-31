import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    usuarios: [],
    usuario: {},
    auditorias: [],
    loading: false,
    message: null,
  },
  reducers: {
    loadingUsuario: (state, action) => {
      state.loading = action.payload;
    },
    saveNewUsuario: (state, action) => {
      state.usuarios.push(action.payload);
    },
    getListAuditoria: (state, action) => {
      state.auditorias = action.payload.data;
    },

    getListUsuario: (state, action) => {
      state.usuarios = action.payload.data;
      state.message = action.payload.message;
    },
    getUsuarioOne: (state, action) => {
      state.usuario = action.payload;
    },
    deleteUsuarioOne: (state, action) => {
      state.usuarios = state.usuarios.filter(
        (usuario) => usuario.id_user !== action.payload
      );
    },
    updateUsuarioOne: (state, action) => {
      state.usuario = action.payload.data;
      state.usuarios = state.usuarios.map((usuario) => {
        if (usuario.id_user === action.payload.id_user) {
          return action.payload.data;
        } else {
          return usuario;
        }
      });
    },
    emptyUsuario: (state, action) => {
      state.usuario = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveNewUsuario,
  getUsuarioOne,
  getListUsuario,
  deleteUsuarioOne,
  updateUsuarioOne,
  emptyUsuario,
  getListAuditoria,
  loadingUsuario,
} = usuarioSlice.actions;
