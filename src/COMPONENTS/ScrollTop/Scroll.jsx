import React, { useState, useEffect } from 'react';
import './Style.scss';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Define the scroll event handler function
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  // Use a variable to define the CSS class for visibility
  const buttonClassName = `scroll-to-top-button ${isVisible ? 'visible' : ''}`;

  return (
    <div className={buttonClassName} onClick={scrollToTop}>
      <i className="fa fa-angle-double-up" aria-hidden="true"></i>
    </div>
  );
};

export default ScrollToTop;
