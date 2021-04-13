import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getThread = createAsyncThunk('GET_THREAD', id => {
    return  axios.get(`http://localhost:4000/api/thread/${id}`)
                .then(r => r.data)
                .then(thread => thread)
})

export const cleanThread = createAction('CLEAN_THREAD');

export const createPost = createAsyncThunk('CREATE_POST', (data, { rejectWithValue }) => {
    const {token} = JSON.parse(localStorage.getItem("user"));

    if (!token) return;

    return axios
        .post('http://localhost:4000/api/post', data, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        })
        .then(({ data }) => data)
        .catch(err => rejectWithValue(err.response.data));
});


const threadReducer = createReducer({}, {
    [getThread.fulfilled]: (state, action) => ({...state, ...action.payload}),
    [cleanThread]: (state, action) => ({}),
    [createPost.fulfilled]: (state, action) => ({...state})
});

export default threadReducer;