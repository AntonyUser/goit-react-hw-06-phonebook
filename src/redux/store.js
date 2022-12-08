import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactSlice';
import { filtersReducer } from '../redux/filtersSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistContactConfig = {
  key: 'contacts',
  storage,
};

const persistedContactReducer = persistReducer(
  persistContactConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
