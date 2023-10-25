import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import {
  //Routes,
  //Route,
  //NavLink,
  Navigate,
  //useNavigate,
} from 'react-router-dom';
//import { apiSlice } from '../redux/api/apiSlice'

//import { RootState, useAppSelector, useAppDispatch, } from "../redux/store"

import { useAuth } from "./AuthContext"

interface ProtectedRouteProps {
  authNecessary: boolean;
  children: any;
}

export const ProtectedRoute = ({ authNecessary, children }: ProtectedRouteProps) => {
  //let user = useAppSelector((state: RootState) => state.persistedReducer).user.user
  const {tokenJWT} = useAuth()

  if (authNecessary === false && !tokenJWT.length) {
    return children;
  }
  //const {data} = useGetUsersQuery('/gettoken')
  else if (authNecessary === true && tokenJWT.length) {
    return children;
    /*if (!tokenJWT.length || tokenJWT.length === 0) {
      return <Navigate to="/login" replace />;
    }*/

  }
  /*else if (authNecessary === true && tokenJWT.length === 0) {
    return <Navigate to="/login" replace />;
  }*/
};


