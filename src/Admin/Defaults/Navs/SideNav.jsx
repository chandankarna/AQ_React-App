import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-nav ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleNav}>
        <div className={`bar ${isOpen ? 'bopen' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bopen' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bopen' : ''}`}></div>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">
            {isOpen ? (
              <span><i className="fa fa-home"></i> Dashboard</span>
            ) : (
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip className='tooltip-text' id="dashboard-tooltip">Dashboard</Tooltip>}
              >
                <i className="fa fa-home"></i>
              </OverlayTrigger>
            )}
          </Link>
        </li>
        <li>
          <Link to="/documents">
            {isOpen ? (
              <span><i className="fa fa-file"></i> Documents</span>
            ) : (
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip className='tooltip-text' id="documents-tooltip">Documents</Tooltip>}
              >
                <i className="fa fa-file"></i>
              </OverlayTrigger>
            )}
          </Link>
        </li>
        <li>
          <Link to="/profile">
            {isOpen ? (
              <span><i className="fa fa-user"></i> Profile</span>
            ) : (
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip className='tooltip-text' id="profile-tooltip">Profile</Tooltip>}
              >
                <i className="fa fa-user"></i>
              </OverlayTrigger>
            )}
          </Link>
        </li>
        <li>
          <Link to="/settings">
            {isOpen ? (
              <span><i className="fa fa-cog"></i> Settings</span>
            ) : (
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip className='tooltip-text' id="settings-tooltip">Settings</Tooltip>}
              >
                <i className="fa fa-cog"></i>
              </OverlayTrigger>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
