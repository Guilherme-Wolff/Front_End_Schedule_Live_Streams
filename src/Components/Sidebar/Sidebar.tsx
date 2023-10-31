import React, { useEffect, useState, useRef } from 'react'
import './Sidebar.scss'
import { useLocation, Link } from 'react-router-dom'
import Followers from "../popups/followers";
import CreatePubs from "../popups/CreatePub/CreatePub";
import EditCrop from "../popups/CreatePub/EditCrop";
import Search from "../search/Search";
import { MoreSettings } from '../MoreSettings/MoreSettings';

import {LogoSave} from "../Logo/LogoSave"

interface ModalPosition {
  top: number;
  left: number;
}

export function SideBar() {
  const [smallSidebar, IsSmallSidebar] = useState(false)

  let location = useLocation()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState<ModalPosition>({ top: 0, left: 0 });
  console.log("POSIÇAO MODAL", modalPosition)

  const buttonRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [home, IsHome] = useState(Boolean)
  const [profile, IsProfile] = useState(Boolean)
  const [explore, IsExplore] = useState(Boolean)
  const [reels, Isreels] = useState(Boolean)
  const [inbox, IsInbox] = useState(Boolean)
  const [createPubs, iscreatePubs] = useState(false)

  const [showSearch, SetShowSearch] = useState(false)
  const [showNotificarions, SetShowNotificarions] = useState(false)
  const [crop, setCrop] = useState(false)
  const [cropImage, setCropImage] = useState('')
  const [moreSetting, ismoreSettings] = useState(false)

  const [cropedImage, setCropedImage] = useState('')

  const openModal = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      isModalOpen &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      closeModal();
    }
  };


  function ChangeCreatePopup(url: string) {
    iscreatePubs(false)
    document.body.style.overflowY = 'scroll'
    setCrop(true)
    setCropImage(url)
  }


  function CloseAllPopup() {
    setCrop(false)
    document.body.style.overflowY = 'scroll'
    iscreatePubs(false)
  }


  function ChangeCropPopup(props: string) {
    setCropedImage(props)
  }



  function GoToCreate() {
    iscreatePubs(true)
    setCrop(false)
    console.log(1)
  }

 
  useEffect(() => {

    if (location.pathname == '/') {
      IsHome(true)
    } else if (location.pathname == '/profile') {
      IsProfile(true)
    } else if (location.pathname == '/explore') {
      IsExplore(true)
    } else if (location.pathname == '/reels/videos/*') {
      Isreels(true)
    }
    else if (location.pathname.includes('/inbox')) {
      IsInbox(true)
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [])


  return (

    <div className="fixed">
      {cropedImage && <div style={{ width: "999px", height: "999px" }}>
        <img src={cropedImage} alt="" />
      </div>}

      <div className='sidebar__wrap'>
        <div className={`sidebar__content ${smallSidebar ? 'sidebar_width_small' : 'sidebar_width_default'}`}
          style={smallSidebar ? { width: '73px' } : { width: '15%' }}
        >
          <Link to="/">
         { < LogoSave smallSidebar={smallSidebar}/>}
            {
              /**
               <svg
              className={`sidebar__instagram__logo__small ${smallSidebar ? 'show_logo' : 'close_logo'}`}
              //className="sidebar__instagram__logo__small"
              aria-label="Instagram"
              //style={smallSidebar ? { display: "block" } : { display: "none" }} color="#fafafa"
              fill="#fafafa" height="24"
              role="img" viewBox="0 0 24 24" width="24"

            >

              <path
                d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
            </svg>
               */
            }
            

            <img className={`sidebar__instagram__logo ${smallSidebar ? 'close_logo' : 'show_logo'}`}
              //style={smallSidebar ? { display: "none" } : { display: "block" }}
              src="../images/logo.png" alt="" />
          </Link>
          <ul>
            <Link to="/">
              <li>
                {/* homenotactive.png */}
                {/* ./images/sidebar/home.png */}
                <svg aria-label="home" style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                  className="_ab6-" color="#fafafa" fill="#fafafa" height="24"
                  role="img" viewBox="0 0 24 24" width="24">
                  <path
                    d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                    fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"
                    style={home ? { fill: "#fff" } : { fill: "none" }}></path>
                </svg>
                {smallSidebar ? '' : <p className='text-sidebar-button'>home</p>}
              </li>
            </Link>
            <Link to="#" onClick={() => {
              if (moreSetting) {
                ismoreSettings(false)

                SetShowSearch(!showSearch)

              }
              else {
                SetShowSearch(!showSearch)
                IsSmallSidebar(!smallSidebar)
                SetShowNotificarions(false)
              }

            }}>
              <li style={showSearch ? {
                border: "1px solid #fff",
                borderRadius: "100px"
              } : { border: "none", }}>
                <img style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                  src="../images/sidebar/search.png" alt="" />
                {smallSidebar ? null : <p className='text-sidebar-button'>Search</p>}
              </li>
            </Link>
            {/*
            <Link to="/explore">
              <li>
                <img style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                  src={explore ? "../images/sidebar/interestActive.png" : "../images/sidebar/interest.png"}
                  alt="" />
                {smallSidebar ? '' : <p className='text-sidebar-button'>Interesting</p>}
              </li>
            </Link> 
            */}
            {
              /*
               <Link to="/reels/videos/">
                <li>
                  <img style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                    src={reels ? "../images/sidebar/reels.png" : "../images/sidebar/reels.png"}
                    alt="" />
                  {smallSidebar ? '' : <p className='text-sidebar-button'>Reels</p>}
                </li>
              </Link> 
              */
            }
            {
              /*
               <Link to="/inbox">
                <li>
                  {inbox ?
                    <svg style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                      aria-label="Messenger" color="#fafafa" fill="#fafafa" height="24" role="img"
                      viewBox="0 0 24 24" width="24">
                      <path
                        d="M12.003 1.131a10.487 10.487 0 0 0-10.87 10.57 10.194 10.194 0 0 0 3.412 7.771l.054 1.78a1.67 1.67 0 0 0 2.342 1.476l1.935-.872a11.767 11.767 0 0 0 3.127.416 10.488 10.488 0 0 0 10.87-10.57 10.487 10.487 0 0 0-10.87-10.57Zm5.786 9.001-2.566 3.983a1.577 1.577 0 0 1-2.278.42l-2.452-1.84a.63.63 0 0 0-.759.002l-2.556 2.049a.659.659 0 0 1-.96-.874L8.783 9.89a1.576 1.576 0 0 1 2.277-.42l2.453 1.84a.63.63 0 0 0 .758-.003l2.556-2.05a.659.659 0 0 1 .961.874Z"></path>
                    </svg> :
                    <svg style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                      aria-label="Messenger" color="#fafafa" fill="#fafafa" height="24" role="img"
                      viewBox="0 0 24 24" width="24">
                      <path
                        d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                        fill="none" stroke="currentColor" strokeMiterlimit="10"
                        strokeWidth="1.739"></path>
                      <path
                        d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                        fillRule="evenodd"></path>
                    </svg>}
                  {smallSidebar ? '' : <p className='text-sidebar-button'>Messages</p>}
                </li>
              </Link>
              */
            }
            {/*
            <Link id="click_notifications" to="#" onClick={() => {
              if (showSearch) {
                IsSmallSidebar(true)
                SetShowSearch(false)
                SetShowNotificarions(!showNotificarions)

              }
              else {
                //SetShowSearch(false)
                showNotificarions ?
                  IsSmallSidebar(false) :
                  IsSmallSidebar(true)

                //IsSmallSidebar(true)
                SetShowNotificarions(!showNotificarions)

              }

            }}>
              <li style={showNotificarions ? {
                border: "1px solid #fff",
                borderRadius: "100px"
              } : { border: "none", }}>
                {showNotificarions ? <svg style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                  aria-label="Notifications" className="_ab6-" color="#fafafa"
                  id="Label_Notifications"
                  fill="#fafafa"
                  height="24" role="img" viewBox="0 0 48 48" width="24">
                  <path
                    d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg> : <img style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                  src="../images/sidebar/notification.png" alt="" />
                }

                {smallSidebar ? '' : <p className='text-sidebar-button'>Notifications</p>}
              </li>
            </Link>
             */}
            {/*
            <Link to="#" onClick={() => iscreatePubs(true)}>
              <li>
                <img style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" }}
                  src="../images/sidebar/newpub.png" alt="" />
                {smallSidebar ? '' : <p className='text-sidebar-button'>Create</p>}
              </li>
            </Link>
             */}

            {/*
            <Link to="/profile">
              <li>
                <img
                  style={smallSidebar ? { margin: "0 auto" } : { margin: "0px" } && profile ? { border: "2px solid rgb(250, 250, 250)" } : { border: 0 }}
                  className='sidebar__profile__image' src="../images/profileImage.jpg" alt="" />
                {smallSidebar ? '' : <p className='text-sidebar-button' >Profile</p>}
              </li>
            </Link>
            
             */}
             <div className="more__sidebar__end">
            {
              moreSetting && (
                <div style={{ top: modalPosition.top, left: modalPosition.left }} className='more__settings'>
                  <MoreSettings />
                </div>
              )
            }


            <div className='sidebar__more__wrap' ref={buttonRef} onClick={() => {

              if (showNotificarions || showSearch) {

                SetShowNotificarions(false)
                SetShowSearch(false)

              }
              ismoreSettings(!moreSetting)
              IsSmallSidebar(!smallSidebar)
              openModal()
            }}>
              <img src="../images/Sidebar/more.png" alt="" />
              {smallSidebar ? '' : <p className='text-sidebar-button'>More</p>}
            </div>
          </div>

          </ul>
          
        </div>
      </div>
      {showSearch && <div className="search__wrap">
        <Search />
      </div>}
      {showNotificarions && <div className="not__wrap">
        <div className="search__input__title">
          <h1>Notifications</h1>
        </div>
        <div className="ontime">
          <p className="ontime__time">this week</p>
          <div className="ontime__notification">
            <img src="../images/users/1.jpg" alt="" />
            <div>
              <p><span className="bold700">name1 </span> subscribed to your updates. </p>
            </div>
            <button>
              Subscriptions
            </button>
          </div>
          <div className="ontime__notification">
            <img src="../images/users/1.jpg" alt="" />
            <div>
              <p><span className="bold700">name2 </span> subscribed to your updates. </p>
            </div>
            <button className="not__followed">
              Subscribe
            </button>
          </div>
        </div>
      </div>}
      {createPubs &&
        <CreatePubs ChangeFolllowersPopup={ChangeCreatePopup} CloseAllPopup={CloseAllPopup} />
      }
      {crop &&
        <EditCrop
          cropImage={cropImage}
          GotoPrev={GoToCreate}
          CloseAllPopup={CloseAllPopup}
          ChangeCropPopup={ChangeCropPopup}
        />
      }
      {/*teste*//*<EditCrop cropImage={cropImage} ChangeCropPopup={ChangeCropPopup}/>*/}

    </div>
  );
}

export default SideBar;
