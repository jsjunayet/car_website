import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import authReducer from './features/auth/authSlice';
import productReducer from './features/product/productSlice';
import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig ={
    key:"userToken",
    storage
}
const persistedReducer = persistReducer(persistConfig, authReducer)
const persistedProductReducer = persistReducer(persistConfig, productReducer)

export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        auth: persistedReducer,
        Product: persistedProductReducer 

    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          }}).concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)