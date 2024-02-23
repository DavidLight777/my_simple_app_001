const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/index');
const app = express();
const port = 3000;

app.use(express.json()); // Для разбора JSON тел запросов

mongoose.connect('mongodb://localhost:27017/mySimpleApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/', userRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

