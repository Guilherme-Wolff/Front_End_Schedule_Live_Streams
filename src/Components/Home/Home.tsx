//import React, {ReactNode, useEffect, useState } from 'react'
import './Home.scss'
import Sidebar from '../Sidebar/Sidebar'
//import { Link } from 'react-router-dom'
//import axios from "axios";
//import StoriesBar from '../StoriesBar/StoriesBar';
import Recommendation from '../Recommendation/Recommendation';
import Posts from "../Post/Posts"
//import { useSelector, useDispatch } from "react-redux"
//import rootReducer from '../../redux/root-reducer';
//import { Outlet } from "react-router-dom"
import Story from "../StoriesBar/Story"
import HeaderMobile from "../Header/Header"
import BottomTab from "../BottomTab/BottomTab"

function Home() {
  return (
    <>
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
              <Recommendation />
            </div>
          </section>
          <BottomTab />
        </main>
      </div>
    </>
  );
}

export default Home;