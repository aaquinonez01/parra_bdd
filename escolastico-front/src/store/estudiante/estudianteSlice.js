import { createSlice } from '@reduxjs/toolkit';

export const estudianteSlice = createSlice({
    name: 'estudiante',
    initialState: {
        estudiantes: [],
        estudiante: {},
        loading: false,
        message: null,

    },
    reducers: {
        loadingEstudiante: (state, action) => {
            state.loading = action.payload;
        },
        saveNewEstudiante: (state, action) => {
            state.estudiantes.push(action.payload);
        },
        getListEstudiante: (state, action) => {
            state.estudiantes = action.payload.data;
            state.message = action.payload.message;
        },
        getEstudianteOne: (state, action) => {
            state.estudiante = action.payload;
        },
        deleteEstudianteOne: (state, action) => {
            state.estudiantes = state.estudiantes.filter(estudiante => estudiante.id_est !== action.payload);
        },
        updateEstudianteOne: (state, action) => {
            state.estudiante = action.payload.data;
            state.estudiantes = state.estudiantes.map(estudiante => {
                if (estudiante.id_est === action.payload.data.idEstudiante) {
                    return action.payload.data;
                } else {
                    return estudiante;
                }
            });
        },
        emptyEstudiante: (state, action) => {
            state.estudiante = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewEstudiante, getEstudianteOne, getListEstudiante, deleteEstudianteOne, updateEstudianteOne, emptyEstudiante, loadingEstudiante } = estudianteSlice.actions;