import React, { useEffect } from 'react'
import './chat.scss'
import SidebarResponsive from '../Sidebar/Sidebar'
import InboxFrame from './InboxFrame'
import SendMessage from './SendMessage'
import { Link } from 'react-router-dom'
import {ChatContainer} from "./ChatContainer/ChatContainer"
import {UserTestReceiving} from "./fake_messages/fake_messages"
import {useWebcam} from "../WebcamCapture/hooks/useWebcam"
import Webcam from 'react-webcam'
import '../WebcamCapture/WebcamCapture.scss'

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user"
};


function Chat() {
    const {setCaptureEnable,isCaptureEnable,capture,webcamRef,url,setUrl} = useWebcam()
    console.log("chat-cap",isCaptureEnable)
    useEffect(()=>{
    },[])
    return (
        <div className='chat_box inbox__wrap wrapper'>
            {SidebarResponsive()}
            
      {isCaptureEnable && (
                <>
                    <div className="webcam_button_end">
                        <button onClick={() => setCaptureEnable(false)}> end </button>
                    </div>
                    <div className='container_webcam' >
                        <Webcam
                            audio={false}
                            width={540}
                            height={360}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                        />
                    </div>
                    <button onClick={capture}>capture</button>
                </>
            )}
            {url && (
                <>
                    <div className="webcam_div_delete">
                        <button
                            className="webcam_button_delete"
                            onClick={() => {
                                setUrl(null);
                            }}
                        >
                            delete
                        </button>
                    </div>
                    <div>
                        <img src={url} alt="Screenshot" />
                    </div>
                </>
            )}
            <div className="inbox__content content">
                <div className="chat">
                    <InboxFrame />
                    
                    {ChatContainer(UserTestReceiving)}
                </div>
            </div>
        </div>
    );
}

export default Chat;
