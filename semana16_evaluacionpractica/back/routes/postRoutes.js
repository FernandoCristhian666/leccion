const express = require('express');
const Post = require('../models/postModel');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo posts' });
    }
});


router.post('/', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Error creando post' });
    }
});

module.exports = router;