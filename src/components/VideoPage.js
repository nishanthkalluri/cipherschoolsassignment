import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/api/videos/${id}`)
      .then(res => {
        setVideo(res.data);
        setLikes(res.data.likes);
        setViews(res.data.views);
        setComments(res.data.comments);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleLike = () => {
    axios.put(`/api/videos/${id}/like`)
      .then(res => setLikes(res.data.likes))
      .catch(err => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/videos/${id}/comments`, { comment })
      .then(res => {
        setComments([...comments, res.data]);
        setComment('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {video ? (
        <div>
          <h1>{video.title}</h1>
          <video src={video.url} controls width="640" height="360"></video>
          <p>Likes: {likes}</p>
          <p>Views: {views}</p>
          <button onClick={handleLike}>Like</button>
          <form onSubmit={handleSubmit}>
            <label>
              Comment:
              <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
          <div>
            <h2>Comments</h2>
            {comments.length > 0 ? (
              comments.map(comment => (
                <div key={comment._id}>
                  <p>{comment.text}</p>
                  <p>By: {comment.author}</p>
                  <p>Replies:</p>
                  {comment.replies.length > 0 ? (
                    comment.replies.map(reply => (
                      <div key={reply._id}>
                        <p>{reply.text}</p>
                        <p>By: {reply.author}</p>
                      </div>
                    ))
                  ) : (
                    <p>No replies yet.</p>
                  )}
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoPage;
