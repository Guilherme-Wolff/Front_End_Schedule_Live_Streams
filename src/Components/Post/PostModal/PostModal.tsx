import React, { useEffect, useRef, useState } from 'react';
import './PostModal.scss'; // Import your modal styles

import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"

import {
    set_content_modal,
    close_modal
} from "../../../redux/modal/reducer"
import { ModalState } from '../interfaces';

import { Post } from "../../../types/types"
import { PostCardVideo } from "../Video/CardVideo"
import { cancel } from 'timeago.js';

//import closeIcon from "/close.png"

export const ContentModal = () => {
    return (
        <div className="modal-content">
            <h1>Este é um modal</h1>
            <p>Este modal permanecerá no centro da tela mesmo quando você rolar para baixo.</p>
        </div>
    )
}





export const PostModal = ({ post }: Post | any) => {

    const handleBackdropClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Impede que o clique chegue ao conteúdo abaixo do modal
        e.stopPropagation();
    };

    const { post_id } = post

    const divPostReff = useRef<HTMLDivElement>(null);

    let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

    let dispatch = useAppDispatch()

    /* useEffect(() => {
         const handleClickOutside = (event: MouseEvent) => {
             const modalElement = divPostReff.current;
 
             // Verificar se o clique não ocorreu dentro do modal e o modal está aberto
             if (modal_post.modal_state && modalElement && !modalElement.contains(event.target as Node)) {
                 //dispatch(close_modal());
                 // dispatch(close_modal());
                 console.log("REGISTRO_TEST if")
             }
         };
 
         // Adicionar ouvinte de clique ao documento 
         modal_post.modal_state && document.addEventListener('click', handleClickOutside)
 
         // Limpar o ouvinte de evento ao desmontar o componente
         return () => {
             modal_post.modal_state && document.removeEventListener('click', handleClickOutside)
         };
     }, []);*/

    return (
        <div ref={divPostReff} className={`modal ${modal_post.modal_state ? 'modal_visible' : 'modal_hidde'}`}
            onClick={

                modal_post.modal_state ? (e) => handleBackdropClick(e)
                    :
                    () => cancel /*dispatch(close_modal()) */

            }
        >
            <img src='/close.png' alt="Fechar" style={{ width: '18px', height: '18px' }}
                className="closeButton button_close_visible"
                onClick={

                    modal_post.modal_state ? () => dispatch(close_modal())
                        :
                        () => cancel /*dispatch(close_modal()) */

                }


            />
            {/*<div className='div_modal_content'><p className='div_modal_content'>post id: {post_id}</p></div> */}
            < PostCardVideo post={post} />
        </div>
    );
};

