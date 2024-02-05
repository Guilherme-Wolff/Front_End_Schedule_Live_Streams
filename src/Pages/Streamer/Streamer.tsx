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

import { TestServerComponent } from "../../server/Teste.server"
import { ModalState } from '../../Components/Post/interfaces';

import axios from 'axios'
//API
import { apiSlice } from "../../redux/api/apiSlice"

import { RootState, useAppSelector, useAppDispatch, } from "../../redux/store"


const supportedPlatforms = ['tiktok', 'twitch'];

let vds = [
  {
    name: 'video teste',
    video_url: 'https://kebab.bunkr.ru/12-22-2023-viajandonosofa-1-5T7HltjU.mp4'
  },
]

export const Streamer = () => {
  const { platform, streamer_name } = useParams();

  /*if (!platform || !supportedPlatforms.includes(platform)) {
    // Redirecionar ou mostrar uma mensagem de erro, conforme necessário
    return (
      <></>
    )
  }*/

  console.log("REGISTRO_TEST streamer", streamer_name)
  //let user = useAppSelector((state: RootState) => state.persistedReducer).user.user
  //console.log("TESTE AUTH", user.name)
  //let useGetHelloQuery = apiSlice.useGetHelloQuery
  const useGetHelloQuery = apiSlice.endpoints.getHello.useQuery
  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

  const { data } = useGetHelloQuery('')

  console.log("hello_res", data)

  const { name } = useAuth()
  return (
    <>
      {/*<div className='home__wrap wrapper'> */}
      <div className='main_home home__wrap wrapper'>
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
      </div>
    </>
  );
}
