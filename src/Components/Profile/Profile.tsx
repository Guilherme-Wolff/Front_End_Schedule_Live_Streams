import React, { useEffect, useState } from 'react'
import './profile.scss'
import SidebarResponsive from '../Sidebar/SidebarResponsive'
import Sidebar from '../Sidebar/Sidebar'
import Popup from '../popups/Popup'
import {ModalPost} from "../Post/ModalPost/ModalPost"
import useModal from "../Post/ModalPost/useModal";
import axios from "axios";
import '../Explore/Explore.scss'
import MiniPopup from "../popups/following";
import Followers from "../popups/followers";


import HeaderMobile from "../Header/Header"
import BottomTab from "../BottomTab/BottomTab"
import { IndicativeCarouselPost } from "./IconComponents/IndicativeCarouselPost"

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

const SettingsIcon = () => {
    return (
        <img src="../images/profile/settings.png" alt="" />
    )
}



function App() {
    const { isOpen, toggle } = useModal();
    //const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [goToR, isgoToR] = useState(false)
    const [minipopup, isminipopup] = useState(false)
    const [followespopup, isfollowerspopup] = useState(false)
    const [subscriptionspopup, issubscriptionspopup] = useState(false)
    const [count, setCount] = useState(0)
    const [posts, setPosts] = React.useState([]);


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
        let postspecific = getSpecificPost(posts, cuurentpostspecific);
        console.log("postspecific", postspecific)
    }


    useEffect(() => {
        axios.get('http://localhost:8080/ownposts').then((response) => {
            setPosts(response.data);
        });
    }, [])


    return (
        <div className='profile__wrap'>
            {<Sidebar />}
            {/*goToR && <Popup postimage={show2} ChangePopup={ChangePopup} />*/}
            {isOpen && <ModalPost postimage={show2} ChangePopup={ChangePopup} isOpen={isOpen} toggle={toggle} />}
            <div className="profile__content content">
                <div className="profile__info">
                    <input style={{ display: 'none' }} type="file" id="uploadprofileimage" />
                    <div>
                        <label htmlFor="uploadprofileimage" className="">
                            <img className='profile__image' src="../images/profileImage.jpg" alt="" />
                        </label>
                        <div className="profile__name_mobile">
                            <p className='light'>guilherme</p>
                        </div>
                    </div>
                    <div className='profile__setting__and__follows'>
                        <div className="profile__usernames">
                            <h3 className='light nick_name'>guilherme2023</h3>
                            <button className='light'>Edit profile</button>
                            <SettingsIcon />
                        </div>
                        <div className="profile__followings">
                            <div className="profile__pubs">
                                <p><span>4</span> publications</p>
                            </div>
                            <div className="profile__pubs" onClick={() => isfollowerspopup(true)}>
                                <p><span>8</span> subscribers</p>
                            </div>
                            <div className="profile__pubs" onClick={() => isminipopup(true)}>
                                <p><span>11</span> subscriptions</p>
                            </div>
                        </div>
                        <div className="profile__name">
                            <p className='light'>guilherme</p>
                        </div>
                    </div>
                </div>
                <div className="addactual__wrap">
                    <div className="profile__add__actual">
                        <img src="../images/profile/add.png" alt="" />
                    </div>
                    <p>Add Storie</p>
                </div>

                {minipopup && <MiniPopup ChangeMiniPopup={ChangeMiniPopup} />}
                {followespopup && <Followers ChangeFolllowersPopup={ChangeFolllowersPopup} />}

                <div className="pubs">
                    <div className="pubs__posts explore__wrapper__left">
                        
                        {posts.map((posts: any) => (
                            <a className="gelleryitem_anchor" key={posts.id} accessKey={posts.id} 
                            onClick={toggle}
                            //onClick={(e) => { (cuurentpostspecific = GetValuesDivUsersReturn(e)) }}
                            >
                                <div className='gellery__item'

                                    onClick={() => {
                                        isgoToR(true)
                                        setShow2(posts)
                                    }}>
                                    {/* Photo */}
                                    <img className='post' src={posts.url} alt="" />
                                    {/* Photo likes and coments */}
                                    {/*<div className="gallery-item-info">
                                        <ul>
                                            <li className="gallery-item-likes">
                                                <img src="../images/explore/heart.png" alt="" />
                                                {posts.how__many__licked}
                                            </li>
                                            <li className="gallery-item-comments">
                                                <img src="../images/explore/chat.png" alt="" />
                                                {posts.comments.length}
                                            </li>
                                        </ul>
                                    </div>
                                */}
                                    {/*<IndicativeCarouselPost /> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                {<BottomTab />}

            </div>
        </div>
    );
}

export default App;
