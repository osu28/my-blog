const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// Middleware for fetching an article by ID
async function getArticle(req, res, next) {
  let article;
  try {
    article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: 'Cannot find article' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.article = article;
  next();
}

// POST route for adding a new article
router.post('/', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
    // ... any other fields your articles have
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT route for editing an existing article
router.put('/:id', getArticle, async (req, res) => {
  if (req.body.title != null) {
    res.article.title = req.body.title;
  }
  if (req.body.content != null) {
    res.article.content = req.body.content;
  }
  // ... repeat for other fields

  try {
    const updatedArticle = await res.article.save();
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE route for deleting an article
router.delete('/:id', getArticle, async (req, res) => {
  try {
    await res.article.remove();
    res.json({ message: 'Deleted Article' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
