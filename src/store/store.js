// import {configureStore} from '@reduxjs/toolkit'

// const store = configureStore({
//     reducer:{
        
//     }
// })


// export default store

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer, // Add the auth slice reducer
    },
});

export default store;