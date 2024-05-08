const { authentication, restrictTo } = require("../controller/auth-controller");
const {
  createPosts,
  getAllPosts,
  getPostsById,
  updatePosts,
  deletePost,
} = require("../controller/posts-controller");
const router = require("express").Router();

router.post("/create-posts", authentication, restrictTo("1"), createPosts);
router.get("/get-all-posts", authentication, getAllPosts);
router.get("/:id", authentication, getPostsById);
router.patch("/update-post/:id", authentication, updatePosts);
router.delete("/delete-post/:id", authentication, deletePost);

module.exports = router;
