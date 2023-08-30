import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { estudianteSlice } from './estudiante/estudianteSlice';
import { materiaSlice } from './materia/materiaSlice';
import { notaSlice } from './nota/notaSlice';
import { profesorSlice } from './profesor/profesorSlice';
import { usuarioSlice } from './usuario/usuarioSlice';
export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      usuario: usuarioSlice.reducer,
      estudiante: estudianteSlice.reducer,
      profesor: profesorSlice.reducer,
      materia: materiaSlice.reducer,
      nota: notaSlice.reducer,
    },
  });