import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

export const useWebcam = () => {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
        setUrl(imageSrc);
    }
}, [webcamRef]);


    return {
        isCaptureEnable,
        setCaptureEnable,
        url,setUrl,
        capture,
        webcamRef
    }
}