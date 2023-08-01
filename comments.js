// Create web server

// Import the express module
const express = require('express');

// Create a new router object
const router = express.Router();

// Import the comments array
const { comments } = require('../data/comments');

// Path: /comments
router.get('/', (req, res) => {
  res.json(comments);
});

// Path: /comments/:id
router.get('/:id', (req, res) => {
  const comment = comments.find((comment) => comment._id === Number(req.params.id));
  res.json(comment);
});

// Export the router object
module.exports = router;