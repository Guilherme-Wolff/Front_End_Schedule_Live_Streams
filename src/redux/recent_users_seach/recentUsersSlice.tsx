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


        /*action.payload.map((user: SearchedNames) => {
          

        })*/

        /*for (let i in action.payload) {
          //console.log(action.payload[i])
          if (state.length < 11) {
             state.push(...action.payload,...state)
          } else {

            //state.splice(state.length - 1, 1);
            delete state[i]

            return state

          }


        }*/
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
    recent_searches_remove_user(state: SearchedNames[],
      action: PayloadAction<string>) {
        state =
        Object.keys(state).map(function (personNamedIndex: any) {
          let user = state[personNamedIndex];
          // do something with person
          return user;
        });
        state = state.filter(item => item.username !== action.payload);
        return {...state}
      /*var ArrayState: SearchedNames[] =
        Object.keys(state).map(function (personNamedIndex: any) {
          let user = state[personNamedIndex];
          // do something with person
          return user;
        });
      try {
        ArrayState.map((user: SearchedNames, index: number) => {
          if (user.username === action.payload) {
            console.log(user.username)
            ArrayState.splice(index, 1)
            return {
              ...ArrayState
            }

            //FUNCTION_REMOVE_USERS_IN_DATA_BASE
          }
          else {
            return {
              ...ArrayState
            }
          }
        })


      }
      catch (e: any) { // <-- note `e` has explicit `unknown` type
        console.error(e.message)
        console.log("ERRO")
        if (typeof e === "string") {
          console.error(e.toUpperCase()) // works, `e` narrowed to string
        } else if (e instanceof Error) {
          console.error(e.message) // works, `e` narrowed to Error
        }
      }*/

    },
    recent_searches_clear_all: (state: SearchedNames[]) =>{
      try {
        return []
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : recent_searches_array")
      }

    },
    /*recent_searches_clear_total(state: Array<SearchedNames>) {
      console.log("LIMPANDO RECENTES")
      return state = []
    },
    recent_searches_recriate_defaault(state: Array<SearchedNames>) {
      //const LENGTH_TOTAL :number = state.length + action.payload.length;
      console.log("ATIVANDO RECENTES")
      return state = [...listUsersSearchedSecundary]
    },*/



    /*extraReducers: (builder) => {
      
    },*/

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