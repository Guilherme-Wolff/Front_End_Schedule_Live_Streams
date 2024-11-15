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


  }, []);


 /* useEffect(() => {
    console.log("URL MUDOU",newSrc)
  }, [])*/

  return (



    <Suspense >

      <iframe
        id='videoIframe'
        src={src}
        frameBorder={0}
        

        allowFullScreen={true}

        //onPlay={}
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
      
        }
                
          //setIFallback_(false)
        }
      // Define a largura da borda do frame como 0 para remover as bordas
      //style={{ display: iframeLoaded ? 'block' : 'none' }} // Controla a exibição do iframe
      />

    </Suspense>

  );
};