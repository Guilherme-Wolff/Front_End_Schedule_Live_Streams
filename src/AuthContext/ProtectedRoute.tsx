import React, { useEffect, useRef, useState, createContext, useContext } from "react";

import {
  //Routes,
  //Route,
  //NavLink,
  Navigate,
  //useNavigate,
} from 'react-router-dom';
//import { apiSlice } from '../redux/api/apiSlice'
import { useLocation } from 'react-router-dom';


import { RootState, useAppSelector, useAppDispatch, } from "../redux/store"

import { useAuth } from "./AuthContext"

interface ProtectedRouteProps {
  authNecessary: boolean;
  children: any;
  redirectTo?: string;
}



export const ProtectedRoute = ({ authNecessary, children, redirectTo }: ProtectedRouteProps) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/signup';
  //let user = useAppSelector((state: RootState) => state.persistedReducer).user.user
  const { tokenJWT } = useAuth()


  /*if (authNecessary === false && !tokenJWT?.length) {
    console.log("INDO PARA LOGIN 1")
    return children;
  }*/
  if (
    isLoginPage && Number(tokenJWT?.length) == 0 ||
    isRegisterPage && Number(tokenJWT?.length) == 0
  ) {
    console.log("INDO PARA LOGIN 1")
    return children;
    //return <Navigate to="/" replace />;
  }
  else if (
    isLoginPage && Number(tokenJWT?.length) > 0 ||
    isRegisterPage && Number(tokenJWT?.length) > 0
  ) {
    return <Navigate to="/" replace />;
  }
  else {
    return children;
  }
};


