import { createSlice, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit"
import { SearchedNames } from "../../types/types"
//import {getUsersSearchDefault} from "../../redux/AsyncThunks/GetUsersSearchDefaultThunk"
import { apiSlice } from '../api/apiSlice'
//import API from "../../api/api"
import axios from "axios";
let initialState: SearchedNames = {
  user_image: "image1",
  username: "name1",
  complete_name: "complete_name1",
  //platform: "platform1"
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
          const newUsers = action.payload;
          const updatedState = newUsers.reduce((acc, newUser) => {
            // Verifica se o usuário já existe no estado
            const existingUserIndex = acc.findIndex(user => user.username === newUser.username);
            
            if (existingUserIndex !== -1) {
              // Se o usuário já existe, remove-o da posição atual
              acc.splice(existingUserIndex, 1);
            }
            
            // Adiciona o novo usuário no início do array
            acc.unshift(newUser);
            
            return acc;
          }, [...state]);
  
          // Limita o array a 11 itens
          return updatedState.slice(0, 11);
        }
        catch (e: any) {
          console.error("ERRO : recent_searches_array", e.message);
          return state;
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