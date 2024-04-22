import React, { useEffect } from 'react';

const RequestBlocker = ({ children }) => {
  useEffect(() => {
    // Intercepta fetch
    const originalFetch = window.fetch;
    window.fetch = async function(input, init) {
      if (typeof input === 'string' && !input.startsWith('https://sua-api.com')) {
        throw new Error('Requisição fetch bloqueada pelo RequestBlocker');
      }
      return originalFetch.apply(this, arguments);
    };

    // Intercepta XMLHttpRequest
    const originalXhrOpen = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
      if (!url.startsWith('https://sua-api.com')) {
        throw new Error('Requisição XHR bloqueada pelo RequestBlocker');
      }
      return originalXhrOpen.apply(this, arguments);
    };

    // Limpa a substituição de fetch e XMLHttpRequest ao desmontar o componente
    return () => {
      window.fetch = originalFetch;
      window.XMLHttpRequest.prototype.open = originalXhrOpen;
    };
  }, []);

  return <>{children}</>;
};

export default RequestBlocker;
