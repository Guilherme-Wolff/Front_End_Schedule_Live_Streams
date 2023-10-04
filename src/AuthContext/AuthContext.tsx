
import React, { useEffect, useRef, useState,createContext } from "react";

import {Navigation, RouterProvider, Routes } from "react-router-dom";
import {router} from "../index"

export const AuthContext = createContext(null);

const App = () => {
  const [token, setToken] = useState<any>();

  const fakeAuth = () :any =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });
  
  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
  };

  const handleLogout = () => {
    setToken('');
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };


  return (
    <AuthContext.Provider value={token}>
      <h1>React Router</h1>
      <RouterProvider router={ router}/>
    </AuthContext.Provider>
  );
};