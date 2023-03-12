import React from 'react';
import { Link } from 'react-router-dom';

const VideoItem = ({ video }) => {
  return (
    <div>
      <Link to={`/videos/${video._id}`}>
        <img src={video.thumbnailUrl} alt={video.title} />
      </Link>
      <div>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <p>{video.views} views</p>
        <p>{video.likes} likes</p>
      </div>
    </div>
  );
};

export default VideoItem;
