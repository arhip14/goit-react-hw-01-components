import React from 'react';
import './friendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={`status ${isOnline ? 'online' : 'offline'}`} />
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
