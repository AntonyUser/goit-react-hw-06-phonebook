import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactSlice';
import { filtersReducer } from '../redux/filtersSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
