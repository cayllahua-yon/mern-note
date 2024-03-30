import {Router} from "express";
import {getNotes, createNote, deleteNote, updateNote, getNote} from "../controllers/notes.controllers.js"

const router = Router();

router.get('/notes', getNotes);
router.post('/note', createNote);
router.delete('/note/:id', deleteNote);
router.put('/note/:id', updateNote);
router.get('/note/:id', getNote);

export default router;