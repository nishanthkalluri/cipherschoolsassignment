const express = require('express');
const router = express.Router();
const replyController = require('../controllers/replyController');

router.get('/comments/:commentId/replies', replyController.getAllReplies);
router.post('/comments/:commentId/replies', replyController.addReply);
router.get('/comments/:commentId/replies/:replyId', replyController.getReplyById);
router.put('/comments/:commentId/replies/:replyId', replyController.updateReply);
router.delete('/comments/:commentId/replies/:replyId', replyController.deleteReply);

module.exports = router;
