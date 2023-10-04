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
export const newSearchUsers = createSlice({
  name: 'recent',
  initialState: listUsersSearched,
  reducers: {
    new_searches_array: (state: SearchedNames[],
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
          //state = [user, ...current(state)]
          //return state
        } else {
          //state.splice(state.length - 1, 1);
          //state = [user, ...current(state)]
          return {
            ...action.payload,
            ...state,
          }
        }
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : recent_searches_array")
      }
    },
  }
})

export const {new_searches_array,
             }
  = newSearchUsers.actions

export const recentUsersSlice = newSearchUsers.reducer;
//export default recentUsersReducer;