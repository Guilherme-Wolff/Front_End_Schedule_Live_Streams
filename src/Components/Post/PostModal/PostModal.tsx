import React, { useEffect, useRef, useState } from 'react';
import './PostModal.scss'; // Import your modal styles
//import "./PostCard.scss"
import "./PostCardModal.scss"

import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"

import {
    set_content_modal,
    close_modal
} from "../../../redux/modal/reducer"
import { ModalState } from '../interfaces';

import { Post } from "../../../types/types"
import { PostCard } from "../Video/PostCardHls"
import { cancel } from 'timeago.js';

import { BottomOptions } from "../BottomOptions/BottomOptions"
import { Iframe } from '../Video/Iframe';
import { ChatPlayer } from '../../LiveChat/LiveChat';

//import closeIcon from "/close.png"

/*export const ContentModal = () => {
    return (
        <div className="modal-content">
            <h1>Este é um modal</h1>
            <p>Este modal permanecerá no centro da tela mesmo quando você rolar para baixo.</p>
        </div>
    )
}*/





export const PostModal = ({ post }: Post | any) => {

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Impede que o clique chegue ao conteúdo abaixo do modal
        //e.stopPropagation();
    };

    const { post_id ,chat } = post

    const divPostReff = useRef<HTMLDivElement>(null);

    let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

    /*let modal_post: ModalState = {
        modal_state:true
    }
    */
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

    useEffect(() => {

    }, []);

    return (
        <div ref={divPostReff} className={`modal ${modal_post.modal_state ? 'modal_visible' : 'modal_hidde'}`}

            onClick={

                modal_post.modal_state ? (e) => null// handleBackdropClick(e)
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
            {<div className='div_modal_content'>
                < PostCard  
                post={post} 
                />
                <ChatPlayer urlChat={chat} />
                {/*  <CHAT chat={json_file_url}/>  */}
                { /*<BottomOptions post={post} />*/}
                


                {//ANUNCIOS
                /*<div style={{
                    position: 'absolute',
                    bottom: '0'
                }}>AD</div> */}
            </div>}

        </div>
    );
};

