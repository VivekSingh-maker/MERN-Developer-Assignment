// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\8.RESTful_API_Design\controllers\blog-controller.js
const Post = require("../models/Post");

const createNewPost = async (req, res) => {
    const { title, content, author } = req.body;

    try {
        const newPost = new Post({ title, content, author });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
};

const getSinglePostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
};

const updatePostById = async (req, res) => {
    const { title, content, author } = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { title, content, author },
            { new: true, runValidators: true }
        );

        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};

const deletePostById = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};

module.exports = { createNewPost, getAllPosts, getSinglePostById, updatePostById, deletePostById };