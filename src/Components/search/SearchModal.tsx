import React, { useEffect, useRef, useState } from 'react';
import '../Post/PostModal/PostCardModal.scss'; // Import your modal styles
import './SearchModal.scss';
//import "./PostCard.scss"
//import "./PostCardModal.scss"

import { RootState, useAppSelector, useAppDispatch } from "../../redux/store"

import {
    set_content_modal,
    close_modal
} from "../../redux/modal/reducer"
import { ModalState } from '../Post/interfaces';

import { InputSearchedNames, Post } from "../../types/types"

import { cancel } from 'timeago.js';

import NewUserSearches from "../search/NewUserSearches"

import { ObjectInArrayOfObject } from '../../utils/functions';

//import closeIcon from "/close.png"

/*export const ContentModal = () => {
    return (
        <div className="modal-content">
            <h1>Este é um modal</h1>
            <p>Este modal permanecerá no centro da tela mesmo quando você rolar para baixo.</p>
        </div>
    )
}*/





export const SearchModal = () => {

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Impede que o clique chegue ao conteúdo abaixo do modal
        //e.stopPropagation();
    };



    const divPostReff = useRef<HTMLDivElement>(null);

    let search_modal_mobile = useAppSelector((state: RootState) => state.search_modal_mobile);

    /*let modal_post: ModalState = {
        modal_state:true
    }
    */
    let dispatch = useAppDispatch()

    let searched = useAppSelector((state: RootState) => state.new_users_search)

    let search_input_size = useAppSelector((state: RootState) => state.input_size)
    console.log("REGISTRO_TEST busca", searched)
    //CONVERT OBJECT IN ARRAY

    //searched = ObjectInArrayOfObject(searched)

    useEffect(() => {
        if (!searched.length) {
            //console.log("REQQ", data)
            //dispatch(recent_searches_array(data));
        }

    }, [searched])

    useEffect(() => {

    }, []);

    return (
        //criar outro css para o modal mobile com VH E VW
        <div ref={divPostReff} className={`modal`}

            onClick={

                search_modal_mobile.modal_state ? (e) => handleBackdropClick(e)
                    :
                    () => null /*dispatch(close_modal()) */

            }
        >

            <img src='/close.png' alt="Fechar" style={{ width: '18px', height: '18px' }}
                className="closeButton button_close_visible"
                onClick={

                    search_modal_mobile.modal_state ? () => dispatch(close_modal())
                        :
                        () => null /*dispatch(close_modal()) */

                }


            />
            {<div className='div_modal_content'>
                <div role="list_users_search" className="recent__users__wrap">
                    {


                        searched.length ? searched.map((user: InputSearchedNames) => {

                            return (
                                <NewUserSearches user={user} />
                            )
                        }) : null
                    }
                </div>
            </div>}

        </div>
    );
};

