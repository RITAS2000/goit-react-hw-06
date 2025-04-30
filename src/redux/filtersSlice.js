import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'filters',
  initialState: {
    enter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.enter = action.payload.toLowerCase();
    },
  },
});
export const selectFilters = (state) => state.filters.enter;
export const { changeFilter } = slice.actions;
export default slice.reducer;
