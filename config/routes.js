const db = require('../data/dbConfig.js');

module.exports = server => {
    server.get('/api/notes', retrieveNotes);
    server.get('/api/notes/:id', retrieveById);
    server.post('/api/notes', postNotes);
    server.put('/api/notes/:id', updateNote);
    server.delete('/api/notes/:id', deleteNote);
};

function retrieveNotes(req, res){
    db('notes')
    .then(notes => {
        res.status(200).json(notes)
    })
    .catch(err => {
        res.send(err.message)
    })
}

function retrieveById(req, res){
    const noteId = req.params;
    console.log(noteId);
    db('notes')
    .where(noteId)
    .first()
    .then(note => {
        res.status(200).json(note)
    })
    .catch(err => {
        res.send(err.message)
    })
}

function postNotes(req, res){
    const note = req.body;
    db.insert(note)
      .into('notes')
      .then(note => {
        res.status(201).json(note)
      })
      .catch(err => {
          res.send(err.message)
    })
}

function updateNote(req, res){
    const noteId = req.params;
    const updatedNote = req.body;
    db('notes')
    .where(noteId)
    .update(updatedNote)
    .then(note => {
      res.status(201).json(note)
    })
    .catch(err => {
        res.send(err.message)
  })
}

function deleteNote(req, res){
    const noteId = req.params;
    db('notes')
    .where(noteId)
    .del()
    .then( removed => {
      res.status(202).json(removed)
    })
    .catch(err => {
        res.send(err.message)
  })
}