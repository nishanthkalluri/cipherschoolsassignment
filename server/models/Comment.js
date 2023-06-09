import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  replies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reply',
  }],
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
