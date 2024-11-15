import React, { ReactNode, useEffect, useState } from 'react'
import './Profile.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
//import { Link } from 'react-router-dom'
//import axios from "axios";
//import StoriesBar from '../StoriesBar/StoriesBar';
import ADS from '../../Components/Recommendation/Recommendation';
import Posts from "../../Components/Post/Posts"
//import { useSelector, useDispatch } from "react-redux"
//import rootReducer from '../../redux/root-reducer';
//import { Outlet } from "react-router-dom"
import { useAuth } from "../../AuthContext/AuthContext"

import Story from "../../Components/StoriesBar/Story"
import HeaderMobile from "../../Components/Header/Header"
import BottomTab from "../../Components/BottomTab/BottomTab"
import { Modal } from "../../Components/Modal/VideoModal"

//import { TestServerComponent2 } from "../../server/Teste.server"


import { PostModal } from "../../Components/Post/PostModal/PostModal"

import axios from 'axios'
//API
import {
  set_content_modal,
  close_modal
} from "../../redux/modal/reducer"

import { apiSlice } from "../../redux/api/apiSlice"

import { RootState, useAppSelector, useAppDispatch, } from "../../redux/store"
import { ModalState } from '../../Components/Post/interfaces';
//import ServerComponentTest from '../../ServerComponents/ServerComponent.server';
import PostsHome from '../../Components/Post/PostsHome';

import {useSEO} from '../../SEO/useSEO'
import { SearchModal } from '../../Components/search/SearchModal';

import {ProfileInfo} from './PerfilUserInfo'

export function Profile() {
  useSEO()

  let dispatch = useAppDispatch()
  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

  //let user = useAppSelector((state: RootState) => state.persistedReducer).user.user
  //console.log("TESTE AUTH", user.name)
  //let useGetHelloQuery = apiSlice.useGetHelloQuery

  //const useGetHelloQuery = apiSlice.endpoints.getHello.useQuery

  //const { data } = useGetHelloQuery('')

  //console.log("hello_res", data)




  //const { name } = useAuth()

  useEffect(() => {

  }, [modal_post])

  return (
    <>
      {/*<div className='home__wrap wrapper'> */}
      <div className='main_home home__wrap wrapper'>
        {modal_post.modal_state && < PostModal post={modal_post.post} />}
        {<SearchModal />}
        
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <main className="home__content">
          <HeaderMobile />
          <section className='section-main'>
            <ProfileInfo />


            {
              <div /*onClick={() => modal_post.modal_state ? dispatch(set_content_modal({modal_state: false})) : null}*/ className='stories_and_posts'>
                {/*
              <div className="main-stories">
                <Story />
              </div>
               */}
                {/*<Story /> */}
                <PostsHome />
                {/*<ServerComponentTest />*/}
               
              </div>
            }
            {/*
            <div className='section-recommendation'>
              <ADS />
            </div>
             */}
          </section>
          <BottomTab />
        </main>
      </div>
    </>
  );
}

