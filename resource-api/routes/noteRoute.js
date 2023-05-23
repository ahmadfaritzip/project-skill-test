const express = require("express");
const router = express.Router();
const {
  createNote,
  readNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

router.post("/note", createNote);

router.get("/note", readNote);

router.put("/note/:noteId", updateNote);

router.delete("/note/:noteId", deleteNote);

module.exports = router;
