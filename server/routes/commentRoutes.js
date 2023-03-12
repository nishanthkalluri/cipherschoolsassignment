const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/comments', commentController.getAllComments);
router.post('/comments', commentController.addComment);
router.get('/comments/:commentId', commentController.getCommentById);
router.put('/comments/:commentId', commentController.updateComment);
router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;
