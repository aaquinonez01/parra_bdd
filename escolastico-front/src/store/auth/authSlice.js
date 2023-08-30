import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        privileges: null,
        nombre: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.privileges = payload.privileges;
            state.nombre = payload.nombre;
            state.errorMessage = null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated';// 'checking', 'not-authenticated', 'authenticated'
            state.privileges = null;
            state.nombre = null;
            state.errorMessage = payload?.errorMessage;
        },
       
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;