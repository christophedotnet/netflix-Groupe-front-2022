import {configureStore} from '@reduxjs/toolkit'
import NetflixReducer from './netflix/netflixReducer'

const store = configureStore({reducer: NetflixReducer})

export default store