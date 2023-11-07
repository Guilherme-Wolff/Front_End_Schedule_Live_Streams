import '../Sidebar/Sidebar.scss'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query"
import { SearchedNames } from "../../types/types"
import {
  size_input_increment,
  size_input_decrement
} from "../../redux/input_redux/inputSearchSlice"

import store from '../../redux/store';
import { RootState } from "../../redux/store"
import { useAppDispatch } from "../../redux/store"
import { useAppSelector } from "../../redux/store"

let API: string = " http://localhost:8080/"
const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

export default function InputSearch() {
  let dispatch = useAppDispatch()

  async function IsValidUsername(e: React.FormEvent<HTMLInputElement>) {
    console.log("STREAMER",e.currentTarget.value)
    let INPUT_SIZE = e.currentTarget.value.length;
    if (INPUT_SIZE > 0) {
      await sleep(200)
      dispatch(size_input_increment(e.currentTarget.value.length));
    } else {
      await sleep(200)
      dispatch(size_input_increment(0));
    }
  }

  return (
    <>
      <div className="search__input">
        <input
          type="text"
          onChange={(e) => IsValidUsername(e)}
          placeholder="example.: tiktok.com/@user/live"
        />
      </div>
    </>
  )

}