import { createSlice, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit"
import { SearchedNames } from "../../types/types"
//import {getUsersSearchDefault} from "../../redux/AsyncThunks/GetUsersSearchDefaultThunk"
import { apiSlice } from '../api/apiSlice'
//import API from "../../api/api"
import axios from "axios";
let initialState: SearchedNames = {
  user_image: "image1",
  username: "name1",
  complete_name: "complete_name1"
};

//let listUsersSearched: SearchedNames[] = []
let listUsersSearched: SearchedNames[] = []
export const recentUsers = createSlice({
  name: 'recent',
  initialState: listUsersSearched,
  reducers: {
    recent_searches_array: (state: SearchedNames[],
      action: PayloadAction<SearchedNames[]>) => {
      try {
        //state.push(action.payload[0])
        //console.log("STATE", action.payload)
        if (state.length < 11) {
          console.log("LIST", state)
          return {
            ...action.payload,
            ...state,
          }
        } else {
          return {
            ...action.payload,
            ...state,
          }
        }
      }
      catch (e: any) {
        //return state// <-- note `e` has explicit `unknown` type
        console.error(e.message)
        console.log("ERRO : recent_searches_array")
        /*if (typeof e === "string") {
          console.error(e.toUpperCase()) // works, `e` narrowed to string
        } else if (e instanceof Error) {
          console.error(e.message) // works, `e` narrowed to Error
        }*/
      }

    },
    
  }
})

export const { recent_searches_array,
  //recent_searches_clear_total,
  //recent_searches_recriate_defaault,
  //recent_searches_remove_user 
}
  = recentUsers.actions

export const recentUsersSlice = recentUsers.reducer;
//export default recentUsersReducer;