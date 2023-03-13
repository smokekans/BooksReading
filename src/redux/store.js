import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
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
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { bookReducer } from './book/bookSlice';
import { planningReducer } from './planning/planningSlice';
import { userReducer } from './user/userSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  //   whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const rootRersistConfig = {
  key: 'root',
  storage,
  // whilelist: ['']
};

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  book: bookReducer,
  planning: planningReducer,
  user: userReducer,
});

const rootPersistedReducer = persistReducer(rootRersistConfig, rootReducer);

export const store = configureStore({
  reducer: rootPersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  logger,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
