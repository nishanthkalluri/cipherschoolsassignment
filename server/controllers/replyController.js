const Reply = require('../models/Reply');

const replyController = {};

// Add reply to a comment
replyController.addReply = async (req, res) => {
  try {
    const { commentId, userId, text } = req.body;
    const reply = new Reply({ comment: commentId, user: userId, text });
    await reply.save();
    res.status(201).json({ success: true, message: 'Reply added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Delete reply
replyController.deleteReply = async (req, res) => {
  try {
    const { id } = req.params;
    await Reply.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Reply deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Update reply
replyController.updateReply = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const reply = await Reply.findByIdAndUpdate(id, { text }, { new: true });
    res.status(200).json({ success: true, reply });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = replyController;
