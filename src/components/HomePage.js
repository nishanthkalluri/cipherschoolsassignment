import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoItem from './VideoItem';

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Welcome to my video streaming website!</h1>
      <p>Here are some of our most popular videos:</p>
      <div className="video-list">
        {videos.map(video => <VideoItem key={video._id} video={video} />)}
      </div>
    </div>
  );
};

export default HomePage;
