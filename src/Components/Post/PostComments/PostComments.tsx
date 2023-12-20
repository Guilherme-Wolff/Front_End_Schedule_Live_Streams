import { useState } from "react"
import { Post } from "../../../types/types"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"
import { posts_like, posts_unlike } from "../../../redux/posts_home/posts_home"



export const PostComments = ({ post }: Post | any) => {

    let {

        post_id, date, userminilogo,
        createdby, url, likes, comments, bio
    } = post

    let dispatch = useAppDispatch()
    const [saved, setSaved] = useState(false)



    function likePost(e: any) {
        const lickedSvg = "<img className=\"icon__with__padding licked\" src=\"../images/like.png\" alt=\"\"/>"

        const unlickedSvg = "<img className=\"icon__with__padding unlike\" onClick={(e)=> {likePost(e)}} src=\"../images/unlike.png\" alt=\"\"/>"

        let currentLike = e.target
        console.log(typeof e.target)
        console.log("key", e.target.key)

        // currentLike.remove()

        let parentElement = e.target.parentElement


        let like = parentElement.
            querySelector('.unlike')

        let unlicked = parentElement.
            querySelector('.like')

        if (currentLike.className == 'unlike') {
            dispatch(posts_like(post_id));
            like.classList.add('display-none')
            unlicked.classList.remove('display-none')
        } else if (currentLike.className == 'like') {
            dispatch(posts_unlike(post_id));
            like.classList.remove('display-none')
            unlicked.classList.add('display-none')
        }


    }

    return (
        <>
            <div className="posts__info">
                <p className='howmany__licked__this__post'>
                    <span>{likes}</span> Likes</p>
                <p><span>{createdby}</span> {bio}</p>
                <a href="#">View all comments ({comments.length})</a>
                {/*<p className='date__of__publicated'>5 days ago</p>*/}
            </div>
            <div className="reply__coment">
                <div className="icon__with__padding">
                    <svg aria-label="emoji" color="#fafafa" fill="#fafafa" height="24" role="img"
                        viewBox="0 0 24 24" width="24">
                        <path
                            d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                    </svg>
                </div>
                {/*ESTILISAR O INPUT E GERAR FUNÇOES*/}
                <input className="input_comments_style" id="input_comments" type="text" placeholder='Add a comment...' />
                <button>Publish</button>
            </div>
        </>
    )
}