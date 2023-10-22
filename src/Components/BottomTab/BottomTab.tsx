import React, { useEffect, useState, useRef } from 'react'
import './BottomTab.scss'
import { useLocation, Link } from 'react-router-dom'
import Followers from "../popups/followers";
import CreatePubs from "../popups/CreatePub/CreatePub";
import EditCrop from "../popups/CreatePub/EditCrop";
import Search from "../search/Search";

function BottomTab() {
  const [smallSidebar, IsSmallSidebar] = useState(true)

  let location = useLocation()

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
  }, [])


  return (
    <div className='div-bottom-tab'>
      <div className="fixed-mobile">
        <div className='sidebar__wrap__mobile'>
          <div className="sidebar__content__mobile">
            <ul className="bottom-tab-ul">
              <Link className="elements-bottom" to="/">
                <li>
                  {/* homenotactive.png */}
                  {/* ./images/sidebar/home.png */}
                  <svg aria-label="home" style={{ margin: "0 auto" }}
                    className="_ab6-" color="#fafafa" fill="#fafafa" height="24"
                    role="img" viewBox="0 0 24 24" width="24">
                    <path
                      d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                      fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"
                      style={home ? { fill: "#fff" } : { fill: "none" }}></path>
                  </svg>
                  {smallSidebar ? '' : <p>home</p>}
                </li>
              </Link>

              <Link to="/explore">
                <li>
                  <img style={{ margin: "0 auto" }}
                    src={explore ? "../images/sidebar/interestActive.png" : "../images/sidebar/interest.png"}
                    alt="" />
                  {smallSidebar ? '' : <p>Interesting</p>}
                </li>
              </Link>
              <Link to="/reels/videos/">
                <li>
                  <img style={{ margin: "0 auto" }}
                    src={reels ? "../images/sidebar/reels.png" : "../images/sidebar/reels.png"}
                    alt="" />
                  {smallSidebar ? '' : <p>Reels</p>}
                </li>
              </Link>
              <Link to="#" onClick={() => iscreatePubs(true)}>
                <li>
                  <img style={{ margin: "0 auto" }}
                    src="../images/sidebar/newpub.png" alt="" />
                  {smallSidebar ? '' : <p>Create</p>}
                </li>
              </Link>
              <Link to="/inbox">
                <li>
                  {inbox ?
                    <svg style={{ margin: "0 auto" }}
                      aria-label="Messenger" color="#fafafa" fill="#fafafa" height="24" role="img"
                      viewBox="0 0 24 24" width="24">
                      <path
                        d="M12.003 1.131a10.487 10.487 0 0 0-10.87 10.57 10.194 10.194 0 0 0 3.412 7.771l.054 1.78a1.67 1.67 0 0 0 2.342 1.476l1.935-.872a11.767 11.767 0 0 0 3.127.416 10.488 10.488 0 0 0 10.87-10.57 10.487 10.487 0 0 0-10.87-10.57Zm5.786 9.001-2.566 3.983a1.577 1.577 0 0 1-2.278.42l-2.452-1.84a.63.63 0 0 0-.759.002l-2.556 2.049a.659.659 0 0 1-.96-.874L8.783 9.89a1.576 1.576 0 0 1 2.277-.42l2.453 1.84a.63.63 0 0 0 .758-.003l2.556-2.05a.659.659 0 0 1 .961.874Z"></path>
                    </svg> :
                    <svg style={{ margin: "0 auto" }}
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
                  {smallSidebar ? '' : <p>Messages</p>}
                </li>
              </Link>
              <Link to="/profile">
                <li>
                  {/*  */}
                  <img
                    style={{ margin: "0 auto" } && profile ? { border: "2px solid rgb(250, 250, 250)" } : { border: 0 }}
                    className='sidebar__profile__image' src="../images/profileImage.jpg" alt="" />
                  {smallSidebar ? '' : <p>Profile</p>}
                </li>
              </Link>

            </ul>

          </div>
        </div>
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
    </div>
  );
}

export default BottomTab;
