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
        return [
          ...action.payload
        ]
      }
      catch (e: any) {
        console.error(e.message)
        //console.log("ERRO : recent_searches_array")
      }
    },
  }
})

export const { new_searches_array,
}
  = newSearchUsers.actions

export const newUsersSearchSlice = newSearchUsers.reducer;
//export default recentUsersReducer;