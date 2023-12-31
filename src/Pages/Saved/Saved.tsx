//import React, {ReactNode, useEffect, useState } from 'react'
import './Saved.scss'
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

import { RootState, useAppSelector, useAppDispatch, } from "../../redux/store"

function Home() {
  let user = useAppSelector((state: RootState) => state.persistedReducer).user.user
  console.log("TESTE AUTH", user.name)

  const { name } = useAuth()
  return (

    <div className='home__wrap wrapper'>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <main className="home__content">
        <HeaderMobile />
        <section className='section-main'>

          <div className='stories_and_posts'>
            <div className="main-stories">
              <Story />
            </div>
            <Posts />
          </div>
          <div className='section-recommendation'>
            <ADS />
          </div>
        </section>
        <BottomTab />
      </main>
    </div>

  );
}

export default Home;