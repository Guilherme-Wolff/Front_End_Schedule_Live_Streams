import React, { useEffect, useState } from 'react'
import './PerfilUserInfo.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Popup from '../../Components/popups/Popup'
import axios from "axios";

//import '../Explore/Explore.scss'
import MiniPopup from "../../Components/popups/following";
import Followers from "../../Components/popups/followers";


import HeaderMobile from "../../Components/Header/Header"
import BottomTab from "../../Components/BottomTab/BottomTab"
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { ModalState } from '../../Components/Post/interfaces';
import { apiSlice } from '../../redux/api/apiSlice';
import { PostCard } from '../../Components/Post/Video/PostCard';

function getSpecificPost(posts: any, id: any): any {
    posts.map((post: any) => {
        if (id === post.id) {
            return post;
        }
    })
}

function GetValuesDivUsersReturn(e: React.MouseEvent<HTMLAnchorElement>): string {
    return e.currentTarget?.accessKey
    //redirect(e.currentTarget?.accessKey)
}


export function PerfilImageEditable () {
    return (
        <>
            <input style={{ display: 'none' }} type="file" id="uploadprofileimage" />
            <label htmlFor="uploadprofileimage" className="">
                <img className='profile__image' src="/user_image.jpg" alt="" />
            </label>
        </>
    )
}


export function ProfileInfo() {

    //const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [goToR, isgoToR] = useState(false)
    const [minipopup, isminipopup] = useState(false)
    const [followespopup, isfollowerspopup] = useState(false)

    const [post, setPost] = React.useState([]);

    const [lives, setLives] = useState<any[]>([]);
    let dispatch = useAppDispatch()
    let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);


    function ChangePopup() {
        isgoToR(false)
        document.body.style.overflowY = 'scroll'
    }


    function ChangeMiniPopup() {
        isminipopup(false)
        document.body.style.overflowY = 'scroll'
    }

    function ChangeFolllowersPopup() {
        isfollowerspopup(false)
        document.body.style.overflowY = 'scroll'
    }

    let cuurentpostspecific = {}
    console.log("CurrenPost", cuurentpostspecific)
    if (cuurentpostspecific) {
        let postspecific = getSpecificPost(post, cuurentpostspecific);
        console.log("postspecific", postspecific)
    }




    /*if(!platform || streamer_name){
      
    }*/

    //const dispatch = useAppDispatch();
   


    return (
 
        <div className='main-perfil'>
            <div className="profile__content content">
                <div className="profile__info">
                    <PerfilImageEditable />
                    <div className='profile__setting__and__follows'>
                        <div className="profile__usernames">
                            <h3 className='light'>guilherme2023</h3>
                            
                        </div>
                        <div className="profile__followings">
                            <div className="profile__pubs">
                                <p><span>2</span> publications</p>
                            </div>
                            <div className="profile__pubs" onClick={() => isfollowerspopup(true)}>
                                <p><span>66</span> subscribers</p>
                            </div>
                            <div className="profile__pubs" onClick={() => isminipopup(true)}>
                                <p><span>48</span> subscriptions</p>
                            </div>
                        </div>
                        <div className="profile__name">
                            <p className='light'>guilherme</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

