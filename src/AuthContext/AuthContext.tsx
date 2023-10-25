
import React, { useEffect, useRef, useState,createContext,useContext } from "react";

import {Navigation, RouterProvider, Routes } from "react-router-dom";
import {router} from "../index"

import { userReducer, setJwt, setUser } from "../redux/user/reducer"
import { RootState, useAppSelector, useAppDispatch, } from "../redux/store"

interface IAuth{
  name?: string ;
  tokenJWT: string;
}


let AuthInitial = {
  name: '',
  tokenJWT:''
}


export const AuthContext = createContext<IAuth>(AuthInitial);



const App = () => {
  const [auth, setAuth] = useState<IAuth>(AuthInitial);
  let user:IAuth = useAppSelector((state: RootState) => state.persistedReducer).user.user

 // console.log("USER AUTHCONTEXT",user)

  setAuth(user)

  const handleLogin = async () => {

    setAuth(user);
  };

  const handleLogout = () => {
    setAuth(user);
  };

  const value = {
    auth,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };


  return (
    <AuthContext.Provider value={user}>
      <h1>React Router</h1>
      <RouterProvider router={ router}/>
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}