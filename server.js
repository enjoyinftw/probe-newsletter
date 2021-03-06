const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
const router = require('./routes/router');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use('/api/v1', router);

module.exports = app;
