const express = require("express");
const router = express.Router();
const {
  createNote,
  readNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

router.post("/notes", createNote);

router.get("/notes", readNote);

router.put("/notes/:noteId", updateNote);

router.delete("/notes/:noteId", deleteNote);

module.exports = router;
