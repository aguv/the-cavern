import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategory = createAsyncThunk('GET_CATEGORY', id => {
    return  axios.get(`http://localhost:4000/api/category/${id}`)
                .then(r => r.data)
                .then(category => category)
})

export const createThread = createAsyncThunk('CREATE_THREAD', (data, { rejectWithValue }) => {
    const { token } = JSON.parse(localStorage.getItem("user"));

    return axios.post('http://localhost:4000/api/thread', data, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'x-access-token',
            'x-access-token': token
        }
    })
        .then(r => r.data)
        .then(data => console.log(data))
        .catch(err => rejectWithValue(err.response.data));
});

const categoryReducer = createReducer({}, {
    [getCategory.fulfilled]: (state, action) => ({...state, ...action.payload})
});

export default categoryReducer;