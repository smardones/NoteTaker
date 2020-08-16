const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const notes = require('./Develop/db/db.json');
const storeNewNote = require('./Develop/lib/noteHandlers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

// get api functions

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

// post api functions

app.post('/api/notes', (req, res) => {
    req.body.id = JSON.stringify(JSON.parse(notes[notes.length - 1].id) + 1);

    console.log(notes);
    let newNote = req.body;
    storeNewNote(newNote, notes);
    res.json(notes);
});

// get functions to retried html pages

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/index.html'));
});

app.listen(3001, () => {
    console.log('Server now on port 3001!');
})