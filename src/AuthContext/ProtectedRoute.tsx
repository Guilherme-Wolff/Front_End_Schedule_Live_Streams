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

  const token = data.token
  console.log("TOKEN", data)

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


