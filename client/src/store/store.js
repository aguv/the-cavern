import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import userReducer from './user';
import categoriesReducer from './categories';
import categoryReducer from './selectedCategory';
import threadReducer from './selectedThread';

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        categories: categoriesReducer,
        selectedCategory: categoryReducer,
        selectedThread: threadReducer
    }
})

export default store;