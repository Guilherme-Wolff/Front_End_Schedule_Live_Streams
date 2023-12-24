import './Streamer.scss'
import React, {ReactNode, useEffect, useState } from 'react'
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
import {Modal} from "../../Components/Modal/VideoModal"

import {TestServerComponent} from "../../server/Teste.server"

import axios from 'axios'
//API
import { apiSlice } from "../../redux/api/apiSlice"

import { RootState, useAppSelector, useAppDispatch, } from "../../redux/store"

let vds = [
  {
    name:'video teste',
    video_url:'https://kebab.bunkr.ru/12-22-2023-viajandonosofa-1-5T7HltjU.mp4'
  },
]

export const  Streamer = () => {
  //let user = useAppSelector((state: RootState) => state.persistedReducer).user.user
  //console.log("TESTE AUTH", user.name)
  //let useGetHelloQuery = apiSlice.useGetHelloQuery
  const useGetHelloQuery = apiSlice.endpoints.getHello.useQuery

  const {data} = useGetHelloQuery('')

  console.log("hello_res", data)

  const { name } = useAuth()
  return (
    <>
      {/*<div className='streamer__wrap wrapper'> */}
      <div className='main_streamer streamer__wrap wrapper'>
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <main className="streamer__content">
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