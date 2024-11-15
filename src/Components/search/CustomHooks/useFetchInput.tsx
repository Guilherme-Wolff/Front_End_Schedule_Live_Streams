import React, { useRef, useState } from "react";

import { useAppDispatch, RootState } from "../../../redux/store"

import { apiSlice } from "../../../redux/api/apiSlice"





export const useFetchInput = () => {

    const [word, setWord] = useState("");



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

    const { data, isLoading } = apiSlice.endpoints.searchStreamer.useQuery(word, queryOptions);
    


    return { data, isLoading,setWord,word }
}