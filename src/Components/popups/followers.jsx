import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../settings.scss'
import '../../css/minipopup.scss'
import {Subscribers} from "../Profile/Subscribers/Subscribers"

function Popup(props) {

    const settings = {
        infinite: false,
        dots: true,
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <div className="popup">

            <div className="popupdetailfwpruhwe">

                <div className="modfdfsdafasal-content minipoupModfdfsdafasal-content" style={{ zIndex: 9879789789789 }}>
                    <div className="modal-content model-content-fooo popup__mini">
                        <div className="following__wrapper">
                            <div className="following__title">
                                <h1>Subscribers</h1>
                                <div onClick={props.ChangeFolllowersPopup}>
                                    <svg aria-label="close" className="closepopup" color="#ffffff" fill="#ffffff"
                                        height="18"
                                        role="img" viewBox="0 0 24 24" width="18"><title>close</title>
                                        <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647"
                                            stroke="currentColor"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="3"></polyline>
                                        <line fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                                    </svg>
                                </div>
                            </div>
                            <div className="followings">
                                {[0,1,2,3,4,5,6,7].map((v)=>{
                                    return (
                                        <Subscribers />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;