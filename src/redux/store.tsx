//import { createStore } from 'redux';

import {configureStore} from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import {inputMessageSlice} from "./message_input/inputMessageSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { 
    persistStore,
    persistReducer,
    PersistConfig
} from 'redux-persist'
import { apiSlice } from './api/apiSlice'
import logger from 'redux-logger'

import {FLUSH,REHYDRATE,PAUSE,
          PERSIST,PURGE,REGISTER,
  } from 'redux-persist'
import  {rootReducer} from "./root-reducer"
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const RecentUsersPersistConfig:PersistConfig<any> = {
  key: 'root',
  version:1,
  storage,//storage:storageSession,
}

const persistedReducer = persistReducer(RecentUsersPersistConfig, rootReducer)

export const store = configureStore({
    reducer:{
      persistedReducer,
      [apiSlice.reducerPath]:apiSlice.reducer,
      input_message_size:inputMessageSlice
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //serializableCheck:false
      serializableCheck: {
        /*ignoredActions: 
          [FLUSH, REHYDRATE,
           PAUSE, PERSIST, 
           PURGE, REGISTER],*/
      },
    }).concat(logger,apiSlice.middleware),
});
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default {store,persistor};

