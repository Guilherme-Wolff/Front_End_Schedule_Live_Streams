import React, {useEffect, useState} from 'react'
import './Explore.scss'
import axios from "axios";
import Popup from '../popups/Popup'
import SidebarResponsive from '../Sidebar/SidebarResponsive'
import {Link} from 'react-router-dom'
import {Ipost} from './Ipost'


function App() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [goToR, isgoToR] = useState(false)
    const [count, setCount] = useState(0)
    const [post, setPost] = React.useState([]);


    function m(n, ff) {
        let x = ('' + n).length,
            p = Math.pow,
            d = p(10, ff)
        x -= x % 3
        return Math.round(n * d / p(10, x)) / d + " kMGTPE"[x / 3]
    }



    function ChangePopup() {
        isgoToR(false)
        console.log(goToR);
        console.log(true);
        document.body.style.overflowY = 'scroll'
    }


    useEffect(() => {
        axios.get('http://localhost:8000/posts').then((response) => {
            setPost(response.data);
        });

    }, [])


    return (
        <div className='explore__wrap wrapper'>
            {SidebarResponsive()}
            <div className="explore__content wrap__content">
                {goToR && <Popup postimage={show2} ChangePopup={ChangePopup}/>}

                <div className="explore__wrapper__left">

                    {post.map((posts, i) => (

                        <div className='gellery__item__wrap' key={i} onClick={() => {
                            // console.log(posts.url)
                            isgoToR(true)
                            setShow2(posts)
                        }}>
                            <div className='gellery__item'>
                                {/* Photo */}
                                <img src={posts.url[0]} alt=""/>
                                {/* Photo likes and coments */}
                                <div className="gallery-item-info">
                                    <ul>
                                        <li className="gallery-item-likes">
                                            <img src="../images/explore/heart.png" alt=""/>
                                            {m(posts.how__many__licked, 1)}
                                        </li>
                                        <li className="gallery-item-comments">
                                            <img src="../images/explore/chat.png" alt=""/>
                                            {m(posts.comments.length, 1)}
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
                            <div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default App;
