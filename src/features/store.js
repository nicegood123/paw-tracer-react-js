import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

//Redux
// import userReducer from './user'

//RTK Query
// import { userApi } from '../services/userAPi'



export const store = configureStore({
    reducer:{
        // user: userReducer,
        // [userApi.reducerPath]: userApi.reducer,
       
    },

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
   
});

setupListeners(store.dispatch);