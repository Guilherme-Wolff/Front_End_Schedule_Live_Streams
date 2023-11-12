import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"
import { API } from "../../api/api"
import { SearchedNames, Post } from "../../types/types"
import { RootState } from "../root-reducer";

//Cookies
import {setCookie} from "./Cookies"


const URL_API = 'https://pd-satur-nodejs-set-10cb88bf8e994930acc0c928bc718f7b.community.saturnenterprise.io'
const API_VERSION = 'V1'
const user_token = 'f089371aee2849489767f18bf8700769'
let api_token = "deployment-10c5c3def1ed4346845cc6d05105b5f2"
type prepareHeaders = (
  headers: Headers,
  api: {
    getState: () => unknown
    extra: unknown
    endpoint: string
    type: 'query' | 'mutation'
    forced: boolean | undefined
  }
) => Headers | void

const SATURN_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19yZWZyZXNoIjpmYWxzZSwicmVzb3VyY2UiOiJ3LXNhdHVyLWFwcDEtOTkyMDU5NTg2M2QzNGM4YmEwMDRhYjNjZTZkMGVkMzkuY29tbXVuaXR5LnNhdHVybmVudGVycHJpc2UuaW8iLCJhdWQiOiJzYXR1cm4tYXV0aC1wcm94eSIsImV4cCI6MTY5OTQwNTk3OCwiaXNzIjoic2F0dXJuLWF1dGgtcHJveHkiLCJzdWIiOiJjYWNlZTRkN2U5YmU0ZWIyYTUzNjVhOGRhYWU5ZTA0NSJ9.ScOelOqXgSqfRiTVNoFOg-MHRsJaQrwxOPjW0HU4ATs';
const REFRESH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19yZWZyZXNoIjp0cnVlLCJyZXNvdXJjZSI6Inctc2F0dXItYXBwMS05OTIwNTk1ODYzZDM0YzhiYTAwNGFiM2NlNmQwZWQzOS5jb21tdW5pdHkuc2F0dXJuZW50ZXJwcmlzZS5pbyIsImF1ZCI6ImF0bGFzIiwiZXhwIjoxNjk5NDg4Nzc4LCJpc3MiOiJzYXR1cm4tYXV0aC1wcm94eSIsInN1YiI6ImNhY2VlNGQ3ZTliZTRlYjJhNTM2NWE4ZGFhZTllMDQ1In0.yWbzkW6draVXsfHvT-hsOleToRoo5ElBqX7M8ZsQ1rQ'

//const SATURN_TOKEN = process.env.SATURN_TOKEN || '';
//const REFRESH_TOKEN = process.env.REFRESH_TOKEN || '';

let CookiesSaturn = `saturn-token=${SATURN_TOKEN};refresh-token=${REFRESH_TOKEN}`


let _headers =  {
  'content-type': 'application/json',
  'cache-control': 'public',
  'Cookie': CookiesSaturn,
  'authorization': `token ${user_token}`,
  'Origin':'https://w-satur-app1-9920595863d34c8ba004ab3ce6d0ed39.community.saturnenterprise.io:8000'
}

//setCookie('saturn-token', SATURN_TOKEN, 7);
//setCookie('refresh-token', REFRESH_TOKEN, 7);


export const apiSlice = createApi({
  reducerPath: 'api',
  //baseQuery: fetchBaseQuery({ baseUrl: API }),
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API,
    //credentials: "include",
    //headers:_headers,
    prepareHeaders: (headers) => {
       // headers.set('Access-Control-Allow-Origin', '')
        headers.set('Content-Type',  'application/json')
        headers.set('Authorization',  `token ${user_token}`)
        //MEU AUTH
        headers.set('OwnAuthorization',  `token JWT DO MEU USUARIO`)
        //headers.set('Cookie',  CookiesSaturn)
        headers.set('Origin',  'https://w-satur-app1-9920595863d34c8ba004ab3ce6d0ed39.community.saturnenterprise.io:8000')
      return headers
    },
  }),
  
  endpoints: (builder) => ({
    getHello:  builder.query
      ({
        query: () => ({
          url: '/',
          method: 'GET',
          //mode:'cors',
          /*headers:{
            'Cookie':CookiesSaturn,
            'Authorization':`token ${user_token}`
          },*/
          keepUnusedDataFor: 1,//cache 1 minute

        })
      }),
    searchStreamer: builder.query
      ({
        query: (streamer) => ({
          url: '/streamers/search',
          method: 'GET',
          body: {
            streamer: streamer
          },
          keepUnusedDataFor: 1,//cache 1 minute
        }),
        /*onQueryStarted: (request:any, arg:any) => {
          // Adicione o cookie aos cabeçalhos da solicitação
          //const token = Cookies.get('nomeDoCookie');
          request.headers.set('Cookie', Cookies);
        },*/
      }),
    getSearchers: builder.query
      ({
        query: () => ({
          url: '/recentusers',
          method: 'GET',
          keepUnusedDataFor: 1,//cache 1 minute
        })
      }),
    saveSearchers: builder.query
      ({
        query: (streamer: any) => ({
          url: '/streamers/save',
          method: 'POST',
          body:
          {
            streamer: streamer
          },
          keepUnusedDataFor: 1,//cache 1 minute
        })
      }),
    /*newSearch: builder.query
      ({
        query: (word) => `/search/${word}`
      }),*/
    getPostsFeedHome: builder.query
      ({
        query: () => ({
          url: '/postshome',
          method: 'GET',
          keepUnusedDataFor: 1,//cache 1 minute
        })
      }),
    getAuthToken: builder.query
      ({
        query: () => ({
          url: '/gettoken',
          method: 'GET',
          keepUnusedDataFor: 1,//cache 1 minute
        })
      }),
    seachStreamer: builder.query
      ({
        query: () => ({
          url: `/api/${API_VERSION}/searchstreamer`,
          method: 'GET',
          keepUnusedDataFor: 1,//cache 1 minute
        })
      }),
  })
})

/*
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
  }),
  endpoints: (builder) => ({
    getSearchers: builder.query
    ({
      query: () => ({
        url:'/recentusers',
        method: 'GET',
      })
    }),
    newSearch: builder.query
    ({
      query: () => '/search'
    })
  })

})
*/