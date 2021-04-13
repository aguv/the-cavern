import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk('GET_CATEGORIES', () => {
    return axios.get('http://localhost:4000/api/category')
        .then(r => r.data)
        .then(categories => categories)
})


const categoriesReducer = createReducer([], {
    [getCategories.fulfilled]: (state, action) => action.payload
});

export default categoriesReducer;