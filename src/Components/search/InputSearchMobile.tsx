import './InputSearchMobile.scss'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query"
import {SearchedNames} from "../../types/types"
import {
  size_input_increment,
  size_input_decrement
} from "../../redux/input_redux/inputSearchSlice"

import store from '../../redux/store';
import { RootState } from "../../redux/store"
import { useAppDispatch } from "../../redux/store"
import { useAppSelector } from "../../redux/store"

let API: string = " http://localhost:8080/"


export default function InputSearch() {

  let dispatch = useAppDispatch()
  //get PERCISTENCE // let usersDefault = useSelector((state: RootState) => state.registry)
  //let usersDefault = useSelector((state: RootState) => state)
  //let usersDefault2 = useSelector((state: RootState) => state.recent)
  //console.log("PERSISTENCIA",usersDefault)
  let INPUT:boolean = true


  function IsValidUsername(e: React.FormEvent<HTMLInputElement>) {
    let INPUT_SIZE = e.currentTarget.value.length;
    if (INPUT_SIZE > 0) {
      dispatch(size_input_increment(e.currentTarget.value.length));
      /*const { data } = useQuery("search", () => {
        return axios
          .get(API + "recentusers")
          .then(res => res.data)
      });

      dispatch(search_users(data));*/

      //console.log("TAMANHO DA PALAVRA: ", e.currentTarget.value.length)
      //SetUsernameValid(e.currentTarget.value)
    }else{
        dispatch(size_input_decrement(0));

    }

  }

  return (
    <>
      <div className="search__input__mobile">
        <input
          type="text"
          onChange={(e) => IsValidUsername(e)}
          placeholder="Search"
        />
      </div>
    </>
  )

}