import React from 'react'
import './Frame.scss'
import {Link} from 'react-router-dom'

function App() {
    return (
        <div className='inbox__frames '>
            <div className="inbox__username">
                <div className='chat__username'>
                    <p>Guilherme</p>
                    <div className="fsad">
                        <span className='rotate180'>
                            <svg className='' aria-label="Icon &quot;arrow to down&quot;" color="#fafafa" fill="#fafafa" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
                        </span>
                    </div>
                </div>
                <svg aria-label="A new message" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
            </div>
            <div className="users__wrap">
                <div className="users__frame">
                    <Link to="/inbox/14564">
                        <div className="user">
                            <img src="../images/users/1.jpg  " alt="" />
                            <div>
                                <h5>Complete Name</h5>
                                <p>Last Message ...</p>
                            </div>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default App;
