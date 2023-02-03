const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const Post = require('../models/post');
const User = require('../models/user');
const { mongoose } = require('mongoose');

const getPostById = async (req, res, next) => {
  const postId = req.params.id;

  let post;
  try {
    post = await Post.findById(postId);
  } catch (err) {
    const error = new HttpError('No Post here', 404);
  }
  return next(error);
};

const createNewPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, body, images, creator, date } = req.body;

  const createdPost = new Post({
    title,
    body,
    images,
    creator,
    date,
  });

  //ADD POST TO USER
  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError('Creating post failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error);
  }
  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPost.save({ session: sess });
    user.posts.push(createdPost);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating post failed, Something went wrong. please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ post: createdPost.toObject({ getters: true }) });
};

const deletePost = async (req, res, next) => {
  const postId = req.params.postid;
  let post;
  try {
    post = await Post.findById(postId).populate('creator');
  } catch (err) {
    const error = new HttpError('could not delete post', 500);
    return next(error);
  }

  if (!post) {
    const error = new HttpError('Could not find post for this id', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await post.remove({ session: sess });
    post.creator.posts.pull(post);
    await post.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError('could not delete post', 500);
    return next(error);
  }
  res.status(200).json({ message: 'Post deleted' });
};
exports.getPostById = getPostById;
exports.createNewPost = createNewPost;
exports.deletePost = deletePost;
