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
  }, [speed]);

  return (
    <div id={id} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Parallax;
