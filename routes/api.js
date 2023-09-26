const express = require('express');
const path = require('path');
const fs = require('fs');

const api = express.Router();

api.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
})

api.post('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), "utf8", function(err, data){
        const notes = JSON.parse(data);
        notes.push(req.body);

        fs.writeFile(path.join(__dirname, '../db/db.json'), 
        JSON.stringify(notes), (err) => err && console.error(err));
    });

    res.sendFile(path.join(__dirname, '../db/db.json'));
})

module.exports = api;