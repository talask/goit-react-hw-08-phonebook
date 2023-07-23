import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operation";
import { logOut } from 'redux/auth/operations';


const contactsSlice = createSlice({
        name: 'contacts',
        initialState: {
            items: [],
            isLoading: false,
            error: null
            },

        extraReducers: {
            [fetchContacts.pending](state) {
                state.isLoading = true;
            },  
            [fetchContacts.fulfilled](state, action) {
                state.isLoading = false;    
                state.error = null;      
                state.items = action.payload;
            },
            [fetchContacts.rejected](state, action) {
                state.isLoading = false;      
                state.error = action.payload;
            }, 
            [logOut.fulfilled](state) {
                state.items = [];
                state.error = null;
                state.isLoading = false;
              }, 
        },
    });

    export const contactsReducer = contactsSlice.reducer;
  
