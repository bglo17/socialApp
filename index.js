const express = require('express');
const db = require('./config/connection');
const routes = requir('./routes');

const cwd = process.cwd();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


