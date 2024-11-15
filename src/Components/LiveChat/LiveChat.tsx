import './LiveChat.scss';
//import "./styles.css";
import React, { useEffect, useState, useRef, Suspense, useCallback } from 'react';

import { fake_chat } from "../../Components/Post/fakehat";
import { RootState, useAppSelector } from '../../redux/store';


import { TimeState } from '../../redux/live_chat/LiveTimeSlice';
import { renderToString } from 'react-dom/server';
import axios from 'axios';

import { ChatMessageProps,ChatMessage, ChatData } from './interfaces';

import { useLiveChat } from './hooks/useLiveChat';

//o index sempre será a ultima mensagem que foi passada

const renderTextWithEmotes = (text: string, emotes: string[]) => {
  let result = text;
  emotes.forEach((emote, index) => {
    // Substitui {emote0}, {emote1}, etc. pelos emotes reais
    const placeholder = `{emote${index}}`;
    result = result.replace(new RegExp(placeholder, 'g'), emote);
  });
  return result;
};


const ChatMessageComponent = ({ message }: { message: ChatMessageProps }) => {

    const renderedText = renderTextWithEmotes(message.message.text, message.message.emotes || ["👋"]);

    return (
        <div className="message">
            <div className="message-content">
                <div className="message-header">
                    <h5 className="username">{message.user.username} :</h5>
                    {/*
                    <span className="timestamp">
                        {new Date(message.timestamp).toLocaleTimeString()}
                    </span>
                     */}
                </div>
                <div className="message-text">{renderedText}</div>
            </div>
        </div>
    );
};



interface IChatPlayer {
    urlChat:string
}
export const ChatPlayer = ({urlChat}:IChatPlayer) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [isChatVisible, setIsChatVisible] = useState(true);
    console.log("chat url :",urlChat)
    //const chatData: ChatMessage[] = fake_chat.chatLog

    //const originalUrl = "https://i-ramen.bunkr.ru/chat-zT7bL9ud.json";
    
    //live reduxs:
    let liveRedux = useAppSelector((state: RootState) => state.live_time);

    //const chatIsVisible = liveRedux.showChat
    console.log("URL EM CHAT PLAY",urlChat)
    console.log("TST liveRedux", liveRedux)
    console.log("TST isPlaying", liveRedux.isPlaying)
    console.log("TST currentTime", liveRedux.time)

    const { chatData } =  useLiveChat(urlChat);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        //setIsPlaying(liveRedux.isPlaying)
        console.log("TST isPlaying", liveRedux.isPlaying)
        if (liveRedux.isPlaying) {
            timer = setInterval(() => {
                setCurrentTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [liveRedux.isPlaying]);

    useEffect(() => {
        syncChat(liveRedux.time);
        //setIsPlaying(liveRedux.isPlaying);

    }, [liveRedux.time]);

    const syncChat = (time: number) => {
        if (chatContainerRef.current) {
            chatContainerRef.current.innerHTML = "";
            const visibleMessages: ChatMessage[] = [];

            for (let i = chatData?.chatLog?.length - 1; i >= 0; i--) {
                const chat = chatData?.chatLog[i];
                if (Number(chat?.timestamp) <= time) {
                    visibleMessages.unshift(chat);
                    if (visibleMessages.length === 20) break;
                }
            }

            visibleMessages.forEach(chat => {
                addChatMessage(chat);
            });
            scrollToBottom();
        }
    };

    const addChatMessage = (chatMessage: ChatMessage) => {
        if (chatContainerRef.current) {
            const messageElement = document.createElement("div");
            messageElement.className = "chat-message";
            /*
             messageElement.innerHTML = `
            <h5 class="username">${chatMessage.user.username}    :</h5>
            <p class="message">${chatMessage.message.text}</p>
          `;
             */
            messageElement.innerHTML = renderToString(ChatMessageComponent({ message: chatMessage }));
            chatContainerRef.current.appendChild(messageElement);
        }
    };

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    return (
        <>
            <div className={isChatVisible ? "chat" : "chat_hide"} id="chat" ref={chatContainerRef}></div>

        </>
    );
};
