/*import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useReferrer = () => {
  const [referrer, setReferrer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get original referrer
    const originalReferrer = document.referrer;

    // Replace with desired referrer
    navigate({ pathname: window.location.pathname, referrer: 'https://www.exemplo.com/' });

    // Save original referrer
    setReferrer(originalReferrer);

    return () => {
      // Restore original referrer on leaving the page
      navigate({ pathname: window.location.pathname, referrer: originalReferrer });
    };
  }, []);

  return referrer;
};*/