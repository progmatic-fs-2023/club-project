import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const {scrollY} = window;
    const footerPosition = document.querySelector('footer').getBoundingClientRect().top;
    /*     const containerBottomPosition = document.querySelector('container').getBoundingClientRect().bottom;
     */
    if (scrollY > 40 && footerPosition > window.innerHeight) {
      setIsVisible(true);
    } else if (footerPosition <= window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonStyle = {
    position: isVisible ? 'fixed' : 'absolute',
    bottom: isVisible ? '20px' : 'auto',
    right: '20px',
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? 'auto' : 'none',
  };

  return (
    <button style={buttonStyle} type="button" className="btn btn-light" onClick={scrollToTop} title="Go to top" aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
