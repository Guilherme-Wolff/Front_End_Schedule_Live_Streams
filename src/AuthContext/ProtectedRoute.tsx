import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { apiSlice } from '../redux/api/apiSlice'

import { AuthContext } from "./AuthContext"
const useGetUsersQuery = apiSlice.endpoints.getAuthToken.useQuery



const useAuth = () => {
  return useContext(AuthContext);
};

export const ProtectedRoute = ({ children }: any) => {
  const {data} = useGetUsersQuery('/gettoken')
  
  let user = useAuth()
  console.log("USER AUTHCONTEXT",user)

  //const token = data.token
  console.log("TOKEN", data)

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


