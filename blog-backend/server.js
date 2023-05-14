const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const articlesRouter = require('./routes/articles');

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

app.use('/articles', articlesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
