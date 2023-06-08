const express = require('express');

const { verifyToken, deprecated } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostByHashtag } = require('../controllers/v1');

const router = express.Router();

router.use(deprecated);

router.post('/token', createToken);

router.get('/test', verifyToken, tokenTest);

router.get('/posts/my', verifyToken, getMyPosts);

router.get('/posts/hashtag/:title', verifyToken, getPostByHashtag);

module.exports = router;