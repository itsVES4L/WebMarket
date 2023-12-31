import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {authLoginReducer,authVerifyReducer} from '../features/users/authUserSlice';
import logger from 'redux-logger';
import { getProductsListReducer } from '../features/products/getProductsListSlice';


const store = configureStore({
  reducer: {
    products: '',
    authLogin:authLoginReducer ,
    authVerify:authVerifyReducer ,
    productList:getProductsListReducer,

   
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
});

export default store;
