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
        //return state// <-- note `e` has explicit `unknown` type
        console.error(e.message)
        console.log("ERRO : recent_searches_array")

      }

    },
    recent_searches_remove_user(state: SearchedNames[],
      action: PayloadAction<string>) {
      state =
        Object.keys(state).map(function (personNamedIndex: any) {
          let user = state[personNamedIndex];
          // do something with person
          return user;
        });
      state = state.filter(item => item.username !== action.payload);
      return { ...state }

    },
    recent_searches_clear_all: (state: SearchedNames[]) => {
      try {
        return []
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : recent_searches_array")
      }

    },
  }
})

export const { recent_searches_array,
  recent_searches_remove_user,
  recent_searches_clear_all
  //recent_searches_clear_total,
  //recent_searches_recriate_defaault,
  //recent_searches_remove_user 
}
  = recentUsers.actions

export const recentUsersSlice = recentUsers.reducer;
//export default recentUsersReducer;