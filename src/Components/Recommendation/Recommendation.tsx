import "./Recommendation.scss"

export default function Recomendation () {
    return (
        <div className="other__accaunt__and__followers">
                    <div className="own__accaunt">
                        <img className="user-img" src="../images/profileImage.jpg" alt=""/>
                        <div>
                            <h4>Guilherme</h4>
                            <p>Guilherme</p>
                        </div>
                        <div className="cursorpointer-switch"><span className="">switch</span></div>
                    </div>
                    <div className="recomentded__info">
                        <p>Recommendations for you</p>
                        <a className="all_Recommendations" href="/#">all</a>
                    </div>
                    <div className="recomended__accaunts">
                        <div className="recomended__account__wrap">
                            <div className="recomended__accaunt">
                                <div className='recomended__user__main__info'>
                                    <img className="recommended_users_img" src="../images/users/1.jpg" alt=""/>
                                    <div className='who__is__this__user'>
                                        <h4>User1</h4>
                                        <span className="tiny-text">
                      Recommendations for you
                    </span>
                                    </div>
                                </div>
                                <button className="cursorpointer">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="recomended__account__wrap">
                            <div className="recomended__accaunt">
                                <div className='recomended__user__main__info'>
                                    <img src="../images/users/2.jpg" alt=""/>
                                    <div className='who__is__this__user'>
                                        <h4>User2</h4>
                                        <span className="tiny-text">
                      Recommendations for you
                    </span>
                                    </div>
                                </div>
                                <button className="cursorpointer">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="recomended__account__wrap">
                            <div className="recomended__accaunt">
                                <div className='recomended__user__main__info'>
                                    <img src="../images/users/3.jpg" alt=""/>
                                    <div className='who__is__this__user'>
                                        <h4>User3</h4>
                                        <span className="tiny-text">
                      Recommendations for you
                    </span>
                                    </div>
                                </div>
                                <button className="cursorpointer">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="recomended__account__wrap">
                            <div className="recomended__accaunt">
                                <div className='recomended__user__main__info'>
                                    <img src="../images/users/1.jpg" alt=""/>
                                    <div className='who__is__this__user'>
                                        <h4>User4</h4>
                                        <span className="tiny-text">
                      Recommendations for you
                    </span>
                                    </div>
                                </div>
                                <button className="cursorpointer">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}