import React from 'react';

const ReplyItem = ({ reply }) => {
  return (
    <div>
      <p>{reply.text}</p>
      <p>{reply.user.name}</p>
      <p>{reply.likes} likes</p>
    </div>
  );
};

export default ReplyItem;
