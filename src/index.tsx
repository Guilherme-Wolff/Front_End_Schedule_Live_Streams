//import * as _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query"

import { Provider } from "react-redux"
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from "./redux/api/apiSlice"
import { NotFoundPage } from "./Components/NotFound/NotFound"

//COMPONETS//
import Home from './Pages/Home/Home'
import Saved from './Pages/Saved/Saved'
//import Home from './Pages/Home/Home'
import Profile from './Components/Profile/Profile'
//import Explore from './Components/Explore/Explore'
//import Inbox from './Components/Chat/Inbox'
//import Chat from './Components/Chat/Chat'
import { Login } from "./Pages/Registration/Login";
import { Register } from "./Pages/Registration/Register";

import { Streamer } from "./Pages/Streamer/Streamer";


//import Slick from "./Components/Slick";

import { ProtectedRoute } from "./AuthContext/ProtectedRoute"
//REACT ROUTER 6

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    //element: <Home />,      
    element: <ProtectedRoute authNecessary={true} children={<Home />} />,

    children: [
      {
        path: "/streamer/:streamer_name",
        element: <ProtectedRoute authNecessary={true} children={<Streamer />} />,
      },
    ],
  },
  {
    path: "/login",
    element: <ProtectedRoute authNecessary={false} children={<Login />} />,
  },
  {
    path: "/signup",
    element: <ProtectedRoute authNecessary={false} children={<Register />} />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute authNecessary={true} children={<Profile />} />,
  },
  /*{
    path: "/streamer/:streamer_name",
    element: <ProtectedRoute authNecessary={true} children={<Streamer />} />,
  },*/
  {
    path: "/saved",
    element: <Saved />,
    //element: <ProtectedRoute authNecessary={true} children={<Profile />} />,
  },
  /*{
    path:"/explore",
    element:<Explore />
  },*/
  /*{
    path: "/inbox",
    element: <Inbox />
    //<ProtectedRoute children={<Inbox />}/>

  },
  {
    path: "/inbox/14564",
    element: <Chat />
  },
  {
    path: "/reels/videos/",
    element: <a style={{ color: 'red' }} >pending</a>,
  },*/
  /*{
    path: "/stories/:user/:id",
    element: <ProtectedRoute children={<p>stories</p>} />,
  },*/
  {
    // Rota padrão para Not Found (Erro 404)
    path: "*",
    element: <NotFoundPage />,
  }
])

const queryClient = new QueryClient();

export const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(


  <QueryClientProvider client={queryClient}>
    <ApiProvider api={apiSlice} >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate >
      </Provider>
    </ApiProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
