
import '../../video_controls.scss'
import "../PostCard.scss"
import "../../PostModal/PostCardModal.scss"
import '../OverlayIframe.scss';
import fluidPlayer from 'fluid-player'
import './FluidPlayer.scss';
import 'plyr/dist/plyr.css';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import {
    format, render, cancel, register
} from 'timeago.js';

import useSWR from 'swr'
import { Post } from "../../../../types/types"
import { posts_like, posts_unlike } from "../../../../redux/posts_home/posts_home"
import { RootState, useAppSelector, useAppDispatch } from "../../../../redux/store"

import { BottomOptions } from "../../BottomOptions/BottomOptions"


//import { PlyrPlus } from 'plyrplus'; bliblioteca de terceiros


import {
    set_content_modal,
    close_modal
} from "../../../../redux/modal/reducer"


import { ModalState } from "../../interfaces"
import { Options } from 'plyr';
import axios from 'axios';
import Hls from 'hls.js';
import { Console } from 'console';
//import Hls from 'hls.js';
//import client from './axios';

interface VideoProps {
    urls: string;
    options?: any
}


interface FluidPlayerProps {
    videoId: string;
    options?: any//fluidPlayer.PlayerOptions;
}

const player_props = {
    layoutControls: {
        primaryColor: false,
        playButtonShowing: true,
        playPauseAnimation: true,
        fillToContainer: false,
        autoPlay: false,
        mute: false,
        doubleclickFullscreen: true,
        subtitlesEnabled: false,
        keyboardControl: true,
        layout: 'default',
        allowDownload: false,
        playbackRateEnabled: false,
        allowTheatre: true,
        loop: false,
        logo: {
            imageUrl: null,
            position: 'top left',
            clickUrl: null,
            opacity: 1
        },
        controlBar: {
            autoHide: true,
            autoHideTimeout: 3,
            animated: true,
        },

        htmlOnPauseBlock: {
            html: null,
            height: null,
            width: null
        },
        playerInitCallback: (function () { }),
        miniPlayer: {
            enabled: true,
            width: 400,
            height: 225
        }
    },
    vastOptions: {
        skipButtonCaption: 'Skip ad in [seconds]',
        skipButtonClickCaption: 'Skip ad <span class="skip_button_icon"></span>',
        adTextPosition: 'top left',
        adCTAText: 'Visit now!',
        adCTATextPosition: 'bottom right',
        vastTimeout: 5000,
        showPlayButton: false,
        maxAllowedVastTagRedirects: 1,

        vastAdvanced: {
            vastLoadedCallback: (function () { }),
            noVastVideoCallback: (function () { }),
            vastVideoSkippedCallback: (function () { }),
            vastVideoEndedCallback: (function () { })
        }
    }
}

export const FluidPlayer: React.FC<VideoProps> = ({ urls }) => {
    let self = useRef<any>(null);
    let player: any = null;
    const [currentTime, setCurrentTime] = useState<number>(0)

    const intervalRef = useRef<NodeJS.Timer | null>(null);

    useEffect(() => {
        if (!player) {
            player = fluidPlayer(self.current, {
                layoutControls: {
                    primaryColor: "#ffd369",
                    preload: 'none',
                    //posterImage: videoCoverUrl
                },
                
            });

            if (player) {
                

                //player.toggleControlBar(true);

                //VIDEO PASSA 2X MAIS RAPIDO
                // player.setPlaybackSpeed(1);

                player.on('play', function () {
                    //stopInterval()
                });

                player.on('leavefullscreen', () => {
                    player.rebuildControls();  // Força o rebuild dos controles do player
                });

                player.on('pause', function () {
                    _stopInterval_()
                    //setPause(true)
                });

                player.on("seeked", function (additionalInfo: any) {
                    console.log("Video is now seeked to:", additionalInfo.target.currentTime);

                    const videoElement = self.current;
    if (videoElement) {
        console.log("Video is now seeked to:", videoElement.currentTime);
    }
                });



                player.on('ended', function (additionalInfo: any) {
                    console.log('Video is now ended'
                        /*
                        VERIFICAR O REDUX E PROCURAR O ID DESTA LIVE E PEGAR OS PROXIMOS DADOS DA PROXIMA LIVE E ATUALIZAR O ESTADO
                         */

                        
                    );
                });

                player.on('playing', function (event: any, additionalInfo: any) {
                    console.log('Video is now playing');

                    intervalRef.current = setInterval(() => {
                        setCurrentTime(self.current?.currentTime);
                        //console.log("TIME", currentTime)
                        console.log("TIME2", currentTime)

                    }, 1000);

                    stopInterval()

                });

            }
        }
    }, [urls]);

    const _stopInterval_ = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const stopInterval = () => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    };

    return (
        <>
            <video
                className="video_player"
                controls={true}
                /*style={
                    {width:'100%',height:'75vh'}
                }*/
                ref={self}>
                <source src={urls}
                aria-controls=''

                    //title='1080p'
                    type='video/mp4'
                     />
            </video>
        </>
    );
}


