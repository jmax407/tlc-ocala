const express = require('express');
const { check } = require('express-validator');
const postControllers = require('../controllers/post-controllers');

const router = express.Router();

router.get('/:postid', postControllers.getPostById);

router.post(
  '/new',
    [check('title').not().isEmpty(),
    check('body').not().isEmpty(),
  ],
  postControllers.createNewPost
);

router.delete('/:postid', postControllers.deletePost)

module.exports = router;
