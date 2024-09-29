// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\8.RESTful_API_Design\router\blog-router.js
const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blog-controller");

// Route to create a new blog post
router.route("/posts").post(blogController.createNewPost);
// Route to get all blog posts
router.route("/posts").get(blogController.getAllPosts);
// Route to get a single blog post by ID
router.route("/posts/:id").get(blogController.getSinglePostById);
// Route to update a blog post by ID
router.route("/posts/:id").put(blogController.updatePostById);
// Route to delete a blog post by ID
router.route("/posts/:id").delete(blogController.deletePostById);

module.exports = router;