const Comment = require('../models/comment');
const Reply = require('../models/reply');

// Add comment to a video
exports.addComment = async (req, res) => {
  try {
    const { text, videoId } = req.body;
    const newComment = new Comment({
      text,
      video: videoId,
      user: req.user._id,
    });
    const comment = await newComment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add reply to a comment
exports.addReply = async (req, res) => {
  try {
    const { text, commentId } = req.body;
    const newReply = new Reply({
      text,
      comment: commentId,
      user: req.user._id,
    });
    const reply = await newReply.save();
    res.status(201).json(reply);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all comments for a video
exports.getCommentsByVideoId = async (req, res) => {
  try {
    const comments = await Comment.find({ video: req.params.videoId })
      .populate('user', '-password')
      .populate('replies')
      .exec();
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all replies for a comment
exports.getRepliesByCommentId = async (req, res) => {
  try {
    const replies = await Reply.find({ comment: req.params.commentId })
      .populate('user', '-password')
      .exec();
    res.status(200).json(replies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
