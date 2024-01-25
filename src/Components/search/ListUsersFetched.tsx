import '../Sidebar/Sidebar.scss'
import React, { useEffect, useState } from "react";
import axios from "axios";



let API: string = " http://localhost:8080/"

interface Searched_names {
    users: {
        user_image: string;
        username: string;
        complete_name: string;
    }
}

export default function ListUsersFetched(usersFetched: any) {
    //dispatch(recent_searches(postDataDispatch))
    console.log("Listando usuarios buscado")
    // console.log("USER_RECENTS-2",users)

    //const users = useSelector((state:RootState)=>state.recent)
    //console.log("aaaaaaaaaa",users)

    function VerifyInputSearchSize(input: string): boolean {
        if (input.length > 0) {
            return true
        }
        else {
            return false
        }

    }



    return (
        <>
            <div className="search__input__title">
                <h1>Search query</h1>
                <div className="search__input">
                </div>
            </div>
            <div className="recent__searched__users__title">
                <h3>Recent</h3>
                <button>clear all</button>
            </div>
            <div className="recent__users__wrap">
                {
                    usersFetched && usersFetched.map((users: {
                        user_image: string;
                        username: string; complete_name: string;
                    }
                    ) => (
                        <div className="recent__user">
                            <div className="recent__user__info">
                                <img src={users.user_image} alt="" />
                                <div>
                                    <h4>{users.username}</h4>
                                    <p>{users.complete_name}</p>
                                </div>
                            </div>
                            <svg aria-label="close" className="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="16"
                                role="img"
                                viewBox="0 0 24 24" width="16">
                                <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline>
                                <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                            </svg>
                        </div>
                    )
                    )}
            </div>
        </>
    )
}