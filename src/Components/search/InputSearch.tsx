import '../Sidebar/Sidebar.scss'
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query"
import { SearchedNames } from "../../types/types"
import {
  size_input_increment,
} from "../../redux/input_redux/inputSearchSlice"

import {
  new_searches_array,
  //recent_searches_clear_all
} from "../../redux/new_users_seach/newSearchUsersSlice"

import { store, useAppSelector, useAppDispatch, RootState } from "../../redux/store"

import { apiSlice } from "../../redux/api/apiSlice"

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export default function InputSearch() {
  const dispatch = useAppDispatch();
  const [word, setWord] = useState("");

  const { data, /*refetch */ } = apiSlice.endpoints.searchStreamer.useQuery(word);

  const handleInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const inputSize = inputValue.length;

    dispatch(size_input_increment(inputSize));

    if (inputSize > 0) {
      setWord(inputValue);
      //refetch(); // Mova a chamada da API aqui, pois inputSize é maior que 0

      // Mantenha ou ajuste conforme necessário a lógica para atualizar o estado ou dispatch
    } else {
      dispatch(size_input_increment(0));
    }
  };

  useEffect(() => {
    // Lógica para tratar os dados da API se data não for undefined
    if (data) {
      const searchedNames = data.map((user: any) => ({
        user_image: user?.avatar || 'avatar',
        username: user?.name || 'name',
        complete_name: user?.platform || 'platform'
      }));

      dispatch(new_searches_array(searchedNames));
    }
  }, [data, dispatch]);

  return (
    <>
      <div className="search__input">
        <input
          type="text"
          onChange={handleInputValue}
          placeholder="example.: tiktok.com/@user/live"
        />
      </div>
    </>
  );
}
