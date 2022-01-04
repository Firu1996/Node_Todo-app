const express = require('express');
const app = express();

const todoRoute = require('./route/todoRoute');
app.use(express.json());
app.use('/api', todoRoute);

module.exports = app;