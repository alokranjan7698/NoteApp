const {
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const auth = require("../middlewares/auth");

const noteRoute = require("express").Router();

noteRoute.get("/", auth, getNote);
noteRoute.post("/", auth, createNote);
noteRoute.put("/:id", auth, updateNote);
noteRoute.delete("/:id", auth, deleteNote);

module.exports = noteRoute;
