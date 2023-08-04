import React from 'react';
import UserInfo from '../user.json'; 

export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          style={{}}
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <UserInfo label="Followers" quantity={followers} />
        </li>
        <li>
          <UserInfo label="Views" quantity={views} />
        </li>
        <li>
          <UserInfo label="Likes" quantity={likes} />
        </li>
      </ul>
    </div>
  );
}