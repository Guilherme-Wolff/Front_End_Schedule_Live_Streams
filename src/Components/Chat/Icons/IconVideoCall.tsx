
import Webcam from "react-webcam"
import {useWebcam} from "../../WebcamCapture/hooks/useWebcam"

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user"
};

export const IconVideoCall = () => {
    const {setCaptureEnable,isCaptureEnable,capture,webcamRef} = useWebcam()
    console.log("icon-cap",isCaptureEnable)
    return (
        <>
        {isCaptureEnable || <div onClick={() => setCaptureEnable(true) } className='navbar__icons'>
            <svg aria-label="video call" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" rx="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16.999" x="1" y="3"></rect><path d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </div>
        }
        {/*isCaptureEnable && (
        <>
          <div>
            <button onClick={() => setCaptureEnable(false)}>end </button>
          </div>
          <div>
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
        )*/}
        </>
    )
}