// @ts-nocheck
import React, { useState } from "react";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import "./Card.css";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post?.userImg} alt="user image" className="userImg" />
        <span>{post?.fullname}</span>
      </div>
      <img src={post?.postImg} alt="post image" className="postImg" />
      <div className="interaction">
        {liked ? (
          <img src={HeartFilled} alt="heart" className="cardIcon" />
        ) : (
          <img src={Heart} alt="heart" className="cardIcon" onClick={() => handleNotification(1)} />
        )}
        <img src={Comment} alt="comment" className="cardIcon" onClick={() => handleNotification(2)} />
        <img src={Share} alt="share" className="cardIcon" onClick={() => handleNotification(3)} />
        <img src={Info} alt="info" className="cardIcon infoIcon" onClick={() => handleNotification(4)} />
      </div>
    </div>
  );
};

export default Card;
