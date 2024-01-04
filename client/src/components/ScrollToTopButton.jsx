import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;

    if (scrollY > 100) {
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
    bottom: isVisible ? '40px' : 'auto',
    right: '15px',
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? 'auto' : 'none',
    zIndex: '1002',
  };

  return (
    <button
      style={buttonStyle}
      type="button"
      className="btn btn-light"
      onClick={scrollToTop}
      title="Go to top"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
