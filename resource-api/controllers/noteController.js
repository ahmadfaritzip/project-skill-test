const NoteModel = require("../models/noteModel");

exports.createNote = async (req, res) => {
  if (!req.body.note) {
    return res.status(422).json({
      note: "note is required"
    });
  }
  const note = new NoteModel(req.body);
  NoteModel.create(note, function (err, note) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(note);
  });
};

exports.readNote = async (req, res) => {
  NoteModel.read(function (err, note) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(note);
  });
};

exports.updateNote = async (req, res) => {
  const id = req.params.noteId;
  NoteModel.update(id, new NoteModel(req.body), function (err, note) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(note);
  });
};

exports.deleteNote = async (req, res) => {
  const id = req.params.noteId;
  NoteModel.delete(id, function (err, note) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(note);
  });
};
