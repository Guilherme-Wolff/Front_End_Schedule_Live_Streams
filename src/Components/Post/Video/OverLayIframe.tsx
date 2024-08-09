import React, { useEffect } from 'react';
import '../video_controls.scss';
import './OverlayIframe.scss';
import { Iframe } from "./Iframe"
export const OverLayIframe: React.FC = () => {

    useEffect(() => {
        const iframe = document.getElementById('videoIframe') as HTMLIFrameElement;
        const overlayBar = document.getElementById('overlayBar') as HTMLDivElement;
        const chatContainer = document.getElementById('chat') as HTMLDivElement;
        const videoDuration = 5695;

        const handleIframeClick = (event: MouseEvent) => {
            if (!iframe) return;
            console.log('iframe clicked');
            const rect = iframe.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            console.log(`videoIframe 2: X: ${event.clientX} : Y:${event.clientY}`);
        };

        iframe?.addEventListener('click', handleIframeClick);

        const chatData = [
            { time: 5, message: "Olá a todos!" },
            { time: 10, message: "Bem-vindo ao vídeo!" },
            { time: 20, message: "Esta é uma mensagem de exemplo." },
            { time: 30, message: "Espero que gostem!" },
            { time: 50, message: "Olá a todos! 2" },
            { time: 100, message: "Bem-vindo ao vídeo!" },
            { time: 200, message: "Esta é uma mensagem de exemplo." },
            { time: 10000, message: "Espero que gostem!" }
        ];

        const addChatMessage = (message: string) => {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatContainer?.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        };

        const syncChat = (currentTime: number) => {
            chatData.forEach((chat) => {
                if (chat.time === Math.floor(currentTime)) {
                    addChatMessage(chat.message);
                }
            });
        };

        const observer = new MutationObserver(() => {
            console.log("mutaçao");
            if (iframe) {
                iframe.src = iframe.src;
            }
        });

        if (iframe) {
            observer.observe(iframe, { childList: true });
        }

        const handleOverlayClick = (event: MouseEvent) => {
            console.log('Overlay clicked! 1');

            if (!iframe) return;
            console.log('Overlay clicked! 2');
            const rect = iframe.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            console.log(`Overlay clicked 1 : X: ${x} : Y:${y}`);

            const clickedTime = Math.floor((x / rect.width) * videoDuration);
            console.log("TIME", clickedTime);
            syncChat(clickedTime);

            const currentSrc = iframe.src;
            const newSrc = currentSrc.split('#')[0] + `#t=${clickedTime}`;

            if (newSrc !== currentSrc) {
                console.log("diferente", newSrc);
                iframe.src = newSrc;
            }
            /*if (iframe.contentWindow) {
                iframe.contentWindow.location.reload();
            }*/

            const iframeClickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: false,
                view: window,
                clientX: event.clientX - rect.left,
                clientY: event.clientY - rect.top
            });

            //iframe.dispatchEvent(iframeClickEvent);
            console.log("URL", newSrc);
            

        };

        overlayBar?.addEventListener('click', handleOverlayClick);

        const handleMessage = (event: MessageEvent) => {
            console.log("event message", event);
            const currentTime = event.data;
            syncChat(currentTime);
        };

        window.addEventListener('message', handleMessage);

        const intervalId = setInterval(() => {
            // iframe.contentWindow.postMessage({ action: 'getCurrentTime' }, 'https://pixeldrain.com');
        }, 1000);

        return () => {
            iframe?.removeEventListener('click', handleIframeClick);
            overlayBar?.removeEventListener('click', handleOverlayClick);
            window.removeEventListener('message', handleMessage);
            clearInterval(intervalId);
        };
    }, []);

    return (

        <div id="overlayBar"></div>

    );
};
