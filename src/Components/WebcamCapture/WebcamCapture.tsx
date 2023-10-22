import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import "./WebcamCapture.scss";

import { useWebcam } from "./hooks/useWebcam";

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user"
};


export const WebcamCapture = () => {
    const { isCaptureEnable, setCaptureEnable,
        url, setUrl ,capture,webcamRef} = useWebcam()

    return (
        <div className='container_webcam'>
            {isCaptureEnable || (
                <button onClick={() => setCaptureEnable(true)}>start</button>
            )}
            {isCaptureEnable && (
                <>
                    <div className="webcam_button_end">
                        <button onClick={() => setCaptureEnable(false)}>end </button>
                    </div>
                    <div >
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
        </div>
    );
}