const express = require('express');
const { 
    getAllProfiles,
    newProfile,
    getSingleProfile,
    updateProfile,  // Ensure this function is defined in the controller
    deleteProfile,
    createReview,
    getReviews,
    deleteReview,
    getAdminProfiles
} = require('../controllers/profileController');  // Ensure all controller functions are correctly imported
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, path.join(__dirname, '..', 'uploads/profile'));
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })
});

// Public routes
router.route('/profiles').get(getAllProfiles);
router.route('/profile/:id').get(getSingleProfile);

// Authenticated routes
// router.route('/review').put(isAuthenticatedUser, createReview);

// Admin routes
router.route('/admin/profile/new')
    .post(isAuthenticatedUser, authorizeRoles('admin'), upload.array('images'), newProfile);

 router.route('/admin/profiles')
     .get(isAuthenticatedUser, authorizeRoles('admin') ,getAllProfiles);

router.route('/admin/profile/:id')
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProfile);

router.route('/admin/profile/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), upload.array('images'), updateProfile);  // Ensure this is the correct handler

// router.route('/admin/reviews')
//     .get(isAuthenticatedUser, authorizeRoles('admin'), getReviews);

// router.route('/admin/review')
//     .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteReview);

module.exports = router;
