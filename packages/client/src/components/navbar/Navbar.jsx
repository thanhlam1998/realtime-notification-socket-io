// @ts-nocheck
import React from 'react';

import Message from '../../img/message.svg';
import Notification from '../../img/notification.svg';
import Settings from '../../img/settings.svg';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Realtime app</span>
      <div className="icons">
        <div className="icon">
          <img src={Notification} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Message} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Settings} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
