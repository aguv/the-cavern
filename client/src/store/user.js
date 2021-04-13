import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerRequest = createAsyncThunk('REGISTER_REQUEST', (data, { rejectWithValue }) => {
    return axios
        .post('http://localhost:4000/api/auth/signup', data)
        .then(({ data }) => data)
        .catch(err => rejectWithValue(err.response.data));
});

export const loginRequest = createAsyncThunk('LOGIN_REQUEST', (data, { rejectWithValue }) => {
    return axios
        .post('http://localhost:4000/api/auth/signin', data)
        .then(({ data }) => {
            localStorage.setItem("user", JSON.stringify({token: data.token}));
            return data
        })
        .catch(err => rejectWithValue(err.response.data));
});

export const tryPersistUser = createAsyncThunk('TRY_PERSIST_USER', (data, { rejectWithValue }) => {
    const {token} = JSON.parse(localStorage.getItem("user"));

    if (!token) return;

    return axios
        .get('http://localhost:4000/api/user/userbytoken', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        })
        .then(({ data }) => data)
        .catch(err => rejectWithValue(err.response.data));
});

export const logOut = createAction('LOG_OUT');


const userReducer = createReducer({}, {
    [registerRequest.fulfilled]: (state, action) => ({ ...state, ...action.payload }),
    [registerRequest.rejected]: (state, action) => ({ ...state }),
    [loginRequest.fulfilled]: (state, action) => ({ ...state, ...action.payload }),
    [loginRequest.rejected]: (state, action) => ({ ...state }),
    [tryPersistUser.fulfilled]: (state, action) => ({ ...state, ...action.payload }),
    [logOut]: (state, action) => {
        localStorage.clear();
        return {}
    }
});

export default userReducer;