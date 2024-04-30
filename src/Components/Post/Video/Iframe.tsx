import React, { Suspense, useEffect, useState } from 'react';

interface IframeProps {
  src: string;
}

export const Iframe: React.FC<IframeProps> = ({ src }) => {

  const [iframeLoaded, setIframeLoaded] = useState(false);

  const [fallback_, setIFallback_] = useState(true);



  useEffect(() => {


  }, []);


  return (



    <Suspense >

      <iframe
        src={src}
        frameBorder={0}

        allowFullScreen={true}



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

        onLoad={() => setIframeLoaded(true)
          //setIFallback_(false)
        }
      // Define a largura da borda do frame como 0 para remover as bordas
      //style={{ display: iframeLoaded ? 'block' : 'none' }} // Controla a exibição do iframe
      />
    </Suspense>

  );
};