import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const preloadedState = {};

export const store = configureStore({ 
  reducer: rootReducer,
  preloadedState
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
