import React, { Suspense, useEffect, useState } from 'react';
import { OverLayIframe } from './OverLayIframe';
import './OverlayIframe.scss';


interface IframeProps {
  src: string;
}

export const Iframe: React.FC<IframeProps> = ({ src }) => {

  const [iframeLoaded, setIframeLoaded] = useState(false);

  const [newSrc, setNewSrc] = useState('');

  const iframe = document.getElementById('videoIframe') as HTMLIFrameElement;


  /*useEffect(() => {
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.addEventListener('message', (event) => {
       if (event.data && event.data.type === 'REFERER') {
           console.log("REFERER",event.data.referer)
        // setReferer(event.data.referer);
       }
     });
   }
 }, []);*/

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
        iframe.src = newSrc;
      }
    });

    if (iframe) {
      observer.observe(iframe, { childList: true });
    }

    const handleOverlayClick = (event: MouseEvent) => {
      if (!iframe) return;
      console.log('Overlay clicked!');
      const rect = iframe.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      console.log(`videoIframe 1 : X: ${x} : Y:${y}`);

      const clickedTime = Math.floor((x / rect.width) * videoDuration);
      console.log("TIME", clickedTime);
      syncChat(clickedTime);

      const currentSrc = iframe.src;
      const newSrc_ = currentSrc.split('#')[0] + `#t=${clickedTime}`;
      setNewSrc(newSrc_)

      if (newSrc_ !== currentSrc) {
        console.log("diferente", newSrc_);
        iframe.src = newSrc;
      }

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

    

    /*return () => {
      
      iframe?.removeEventListener('click', handleIframeClick);
      overlayBar?.removeEventListener('click', handleOverlayClick);
      window.removeEventListener('message', handleMessage);
      clearInterval(intervalId);
    };*/
  }, []);


  useEffect(() => {
    console.log("URL MUDOU",newSrc)
  }, [newSrc])

  return (



    <Suspense >

      <iframe
        id='videoIframe'
        src={newSrc ? newSrc :src}
        frameBorder={0}
        

        allowFullScreen={true}

        // onPlay={}



        style={{
          // position: 'relative',
          //zIndex: '1',
          display: iframeLoaded ? 'block' : 'none',
          border: 'none',
          width: '100vw',
          maxWidth: '100%',
          height: '80vh',
          maxHeight: '70vh',
          borderRadius: '8px'
        }}

        onLoad={() =>{ setIframeLoaded(true) 
          if(iframe?.contentWindow){
            iframe?.contentWindow.postMessage('play', '*');
          }

        }
                
          //setIFallback_(false)
        }
      // Define a largura da borda do frame como 0 para remover as bordas
      //style={{ display: iframeLoaded ? 'block' : 'none' }} // Controla a exibição do iframe
      />

    </Suspense>

  );
};