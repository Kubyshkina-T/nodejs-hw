import { Router } from "express";
import { getNotes, getNotesById, createNote, deleteNote, updateNote } from "../controllers/notesController.js";

const router = Router();

router.get('/notes', getNotes);
router.get('/notes/:noteId', getNotesById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;

