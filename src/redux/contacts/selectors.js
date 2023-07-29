export const getContacts = state => { 
    console.log(state);
    return state.contacts.items
};
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter.filter;