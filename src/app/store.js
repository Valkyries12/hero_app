import { configureStore } from '@reduxjs/toolkit';
import heroeSlice from '../features/heroeSlice';


const store = configureStore({
  reducer: {
    heroes: heroeSlice,
  }
});

export default store;