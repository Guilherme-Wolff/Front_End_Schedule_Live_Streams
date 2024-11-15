import React, {useEffect, useState} from 'react'
import './profile.scss'
import SidebarResponsive from '../../Components/Sidebar/SidebarResponsive'
import Popup from '../../Components/popups/Popup'
import axios from "axios";
//import '../Explore/Explore.scss'
import MiniPopup from "../../Components/popups/following";
import Followers from "../../Components/popups/followers";


import HeaderMobile from "../../Components/Header/Header"
import BottomTab from "../../Components/BottomTab/BottomTab"

function getSpecificPost(posts:any,id:any) :any{
    posts.map((post:any)=>{
        if(id === post.id){
            return post;
        }
    })
}

function GetValuesDivUsersReturn(e: React.MouseEvent<HTMLAnchorElement>): string {
    return e.currentTarget?.accessKey
    //redirect(e.currentTarget?.accessKey)
  }




function App() {

    //const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [goToR, isgoToR] = useState(false)
    const [minipopup, isminipopup] = useState(false)
    const [followespopup, isfollowerspopup] = useState(false)
    const [count, setCount] = useState(0)
    const [post, setPost] = React.useState([]);


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
    console.log("CurrenPost",cuurentpostspecific)
    if(cuurentpostspecific){
        let postspecific = getSpecificPost(post,cuurentpostspecific);
        console.log("postspecific",postspecific)
    }


    useEffect(() => {
        axios.get('http://localhost:8080/ownposts').then((response) => {
            setPost(response.data);
        });
    }, [])


    return (
        <div className='profile__wrap wrapper'>
            {SidebarResponsive()}{<HeaderMobile />}
            <div className="profile__content content">
                <div className="profile__info">
                    <input style={{display: 'none'}} type="file" id="uploadprofileimage"/>
                    <label htmlFor="uploadprofileimage" className="">
                        <img className='profile__image' src="../images/profileImage.jpg" alt=""/>
                    </label>
                    <div className='profile__setting__and__follows'>
                        <div className="profile__usernames">
                            <h3 className='light'>guilherme2023</h3>
                            <button className='light'>Edit profile</button>
                            <img src="../images/profile/settings.png" alt=""/>
                        </div>
                        <div className="profile__followings">
                            <div className="profile__pubs">
                                <p><span>2</span> publications</p>
                            </div>
                            <div className="profile__pubs" onClick={()=> isfollowerspopup(true)}>
                                <p><span>66</span> subscribers</p>
                            </div>
                            <div className="profile__pubs" onClick={()=> isminipopup(true)}>
                                <p><span>48</span> subscriptions</p>
                            </div>
                        </div>
                        <div className="profile__name">
                            <p className='light'>guilherme</p>
                        </div>
                    </div>
                </div>
                <div className="addactual__wrap">
                    <div className="profile__add__actual">
                        <img src="../images/profile/add.png" alt=""/>
                    </div>
                    <p>Add Storie</p>
                </div>

                {minipopup && <MiniPopup ChangeMiniPopup={ChangeMiniPopup} />}
                {followespopup && <Followers ChangeFolllowersPopup={ChangeFolllowersPopup} />}

                <div className="pubs">
                    <div className="pubs__posts explore__wrapper__left">
                        {goToR && <Popup postimage={show2} ChangePopup={ChangePopup}/>}
                        {post.map((posts: any) => (
                            <a className="gellery__item__wrap"  key={posts.id} accessKey={posts.id} onClick={(e) => {(cuurentpostspecific = GetValuesDivUsersReturn(e)) }}>
                                <div className='gellery__item' onClick={() => {
                                    isgoToR(true)
                                    setShow2(posts)
                                }}>
                                    {/* Photo */}
                                    <img className='post' src={posts.url} alt=""/>
                                    {/* Photo likes and coments */}
                                    <div className="gallery-item-info">
                                        <ul>
                                            <li className="gallery-item-likes">
                                                <img src="../images/explore/heart.png" alt=""/>
                                                {posts.how__many__licked}
                                            </li>
                                            <li className="gallery-item-comments">
                                                <img src="../images/explore/chat.png" alt=""/>
                                                {posts.comments.length}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* What is this photo video or photo */}
                                    <div className="gallery-item-type">
                                <span className="visually-hidden">
                                    <img src="../images/explore/photo.png" alt=""/>
                                </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="div-bottom-tab">
            {<BottomTab />}
          </div>
            </div>
        </div>
    );
}

export default App;
