const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const articlesRouter = require('./routes/articles');
const Article = require('./models/article');

mongoose.connect('mongodb://localhost/my-blog', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to My Blog API' });
});  

// Route to fetch all articles
app.get('/articles', async (req, res) => {
    try {
      // Fetch articles from the database
      const articles = await Article.find();
  
      // Send the articles as a response
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

app.get('/articles/:id', async (req, res) => {
    const articleId = req.params.id;
  
    try {
      const article = await Article.findById(articleId);
      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
});
  

app.use('/articles', articlesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
