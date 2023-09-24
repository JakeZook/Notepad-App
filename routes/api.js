const express = require('express');
const path = require('path');
const api = express.Router();

api.use(express.static('public'));

api.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

module.exports = api;