import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import './test.css'


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "red"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "green"}}
            onClick={onClick}
        />
    );
}


function App() {
    const settings = {
        // dots: true,

    };


    return (
        <div className="container">
            <Slider {...settings}>
                <div>
                    <img src="https://avatars.mds.yandex.net/get-verba/1672712/2a00000169576f759863fb9f206523d618eb/cattouch"/>
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200"/>
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200"/>
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200"/>
                </div>
            </Slider>
        </div>
    );
}

export default App;
