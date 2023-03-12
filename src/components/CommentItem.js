import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div>
      <p>{comment.text}</p>
      <p>{comment.user.name}</p>
      <p>{comment.likes} likes</p>
    </div>
  );
};

export default CommentItem;
