import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPage from './components/VideoPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import VideoItem from './components/VideoItem';
import CommentItem from './components/CommentItem';
import ReplyItem from './components/ReplyItem';
import Navbar from './components/Navbar';
import { getVideos, getComments } from './api';

function Main() {
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const videosData = await getVideos();
      const commentsData = await getComments();
      setVideos(videosData);
      setComments(commentsData);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage videos={videos} />
        </Route>
        <Route path="/videos/:id">
          <VideoPage videos={videos} comments={comments} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
