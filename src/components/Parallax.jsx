'use client'

import { useEffect } from 'react';

const Parallax = ({ children, speed, id }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const translateY = scrollTop * speed;
      const me = document.getElementById(id)
      me ? me.style.transform = `translateY(${translateY}px)` : ''
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  return (
    <div id={id} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Parallax;
