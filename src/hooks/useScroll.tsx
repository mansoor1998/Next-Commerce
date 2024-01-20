import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    setScrollPos(window.pageYOffset);

    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPos;
};

export default useScroll;
