const posts = require("../db/models/posts");
const user = require("../db/models/user");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const createPosts = catchAsync(async (req, res, next) => {
  const body = req.body;
  const userId = req.user.id;
  const newPosts = await posts.create({
    caption: body.caption,
    media: body.media,
    tags: body.tags,
    createdBy: userId,
  });
  return res.status(201).json({
    status: "success",
    data: newPosts,
  });
});

const getAllPosts = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const result = await posts.findAll({
    include: user,
    where: { createdBy: userId },
  });

  return res.json({
    status: "success",
    data: result,
  });
});

const getPostsById = catchAsync(async (req, res, next) => {
  const postsId = req.params.id;
  const result = await posts.findByPk(postsId, { include: user });
  if (!result) {
    return next(new AppError("Invalid post id", 400));
  }
  return res.json({
    status: "success",
    data: result,
  });
});

const updatePosts = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const postId = req.params.id;
  const body = req.body;
  const result = await posts.findOne({
    where: { id: postId, createdBy: userId },
  });
  if (!result) {
    return next(new AppError("Invalid post ID", 400));
  }
  result.caption = body.caption;
  result.media = body.media;
  result.tags = body.tags;
  const updatedResult = await result.save();
  return res.json({
    status: "success",
    data: updatedResult,
  });
});

const deletePost = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const postId = req.params.id;

  const result = await posts.findOne({
    where: { id: postId, createdBy: userId },
  });

  if (!result) {
    return next(new AppError("Invalid project id", 400));
  }

  await result.destroy();

  return res.json({
    status: "success",
    message: "Record deleted successfully",
  });
});

module.exports = {
  createPosts,
  getAllPosts,
  getPostsById,
  updatePosts,
  deletePost,
};
