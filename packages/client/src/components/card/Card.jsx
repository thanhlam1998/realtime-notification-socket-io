// @ts-nocheck
import React, { useState } from "react";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import "./Card.css";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (e) => {
    setLiked(true);
  }

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
          <img src={Heart} alt="heart" className="cardIcon" onClick={handleNotification} />
        )}
        <img src={Comment} alt="comment" className="cardIcon" />
        <img src={Share} alt="share" className="cardIcon" />
        <img src={Info} alt="info" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;
