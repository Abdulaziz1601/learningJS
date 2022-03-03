const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GETS BACK ALL THE POSTS
router.get('/', async (req, res) => { // so using middleware adds  "/posts" itself
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) { 
        res.json({message: err});
    }
});

// SUBMITS A POST
router.post('/', (req, res) => {
    const post = new Post({ // we are saving Post on DB
        title: req.body.title,
        description: req.body.description,
    });

    post.save()
        .then(data => {
            res.json(data); // to see data that was saved
        })
        .catch(err => {
            res.json({message: err});
        })
})  

// SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

// Delete Post
router.delete('/:postId', (req, res) => {
    try {
        const post = await Post.remove({__id: req.params.postId});
        res.json(post);
    } catch {

    }
} )

module.exports = router;