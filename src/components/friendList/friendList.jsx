import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, ...props }) => (
        <FriendListItem key={id} {...props} />
      ))}
    </ul>
  );
};

export default FriendList;