import {
  recent_searches_array,
  recent_searches_remove_user
}
  from "../../redux/recent_users_seach/recentUsersSlice"

import { useAppDispatch } from "../../redux/store"
import { useSelector } from "react-redux"
import { SearchedNames } from "../../types/types"
import { Link, useNavigate, useLocation, redirect } from "react-router-dom"

export default function UserSearches({ user }: any): JSX.Element | null {
  const navigate = useNavigate();
  const location = useLocation();


  let dispatch = useAppDispatch()

  function GetValuesDivUsers(/*e: React.MouseEvent<any>*/) {
    //e.preventDefault()
    //console.log(e.currentTarget?.accessKey)
    if(user.username && user.platform && user.user_image){
      dispatch(recent_searches_array([user]))

    }
    const newPath = `/streamer/${user.platform}/${user.username}`;

    if (location.pathname !== newPath) {
      navigate(newPath);
      window.location.reload();
    } else {
      // Força uma atualização se estiver na mesma rota
      window.location.reload();
    }
   
  }


  function DeleteUsers(user: string) {
    console.log("DELETANDO:  ", user)
    dispatch(recent_searches_remove_user(user))
  }

  

  return (
    <Link  to={`/streamer/${user.platform}/${user.username}`} onClick={() => GetValuesDivUsers()}>
      <a  className="recent__users__wrap" /* onClick={(e) => GetValuesDivUsers(e)} */ >
        <div className="recent__user">


          <div className="recent__user__info">
            <img src={user.user_image} alt="" />
            <div>
              <h4>{user.username}</h4>
              <p>{user.platform}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}