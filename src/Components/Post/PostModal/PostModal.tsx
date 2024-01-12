import React, { useState } from 'react';
import './PostModal.scss'; // Import your modal styles

import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"

import {
    set_content_modal,
    close_modal
} from "../../../redux/modal/reducer"
import { ModalState } from '../interfaces';

export const ContentModal = () => {
    return (
        <div className="modal-content">
            <h1>Este é um modal</h1>
            <p>Este modal permanecerá no centro da tela mesmo quando você rolar para baixo.</p>
        </div>
    )
}


export const PostModal = (post: any) => {
    const [modalVisible, setModalVisible] = useState(false);

    let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

    let dispatch = useAppDispatch()

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        modal_post.modal_state && dispatch(set_content_modal({ modal_state: false, post: null }))
        //setModalVisible(false);
    }

    return (
        <div className={`modal ${modalVisible ? 'modal_visible' : ''}`}>
            <button className="closeButton button_close_visible" onClick={closeModal}>
                Close
            </button>
            <div><p>teste modal</p></div>
        </div>
    );
};

//================
export const PostModalTest: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        //modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
    };

    return (
        <div>
            {modalVisible && <ContentModal />}
            <div className={`modal ${modalVisible ? 'modal_visible' : ''}`}>
                {/* Modal content goes here */}
                <button className="closeButton button_close_visible" onClick={closeModal}>
                    Close
                </button>
            </div>

            {/* Button to open the modal */}
            <button className={`openButton ${modalVisible ? 'button_close_hidden' : ''}`} onClick={openModal}>
                Open Modal
            </button>
        </div>
    );
};

