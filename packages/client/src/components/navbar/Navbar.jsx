// @ts-nocheck
import React, { useEffect, useState } from "react";

import Message from "../../img/message.svg";
import Notification from "../../img/notification.svg";
import Settings from "../../img/settings.svg";

import "./Navbar.css";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }, index) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return <span key={index} className="notification">{`${senderName} ${action} your post`}</span>;
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">Realtime app</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} alt="" className="iconImg" />
          {notifications.length > 0 && <div className="counter">{notifications.length}</div>}
        </div>
        <div className="icon">
          <img src={Message} alt="" className="iconImg" />
        </div>
        <div className="icon">
          <img src={Settings} alt="" className="iconImg" />
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n, index) => displayNotification(n, index))}
          <button onClick={handleRead} className="nButton">
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
