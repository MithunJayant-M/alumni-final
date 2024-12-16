// const express = require('express');
// const { newOrder, getSingleOrder, myOrders, orders, updateOrder, deleteOrder } = require('../controllers/orderController');
// const router = express.Router();
// const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/authenticate');

// router.route('/order/new').post(isAuthenticatedUser,newOrder);
// router.route('/order/:id').get(isAuthenticatedUser,getSingleOrder);
// router.route('/myorders').get(isAuthenticatedUser,myOrders);

// //Admin Routes
// router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles('admin'), orders)
// router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
//                         .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder)

// module.exports = router;
const express = require('express');
const {
    createProfile,
    getSingleProfile,
    getAllProfiles,
    updateProfile,
    deleteProfile,
} = require('../controllers/profileController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');

// Public Routes
router.route('/profile/new').post(isAuthenticatedUser, createProfile); // Create new profile
router.route('/profile/:id').get(isAuthenticatedUser, getSingleProfile); // Get single profile by ID
router.route('/profiles').get(isAuthenticatedUser, getAllProfiles); // Get all profiles

// Admin Routes
router
    .route('/profile/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProfile) // Update profile by ID
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProfile); // Delete profile by ID

module.exports = router;