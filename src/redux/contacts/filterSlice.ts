import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialFilterState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
