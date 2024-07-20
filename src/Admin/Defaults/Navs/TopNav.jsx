import React, { useState, useEffect } from 'react';
import './Style.scss';
import brand from '../Assets/brand.png';

function TopNav() {
  const [isDayMode, setIsDayMode] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    updateTheme(isDayMode);
    updateGreeting();
  }, [isDayMode]);

  const toggleDayNightMode = () => {
    setIsDayMode(!isDayMode);
  };

  const handleLogout = () => {
    // Implement the logout logic here
  };

  const updateTheme = (isDayMode) => {
    document.documentElement.style.setProperty(
      '--background-color',
      isDayMode ? 'white' : 'black'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      isDayMode ? 'black' : 'white'
    );
  };

  const updateGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning Admin');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good Afternoon Admin');
    } else if (currentHour >= 17 && currentHour < 21) {
      setGreeting('Good Evening Admin');
    } else {
      setGreeting('Good Night Admin');
    }
  };

  return (
    <nav className={`top-nav ${isDayMode ? '' : 'night'}`}>
      <div className="logo">
        <a href="dashboard">
          <img src={brand} alt="Algoquant" className="brand" />
        </a>
      </div>
      <div className="left-section">
        <div className="greeting">{greeting}</div>
      </div>
      <div className="buttons">
        <button className="day-night-button" onClick={toggleDayNightMode}>
          {isDayMode ? '🌞' : '🌜'}
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default TopNav;
