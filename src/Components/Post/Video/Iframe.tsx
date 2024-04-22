import React, { useEffect } from 'react';

interface IframeProps {
    src: string;
}

export const Iframe: React.FC<IframeProps> = ({ src }) => {

    useEffect(() => {
  
  
    }, []);
  
  
    return (
      <iframe
        src={src}
        frameBorder={0}
  
        allowFullScreen={true}
  
  
  
        style={{
          border: 'none',
          width: '100vw',
          maxWidth: '100%',
          height: '80vh',
          maxHeight: '100%',
          borderRadius: '8px'
        }}
      ></iframe>
    );
  };