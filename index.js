const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const bookRouter = require('./routes/book.controller');

app.use('/api/books', bookRouter);

app.listen(process.env.PORT_EXPRESS);