import './Search.scss'
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query"
import { SearchedNames } from "../../types/types"
import { apiSlice } from '../../redux/api/apiSlice'
import UserActionTypes from '../../redux/recent_users_seach/action-types';
import {
  recent_searches_array,
  recent_searches_clear_all
} from "../../redux/recent_users_seach/recentUsersSlice"
import { ObjectInArrayOfObject } from "../../utils/functions"
import { useSelector } from "react-redux"
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store"
import { redirect } from 'react-router-dom';

import UserSearches from "./UserSearches"
import NewUserSearches from "./NewUserSearches"
import InputSearch from "./InputSearch"
import IsLoading from "../IsLoadin/IsLoading"


let otherUsersSearch: SearchedNames = {
  user_image: "image1",
  username: "name1",
  complete_name: "complete_name1"
};
let secondList: Array<SearchedNames> = [otherUsersSearch, otherUsersSearch];

const fake_search = [
  {
    username: 'thayto_dev',
    user_image: 'https://i-kebab.bunkr.ru/user_image-VedoGHuK.jpg',
    complete_name: 'twitch',
  },
  {
    username: 'teste',
    user_image: 'https://i-kebab.bunkr.ru/user_image-VedoGHuK.jpg',
    complete_name: 'twitch',
  },
]

export default function Search() {
  const useGetUsersQuery = apiSlice.endpoints.getSearchers.useQuery

  const useSearchStreamersQuery = apiSlice.endpoints.searchStreamer.useQuery
  // const { data, isLoading } = useGetUsersQuery("/recentusers")
  //console.log("RESPOSTA", data)
  let notSearching: boolean = true;
  let dispatch = useAppDispatch()
  const clear_all_recent_users_seached = () => {
    dispatch(recent_searches_clear_all());
  }

  let size_input = useAppSelector((state: RootState) => state.input_size)
  console.log(size_input)
  if (size_input > 0) {
    console.log("REGISTRO_TEST input", size_input)
    notSearching = false
  }
  console.log("SIZE", size_input)

  let payload = useAppSelector((state: RootState) => state.persistedReducer.recent)

  let searched = useAppSelector((state: RootState) => state.new_users_search)

  let search_input_size = useAppSelector((state: RootState) => state.input_size)
  console.log("REGISTRO_TEST busca", searched)
  //CONVERT OBJECT IN ARRAY
  payload = ObjectInArrayOfObject(payload)
  //searched = ObjectInArrayOfObject(searched)

  useEffect(() => {
    if (!searched.length) {
      //console.log("REQQ", data)
      //dispatch(recent_searches_array(data));
    }

  }, [searched])

  return (
    <>
      <div className="search__input__title">
        <h1>Search Streamers</h1>
        {InputSearch()}
      </div>
      <div className="recent__searched__users__title">
        <h3>Recent</h3>
        <button onClick={(e) =>
          clear_all_recent_users_seached()
        }>
          clear all
        </button>
      </div>
      <div role="list_users_search" className="recent__users__wrap">
        {


          searched.length ? searched.map((user: any) => {

            return (
              <NewUserSearches user={user} />
            )
          }) :
            payload && payload.map((user: any) => {
              return (
                //<NewUserSearches user={user} />
                <p>recent</p>
              )
            })
        }
      </div>
    </>
  )
}