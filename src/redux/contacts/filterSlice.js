import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
    filter: '',
  };

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        
        updateFilter(state, action) {
            console.log(state.filter);
            state.filter = action.payload;
            console.log(state.filter);
        },
    },
});

export const { updateFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

