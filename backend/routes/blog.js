const express = require('express');
const router = express.Router();
const { addNote, editNote, getAllNotes, deleteNote, updateNotePinned, searchNotes } = require('../controllers/blogController');
const catchAsyncError = require('../middlewares/catchAsyncError');
const multer = require('multer');
const path = require('path')

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads/order' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })
// Create a new note
router.route('/add-note').post(addNote);

// Update a note
router.route('/edit-note/:noteId').put (editNote);

// Get all notes
router.route('/get-all-notes').get(getAllNotes);

// Delete a note
router.route('/delete-note/:noteId').delete (deleteNote);

// Update note pinned status
router.route('/update-note-pinned/:noteId').put(updateNotePinned);

// Search notes
router.route('/search-notes').get(searchNotes);

module.exports = router;