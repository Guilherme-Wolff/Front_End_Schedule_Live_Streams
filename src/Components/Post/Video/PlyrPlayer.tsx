import '../video_controls.scss'
import "./PostCardHls.scss"
import "../PostModal/PostCardModal.scss"
import './OverlayIframe.scss';
import "./fluidplayer/FluidPlayer.scss"
import React, { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import { Link } from 'react-router-dom';

import ReactPlayer from 'react-player';



//import ReactHlsPlayer, { HlsPlayerProps } from 'react-hls-player';,

import { streamers_path } from "../../../paths"

//import Hls from "hls.js";
import Plyr, { usePlyr, APITypes, PlyrProps, PlyrInstance } from "plyr-react";
import 'plyr/dist/plyr.css';

import { useAppDispatch } from "../../../redux/store"

import {
    addChat
} from "../../../redux/live_chat/LiveChatSlice"

import {
    updateTime
} from "../../../redux/live_chat/LiveTimeSlice"
import { useDispatch } from 'react-redux';
import fluidPlayer from 'fluid-player';

interface VideoProps {
    urls: string;
}

export const PlyrPlayer: React.FC<VideoProps> = ({ urls }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    let dispatch = useAppDispatch()



    console.log("URL SRC", urls)
    const ref = useRef<APITypes>(null);



    /*const plyrOptions: PlyrProps["options"] = {
      controls: [
        'play-large', // The large play button in the center
        'restart', // Restart playback
        'rewind', // Rewind by the seek time (default 10 seconds)
        'play', // Play/pause playback
        'fast-forward', // Fast forward by the seek time (default 10 seconds)
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'duration', // The full duration of the media
        'mute', // Toggle mute
        'volume', // Volume control
        'captions', // Toggle captions
        'settings', // Settings menu
        'pip', // Picture-in-picture (currently Safari only)
        'airplay', // Airplay (currently Safari only)
        //'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
        'fullscreen' // Toggle fullscreen
      ],
   
    };
   
    const videoSource: PlyrProps["source"] = {
      type: 'video',
      sources: [
        {
          src: urls,
          type: 'video/mp4',
        },
      ],
    };*/






    useEffect(() => {

        const loadVideo = async () => {

            const video = document.getElementById("plyr") as HTMLVideoElement | any;

            if (urls.includes('mp4')) {
                video.src = urls;

                video.addEventListener('loadedmetadata', () => {
                    // video.play();
                    //(ref.current!.plyr as PlyrInstance).play();
                });
                video.addEventListener('loadeddata', () => {
                    //(ref.current!.plyr as PlyrInstance).play();
                    video.play();
                })

                video.addEventListener('enterfullscreen', () => {
                    //(ref.current!.plyr as PlyrInstance).play();
                    console.log("FULL ENTRAR")
                })

                const fullscreenchanged = (event: any) => {

                    if (document.fullscreenElement) {
                        console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
                    } else {
                        console.log("Leaving fullscreen mode.");
                    }
                }

                const playHandler = () => console.log('Video started playing');
                const pauseHandler = () => console.log('Video paused');
                const endedHandler = () => console.log('Video ended');
                const fullscreenChangeHandler = () => {
                    console.log("full")
                    setIsFullscreen(!isFullscreen);
                };

                const seekingHandler = (e: any) => console.log('Video seeking', e);

                const seekedHandler = (e: any) => {
                    console.log('Video seek ended', e)
                    //dispatch(updateTime(e.target.currentTime))
                    //updateTime(e.target.currentTime)

                }


                // Adicionar event listeners
                video.addEventListener('play', playHandler);
                video.addEventListener('pause', pauseHandler);
                video.addEventListener('ended', endedHandler);
                video.addEventListener('fullscreenchange', fullscreenchanged);



                video.addEventListener('seeking', seekingHandler);
                video.addEventListener('seeked', seekedHandler);







            }
            /*if (urls.includes('.m3u8')) {
              const hls = new Hls();
              hls.loadSource(urls);
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, () => {
                (ref.current!.plyr as PlyrInstance).play();
              });
            }*/
        };

        loadVideo();

    }, [urls]);



    return (
        <Plyr
            onSeeked={(e: any) => dispatch(updateTime(e.target.currentTime))}

            playsInline
            //className=''
            id="plyr"
            //className='plyr_mod'
            //options={plyrOptions}
            options={{
                volume: 0.5,
                fullscreen: { enabled: true, fallback: true, iosNative: true },
                // Adicionando object-fit: cover nas opções do Plyr
                ratio: '16:9',
                objectFit: 'cover'
            } as any}
            source={{} as PlyrProps["source"]}
            style={isFullscreen ? { objectFit: 'contain' } : { objectFit: 'cover' }}

            ref={ref}

        //crossOrigin={'use-credentials'}


        />
    );
};