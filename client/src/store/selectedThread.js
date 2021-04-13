import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getThread = createAsyncThunk('GET_THREAD', id => {
    return  axios.get(`http://localhost:4000/api/thread/${id}`)
                .then(r => r.data)
                .then(thread => thread)
})

const threadReducer = createReducer({}, {
    [getThread.fulfilled]: (state, action) => ({...state, ...action.payload})
});

export default threadReducer;