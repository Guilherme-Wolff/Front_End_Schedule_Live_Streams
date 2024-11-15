//import * as _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';

//import * as serviceWorkerRegistration from './serviceWorkerRegistration/serviceWorkerRegistration.js';

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
import { Profile } from './Pages/Profile/Profile'
//import Explore from './Components/Explore/Explore'
//import Inbox from './Components/Chat/Inbox'
//import Chat from './Components/Chat/Chat'
import { Login } from "./Pages/Registration/Login";
import { Register } from "./Pages/Registration/Register";

import { Streamer } from "./Pages/Streamer/Streamer";

//===
//import { WebExtensionBlocker } from '@cliqz/adblocker-webextension';

//import { browser } from 'webextension-polyfill-ts';

//===
import RequestBlocker from './Components/adBlock/RequestBlocker';
//import Slick from "./Components/Slick";

import { ProtectedRoute } from "./AuthContext/ProtectedRoute"
//REACT ROUTER 6

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';
import { platform } from 'os';



/*(function () {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    this.setRequestHeader('referrerPolicy', 'origin-when-cross-origin'); // Substitua 'seu-host.com' pelo host desejado
    //this.setRequestHeader('Referer', 'bunkrr.su');
    var args: any = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
})();*/


interface CustomHeaders {
  Host: string;
  [key: string]: string;
}
function configureGlobalXhrInterceptor() {
  // Salvar a referência original para XMLHttpRequest
  const originalXhrOpen = XMLHttpRequest.prototype.open;

  // Substituir XMLHttpRequest.prototype.open com uma função personalizada
  XMLHttpRequest.prototype.open = function (
    method: string,
    url: string | URL,
    async?: boolean | null,
    username?: string | null,
    password?: string | null
  ) {
    // Adicionar o cabeçalho Host ao objeto XMLHttpRequest antes de enviar a solicitação
    // this.setRequestHeader('Host', 'bunkrr.su'); // Substitua 'seu-host.com' pelo host desejado
    //this.setRequestHeader('Referer', 'bunkrr.su');
    this.setRequestHeader('Origin', 'bunkrr.su');
    this.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Converter o objeto IArguments em um array
    const args: [string, string, any] = [method, String(url), async || true];

    // Chamar a implementação original de XMLHttpRequest.prototype.open com os argumentos corretos
    return originalXhrOpen.apply(this, args);
  };
}

// Configurar interceptadores globais assim que o aplicativo for carregado
//configureGlobalXhrInterceptor();




/*WebExtensionBlocker.fromPrebuiltAdsAndTracking().then((blocker) => {
  blocker.enableBlockingInBrowser(browser);
});

const blocker =  WebExtensionBlocker.fromLists(fetch, [
  'https://easylist.to/easylist/easylist.txt'
]);*/

export const routes = {
  streamer: {
    path: '/streamer',
    platform: ':platform',
    streamer_name: ':streamer_name'
  },
  login: {
    path: '/login'
  }
}



export const router = createBrowserRouter([
  {
    path: "/",
    //element: <Home />,      
    element: <ProtectedRoute authNecessary={true} children={<Home />} />,

    /*children: [
      {
        path: "/streamer/:streamer_name",
        element: <ProtectedRoute authNecessary={true} children={<Streamer />} />,
      },
    ],*/
  },
  {
    path: `/${routes.streamer.path}/${routes.streamer.platform}/${routes.streamer.streamer_name}`,
    element: <ProtectedRoute authNecessary={false} children={<Streamer />} />,
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
  {
    path: "/explore",
    element: <ProtectedRoute authNecessary={true} children={<Profile />} />,
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
//serviceWorkerRegistration.register()
