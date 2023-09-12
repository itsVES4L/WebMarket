import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {authLoginReducer,authVerifyReducer} from '../features/users/authUserSlice';
import logger from 'redux-logger';


const store = configureStore({
  reducer: {
    products: '',
    authLogin:authLoginReducer ,
    authVerify:authVerifyReducer ,

   
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
});

export default store;
