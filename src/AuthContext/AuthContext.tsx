
import React, { useEffect, useRef, useState,createContext,useContext } from "react";

import {Navigation, RouterProvider, Routes } from "react-router-dom";
import {router} from "../index"

import { userReducer, setJwt, setUser } from "../redux/user/reducer"
import { RootState, useAppSelector, useAppDispatch, } from "../redux/store"

interface IAuth{
  name?: string  | undefined;
  tokenJWT: string | undefined;
  //setAuth?: ()=>any;
}

/*
let AuthInitial = {
  name: '',
  tokenJWT:''
}

export const AuthContext = createContext<IAuth>(AuthInitial);

const App = () => {
  let user:IAuth = useAppSelector((state: RootState) => state.persistedReducer).user.user

  const [auth, setAuth] = useState<IAuth>(user);
  setAuth(user)
  const handleLogin = async () => {

    setAuth(user);
  };

  const handleLogout = () => {
    setAuth(user);
  };

  const value = {
    auth:auth,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={auth}>
      <h1>React Router</h1>
      <RouterProvider router={ router}/>
    </AuthContext.Provider>
  );
};*/

export function useAuth() {
  let user:IAuth = useAppSelector((state: RootState) => state.persistedReducer).user.user
  const newAuthContext = createContext<IAuth>(user);

  const newcontext = useContext(newAuthContext);
  return newcontext;
}

/*export function useAuth() {
  const context = useContext(AuthContext);
  
  
  return context;
}*/