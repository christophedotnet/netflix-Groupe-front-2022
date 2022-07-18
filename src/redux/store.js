import {configureStore} from '@reduxjs/toolkit'
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