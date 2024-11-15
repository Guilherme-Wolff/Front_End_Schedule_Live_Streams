import '../video_controls.scss'
import "./Player.scss"
import React, { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import { Link } from 'react-router-dom';

import ReactPlayer from 'react-player';

import { streamers_path } from "../../../paths"

import 'plyr/dist/plyr.css';

import { useAppDispatch } from "../../../redux/store"

import {
    addChat
} from "../../../redux/live_chat/LiveChatSlice"

import {
    updateTime,
    isPlaying
} from "../../../redux/live_chat/LiveTimeSlice"
import { useDispatch } from 'react-redux';
import { ExclamationTriangleIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

interface VideoProps {
    urls: string;
}

export const Player: React.FC<VideoProps> = ({ urls }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    let url :string = '';
    if(urls){
        url = urls;
    }


    let dispatch = useAppDispatch()

    return (
        <ReactPlayer
            autoPlay={true}
            config={{
                file: {
                    attributes: {
                        preload: 'auto'
                    }
                }
                
            }}
            light={urls}
            previewTabIndex={0}
            playIcon={<PlayCircleIcon className='play_icon' width={64} height={64} />}
            
            playIconColor='#000'
            permissionDeniedIcon={<ExclamationTriangleIcon />}
            responsive={true}
            resolution={720}
            width='100%'

            height={`${window.innerHeight - 100}px`}
            maxHeight='100%'

            //className="react_player"
            className={isFullscreen ? 'video_player_fullscreen' : 'video_player'}

            //style={{width: '100%', height: '100%'}}
            url={!url.includes("http") ? `https://pd.cybar.xyz/${urls}` : urls}
            controls
            onProgress={({ playedSeconds }) => {
                console.log('Tempo atual:', playedSeconds)
                dispatch(updateTime({ time: playedSeconds, isPlaying: true, showChat: false }))

            }}
            onSeeked={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                dispatch(updateTime({ time: e.currentTarget.currentTime, isPlaying: true, showChat: false }))
            }}

            onPlay={() => {
                console.log('Video played')
                dispatch(isPlaying(true))
            }}
            onPause={() => {
                console.log('Video Paused')
                dispatch(isPlaying(false))
            }}
            onEnded={() => {
                console.log('Video Ended')
                dispatch(isPlaying(false))
            }}
            enterFullscreen={() => setIsFullscreen(true)}
            exitFullscreen={() => setIsFullscreen(false)}



        /*style={
            isFullscreen ? { objectFit: 'contain' } : { objectFit: 'cover' }
        }*/
        />
    )

};