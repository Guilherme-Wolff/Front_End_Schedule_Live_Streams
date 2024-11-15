import React, { ReactNode, useEffect, useState } from 'react'
import { redirect } from 'react-router-dom';
import './Streamer.scss'
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
import { useParams } from 'react-router-dom';

import { PostModal } from "../../Components/Post/PostModal/PostModal"

//import TestServerComponent  from "../../server/Teste.server"
import { ModalState } from '../../Components/Post/interfaces';

import { NotFoundPage } from "../../Components/NotFound/NotFound"

import { supportedPlatforms } from "../../lists/supportedPlatforms"

import axios from 'axios'
//API
import { apiSlice } from "../../redux/api/apiSlice"

import { RootState, useAppSelector, useAppDispatch, } from "../../redux/store"
import { BiCurrentLocation } from 'react-icons/bi';
import path from 'path';
import { getLocale } from 'timeago.js/lib/register';

import { useSEO } from '../../SEO/useSEO'


/*export const VerifyPlatform = () => {
  const { platform, streamer_name } = useParams();
  if (!platform || !supportedPlatforms.includes(platform)) {
    // Redirecionar ou mostrar uma mensagem de erro, conforme necessário
    return (
      <div>
        plataforma nao aceita
      </div>
    )

  }
  else {
    return (
      <div>
        plataforma aceita
      </div>
    )
  }
}*/

export const VerifyPlatform = () => {
  const { platform } = useParams();
  if (!platform || !supportedPlatforms.includes(platform)) {
    // Redirecionar ou mostrar uma mensagem de erro, conforme necessário
    return false

  }
  else {
    return true
  }
}

export const Streamer = () => {
  useSEO()
  const { platform, streamer_name } = useParams();


  console.log("local", getLocale)

  const plat = VerifyPlatform()

  /*if (platform) {
    if (!supportedPlatforms.includes(platform)) {
      // Redirecionar ou mostrar uma mensagem de erro, conforme necessário
      redirect("/notfoud")
    }
  }*/



  //console.log("REGISTRO_TEST streamer", streamer_name)
  //let user = useAppSelector((state: RootState) => state.persistedReducer).user.user
  //console.log("TESTE AUTH", user.name)
  //let useParams = apiSlice.useParams
  //const useGetStreamerLivesQuery = apiSlice.endpoints.getStreamerLives.useQuery
  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

  //const { data } = useGetStreamerLivesQuery('')

 //console.log("STREAMER LIVES", data)

  const { name } = useAuth()

  useEffect(()=>{

  },[modal_post,platform,streamer_name])
  
  return (
    <>
      {/*<div className='home__wrap wrapper'> */}
      {plat ? <div className='main_home home__wrap wrapper'>
        {modal_post.modal_state && < PostModal post={modal_post.post} />}
        { }
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <main className="home__content">
          <HeaderMobile />
          <section className='section-main'>


            {
              <div className='stories_and_posts'>
                {/* <VerifyPlatform /> */}

                {/*
              <div className="main-stories">
                <Story />
              </div>
               */}
                {/*<Story /> */}
                <Posts />
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
      </div> : <NotFoundPage path={''} />}
    </>
  );
}
