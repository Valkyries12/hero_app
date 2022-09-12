import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getByName } from '../services/heroService';


const initialState = {
  loading: false,
  heroes: [],
  error: ""
};

export const fetchHeroesByName = createAsyncThunk("heroes/fetchHeroesByName", (name) => {
  getByName(name);
});

export const heroeSlice = createSlice({
  name: 'heroes',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchHeroesByName.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchHeroesByName.fulfilled, (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
      state.error = "";
    });
    builder.addCase(fetchHeroesByName.rejected, (state, action) => {
      state.loading = false;
      state.heroes = [];
      state.error = action.error.message;
    })
  }
});



export default heroeSlice.reducer;