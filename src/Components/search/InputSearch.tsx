import '../Sidebar/Sidebar.scss'
import React, { useContext, useEffect, useRef, useState } from "react";
//import axios from "axios";
import { useQuery, UseQueryResult, UseQueryOptions } from "react-query"
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
import { throttle, debounce } from 'lodash';

import { useFetchInput } from "./CustomHooks/useFetchInput"

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

interface MyQueryOptions extends UseQueryOptions {
  enabled?: boolean;
  // Outras opções específicas, se necessário
}

export default function InputSearch() {
  const dispatch = useAppDispatch();
  //const [word, setWord] = useState("");

  const { word, setWord,data,isLoading } = useFetchInput()



  const inputValueRef = useRef<string>('');

  let queryOptions = {};

  if (word.length > 0) {
    console.log("REGISTRO_TEST TAMANHO PESQUISA")
    queryOptions = {
      enabled: true,
    };
  } else {
    queryOptions = {
      enabled: false,
    };
  }

  //const { data, isLoading } = apiSlice.endpoints.searchStreamer.useQuery(word, queryOptions);

  console.log("search response", data)

  //=================================================================================================
  const handleInputValueSearch = debounce((value: string) => {
    const inputSize = value.length;

    dispatch(size_input_increment(inputSize));

    if (inputSize > 0) {
      setWord(inputValueRef.current);
      //refetch(); // Mova a chamada da API aqui, pois inputSize é maior que 0
      // Mantenha ou ajuste conforme necessário a lógica para atualizar o estado ou dispatch
    } else {
      dispatch(size_input_increment(0));
    }
  }, 200);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    inputValueRef.current = value; // Armazenar o valor do input no ref

    // Chamar a função debounce com o valor do input
    //setWord(value)
    handleInputValueSearch(value);
  };

  //=================================================================================================

  useEffect(() => {

    if (data) {
      const searchedNames = data.map((user: any) => ({
        user_image: user?.avatar || 'image_undefined',
        username: user?.name || 'username',
        platform: user?.platform || 'platform'
      }));

      dispatch(new_searches_array(searchedNames));
    }
  }, [data]);

  return (
    <>
      <div className="search__input">
        <input
          type="search"
          onChange={handleChange}
          //value={word}
          placeholder="example.: tiktok.com/@user/live"
        />
      </div>
    </>
  );
}
