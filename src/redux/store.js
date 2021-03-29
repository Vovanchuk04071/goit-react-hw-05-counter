import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './Counter/counter-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
