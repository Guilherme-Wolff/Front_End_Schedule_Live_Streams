import { createSlice, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit"
import { InputSearchedNames } from "../../types/types"
//import {getUsersSearchDefault} from "../../redux/AsyncThunks/GetUsersSearchDefaultThunk"
import { apiSlice } from '../api/apiSlice'
//import API from "../../api/api"
import axios from "axios";
let initialState: InputSearchedNames = {
  user_image: "image1",
  username: "name1",
  platform: "complete_name1"
};

//let listUsersSearched: SearchedNames[] = []
let listUsersSearched: InputSearchedNames[] = []
export const newSearchUsers = createSlice({
  name: 'recent',
  initialState: listUsersSearched,
  reducers: {
    new_searches_array: (state: InputSearchedNames[],
      action: PayloadAction<InputSearchedNames[]>) => {
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