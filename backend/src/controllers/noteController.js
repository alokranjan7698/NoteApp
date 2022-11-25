const Note = require("../models/Note");

const createNote = async (req, res) => {
  const userId = req.userId;
  const { title, description } = req.body;
  try {
    const note = await Note.create({ title, description, userId });
    res.status(201).json(note);
  } catch (err) {
    res.status(401).json("Error in createNote");
  }
};
const updateNote = async (req, res) => {
  const userId = req.userId;
  const { title, description } = req.body;
  try {
    let newNote = { title, description };
    newNote = await Note.findOneAndUpdate(
      { userId, _id: req.params.id },
      newNote,
      { new: true }
    );
    res.status(201).json(newNote);
  } catch (err) {
    res.status(401).json("Error in updateNote");
  }
};
const deleteNote = async (req, res) => {
  const userId = req.userId;
  try {
    const note = await Note.findOneAndDelete(
      { userId, _id: req.params.id },
      { new: true }
    );
    res.status(201).json(note);
  } catch (err) {
    res.status(401).json("Error in deleteNote");
  }
};
const getNote = async (req, res) => {
  const userId = req.userId;
  try {
    const allNotes = await Note.find({ userId });
    res.status(201).json(allNotes);
  } catch (err) {
    res.status(401).json("Error in getNote");
  }
};
module.exports = { createNote, updateNote, deleteNote, getNote };
