/*import {configureStore} from '@reduxjs/toolkit'
import NetflixReducer from './netflix/netflixReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth']
  }

const store = configureStore({reducer: NetflixReducer})

export default store
const persistor = persistStore(store);

export { store, persistor };*/

import { configureStore } from '@reduxjs/toolkit';
//import dataSlice from './dataSlice';
import NetflixReducer from './netflix/netflixReducer'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, NetflixReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };