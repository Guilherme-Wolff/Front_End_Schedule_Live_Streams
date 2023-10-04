import React, {useEffect, useState, useCallback} from 'react'
import {Link} from 'react-router-dom'
import Cropper from 'react-easy-crop'
import getCroppedImg from "../../cropImage";
import '../../settings.scss'
import '../../../css/createPubs.scss'


function Popup(props) {
    const [crop, setCrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(-1)
    const [initialCroppedArea, setInitialCroppedArea] = useState(undefined)
    const [croppedAreaPixels, setcroppedAreaPixels] = useState()
    const [ImageCOped, setImageCOped] = useState('')

    const handleChange = (e)=> {
        console.log(e.target.value)
    }


    useEffect(() => {
        let container = document.querySelector('.reactEasyCrop_Container')

        container.addEventListener('grab', () => {
            console.log('start')
        })


    }, [])


    const Selected = () => {
        console.log(1)
    }


    const onCrop = async () => {
        const croppedImageUrl = await getCroppedImg(props.cropImage, croppedAreaPixels)
        props.ChangeCropPopup(croppedImageUrl)
    }

    useEffect(() => {
        const croppedArea = JSON.parse(window.localStorage.getItem('croppedArea'))
        setInitialCroppedArea(croppedArea)
    }, [])

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        // console.log(croppedArea, croppedAreaPixels)
        // window.localStorage.setItem('croppedArea', JSON.stringify(croppedArea))

        setcroppedAreaPixels(croppedAreaPixels)

    }, [])

    const GoToCreate = async () => {
        await props.GoToCreate
        console.log(2)
    }


    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <div className="popup">

            <div className="popupdetailfwpruhwe">
                {/* Close button */}
                <div onClick={props.CloseAllPopup} className="closepopupicon">
                    <svg aria-label="Закрыть" className="closepopup" color="#ffffff" fill="#ffffff"
                         height="18"
                         role="img" viewBox="0 0 24 24" width="18"><title>Закрыть</title>
                        <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647"
                                  stroke="currentColor"
                                  strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="3"></polyline>
                        <line fill="none" stroke="currentColor" strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                    </svg>
                </div>
                <div className="modfdfsdafasal-content createPubsfdfsdafasal-content" style={{zIndex: 9879789789789}}>
                    <div className="modal-content model-content-fooo popup__cretePubs">
                        <div className="following__wrapper">
                            <div className="following__title">
                                <div className="icon__with__padding" onClick={props.GotoPrev}>
                                    <svg aria-label="Назад" color="#fafafa" fill="#fafafa" height="24"
                                         role="img" viewBox="0 0 24 24" width="24">
                                        <line fill="none" stroke="currentColor" strokeLinecap="round"
                                              strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004"
                                              y2="12.004"></line>
                                        <polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274"
                                                  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"></polyline>
                                    </svg>
                                </div>
                                <h1>Обрезать</h1>
                                <button onClick={onCrop}>
                                    crop
                                </button>
                            </div>
                            <div className="upload__content">
                                <div className="upload__content__wrapp" style={{overflow: "hidden"}}>
                                    <div className="editting__image">
                                        <Cropper
                                            image={props.cropImage}
                                            crop={crop}
                                            zoom={zoom}
                                            aspect={16 / 9}
                                            onCropChange={setCrop}
                                            onCropComplete={onCropComplete}
                                            onZoomChange={setZoom}
                                            initialCroppedAreaPercentages={initialCroppedArea}
                                        />
                                    </div>
                                </div>
                            </div>
                            <select value={props.value}  onChange={(e)=> handleChange(e)}>
                                <option value="Оригинал">
                                    Оригинал
                                </option>
                                <option value={"1:1"}>
                                    1:1
                                </option>
                                <option value={"4:5"}>
                                    4:5
                                </option>
                                <option value={"16:9"}>
                                    16:9
                                </option>
                                <option value={'2:2'} >2:2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;