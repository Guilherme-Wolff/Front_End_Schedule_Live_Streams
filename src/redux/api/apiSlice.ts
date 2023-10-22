import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"
import { API } from "../../api/api"
import { SearchedNames, Post } from "../../types/types"

let Headers = {
  headers: {
    'content-type': 'application/json',
    'cache-control': 'public'
  }
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getSearchers: builder.query
      ({
        query: () => ({
          url: '/recentusers',
          method: 'GET',
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