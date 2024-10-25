import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/Authslice';
import orderReducer from './slices/orderSlice';
export const store=configureStore({
    reducer:{
        authUser:authReducer,
        order: orderReducer,
    },
});
