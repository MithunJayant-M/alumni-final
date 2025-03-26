const catchAsyncError = require('../middlewares/catchAsyncError');
const Note = require('../models/blogModel');
const ErrorHandler = require('../utils/errorHandler');
const User =require('../models/userModel');

// Create New Note - /add-note
exports.addNote = catchAsyncError(async (req, res, next) => {
    const { title, content, tags } = req.body;
    // const { user } = req.user;

    if (!title || !content) {
        return next(new ErrorHandler("Title and content are required", 400));
    }

    const note = await Note.create({
        title,
        content,
        tags: tags || [],
        
    });
    // const user= await User.create({
    //     userId: user._id,
    // })

    res.status(201).json({
        success: true,
        note,
        message: "Note added successfully",
    });
});

// Update Note - /edit-note/:noteId
exports.editNote = catchAsyncError(async (req, res, next) => {
    const { noteId } = req.params;
    const { title, content, tags, isPinned } = req.body;
    // const { user } = req.user;

    if (!title && !content && !tags) {
        return next(new ErrorHandler("Nothing to update", 400));
    }

    const note = await Note.findOne({ _id: noteId, 
    // userId: user._id 
    });

    if (!note) {
        return next(new ErrorHandler("Note not found", 404));
    }

    Object.assign(note, req.body);
    await note.save();

    res.status(200).json({
        success: true,
        note,
        message: "Note updated successfully",
    });
});

// Get All Notes - /get-all-notes
exports.getAllNotes = catchAsyncError(async (req, res, next) => {
    // const { user } = req.user;
    const notes = await Note.find({
        //  userId: user._id
         }).sort({ isPinned: -1 });

    res.status(200).json({
        success: true,
        notes,
        message: "Notes fetched successfully",
    });
});

// Delete Note - /delete-note/:noteId
exports.deleteNote = catchAsyncError(async (req, res, next) => {
    const { noteId } = req.params;
    // const { user } = req.user;

    const note = await Note.findOne({ _id: noteId
        // , userId: user._id 
        });

    if (!note) {
        return next(new ErrorHandler("Note not found", 404));
    }

    await note.deleteOne();

    res.status(200).json({
        success: true,
        message: "Note deleted successfully",
    });
});

// Update Note Pinned Status - /update-note-pinned/:noteId
exports.updateNotePinned = catchAsyncError(async (req, res, next) => {
    const { noteId } = req.params;
    const { isPinned } = req.body;
    // const { user } = req.user;

    const note = await Note.findOne({ _id: noteId,
        //  userId: user._id 
        });

    if (!note) {
        return next(new ErrorHandler("Note not found", 404));
    }

    note.isPinned = isPinned;
    await note.save();

    res.status(200).json({
        success: true,
        note,
        message: "Note updated successfully",
    });
});

// Search Notes - /search-notes
exports.searchNotes = catchAsyncError(async (req, res, next) => {
    // const { user } = req.user;
    const { query } = req.query;

    if (!query) {
        return next(new ErrorHandler("Search query is required", 400));
    }

    const matchingNotes = await Note.find({
        // userId: user._id,
        $or: [
            { title: { $regex: new RegExp(query, "i") } },
            { content: { $regex: new RegExp(query, "i") } },
        ],
    });

    res.status(200).json({
        success: true,
        notes: matchingNotes,
        message: "Notes matching the search query",
    });
});
