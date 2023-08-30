import { createSlice } from '@reduxjs/toolkit';

export const profesorSlice = createSlice({
    name: 'profesor',
    initialState: {
        profesores: [],
        profesor: {},
        loading: false,
        message: null,

    },
    reducers: {
        loadingProfesor: (state, action) => {
            state.loading = action.payload;
        },
        saveNewProfesor: (state, action) => {
            state.profesores.push(action.payload);
        },
        getListProfesor: (state, action) => {
            state.profesores = action.payload.data;
            state.message = action.payload.message;
        },
        getProfesorOne: (state, action) => {
            state.profesor = action.payload;
        },
        deleteProfesorOne: (state, action) => {
            state.profesores = state.profesores.filter(profesor => profesor.id_teach !== action.payload);
        },
        updateProfesorOne: (state, action) => {
            state.profesor = action.payload.data;
            state.profesores = state.profesores.map(profesor => {
                if (profesor.id === action.payload.data.id) {
                    return action.payload.data;
                } else {
                    return profesor;
                }
            });
        },
        emptyProfesor: (state, action) => {
            state.profesor = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewProfesor, getProfesorOne, getListProfesor, deleteProfesorOne, updateProfesorOne, emptyProfesor, loadingProfesor } = profesorSlice.actions;