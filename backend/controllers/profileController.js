// const Product = require('../models/productModel');
// const ErrorHandler = require('../utils/errorHandler')
// const catchAsyncError = require('../middlewares/catchAsyncError')
const APIFeatures = require('../utils/apiFeatures');

// //Get Products - /api/v1/products
// exports.getProducts = catchAsyncError(async (req, res, next)=>{
//     const resPerPage = 3;
    
//     let buildQuery = () => {
//         return new APIFeatures(Product.find(), req.query).search().filter()
//     }
    
//     const filteredProductsCount = await buildQuery().query.countDocuments({})
//     const totalProductsCount = await Product.countDocuments({});
//     let productsCount = totalProductsCount;

//     if(filteredProductsCount !== totalProductsCount) {
//         productsCount = filteredProductsCount;
//     }
    
//     const products = await buildQuery().paginate(resPerPage).query;

//     res.status(200).json({
//         success : true,
//         count: productsCount,
//         resPerPage,
//         products
//     })
// })

// //Create Product - /api/v1/product/new
// exports.newProduct = catchAsyncError(async (req, res, next)=>{
//     let images = []
//     let BASE_URL = process.env.BACKEND_URL;
//     if(process.env.NODE_ENV === "production"){
//         BASE_URL = `${req.protocol}://${req.get('host')}`
//     }
    
//     if(req.files.length > 0) {
//         req.files.forEach( file => {
//             let url = `${BASE_URL}/uploads/product/${file.originalname}`;
//             images.push({ image: url })
//         })
//     }

//     req.body.images = images;

//     req.body.user = req.user.id;
//     const product = await Product.create(req.body);
//     res.status(201).json({
//         success: true,
//         product
//     })
// });

// //Get Single Product - api/v1/product/:id
// exports.getSingleProduct = catchAsyncError(async(req, res, next) => {
//     const product = await Product.findById(req.params.id).populate('reviews.user','name email');

//     if(!product) {
//         return next(new ErrorHandler('Product not found', 400));
//     }

//     res.status(201).json({
//         success: true,
//         product
//     })
// })

// //Update Product - api/v1/product/:id
// exports.updateProduct = catchAsyncError(async (req, res, next) => {
//     let product = await Product.findById(req.params.id);

//     //uploading images
//     let images = []

//     //if images not cleared we keep existing images
//     if(req.body.imagesCleared === 'false' ) {
//         images = product.images;
//     }
//     let BASE_URL = process.env.BACKEND_URL;
//     if(process.env.NODE_ENV === "production"){
//         BASE_URL = `${req.protocol}://${req.get('host')}`
//     }

//     if(req.files.length > 0) {
//         req.files.forEach( file => {
//             let url = `${BASE_URL}/uploads/product/${file.originalname}`;
//             images.push({ image: url })
//         })
//     }


//     req.body.images = images;
    
//     if(!product) {
//         return res.status(404).json({
//             success: false,
//             message: "Product not found"
//         });
//     }

//     product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true
//     })

//     res.status(200).json({
//         success: true,
//         product
//     })

// })

// //Delete Product - api/v1/product/:id
// exports.deleteProduct = catchAsyncError(async (req, res, next) =>{
//     const product = await Product.findById(req.params.id);

//     if(!product) {
//         return res.status(404).json({
//             success: false,
//             message: "Product not found"
//         });
//     }

//     await product.remove();

//     res.status(200).json({
//         success: true,
//         message: "Product Deleted!"
//     })

// })

// //Create Review - api/v1/review
// exports.createReview = catchAsyncError(async (req, res, next) =>{
//     const  { productId, rating, comment } = req.body;

//     const review = {
//         user : req.user.id,
//         rating,
//         comment
//     }

//     const product = await Product.findById(productId);
//    //finding user review exists
//     const isReviewed = product.reviews.find(review => {
//        return review.user.toString() == req.user.id.toString()
//     })

//     if(isReviewed){
//         //updating the  review
//         product.reviews.forEach(review => {
//             if(review.user.toString() == req.user.id.toString()){
//                 review.comment = comment
//                 review.rating = rating
//             }

//         })

//     }else{
//         //creating the review
//         product.reviews.push(review);
//         product.numOfReviews = product.reviews.length;
//     }
//     //find the average of the product reviews
//     product.ratings = product.reviews.reduce((acc, review) => {
//         return review.rating + acc;
//     }, 0) / product.reviews.length;
//     product.ratings = isNaN(product.ratings)?0:product.ratings;

//     await product.save({validateBeforeSave: false});

//     res.status(200).json({
//         success: true
//     })


// })

// //Get Reviews - api/v1/reviews?id={productId}
// exports.getReviews = catchAsyncError(async (req, res, next) =>{
//     const product = await Product.findById(req.query.id).populate('reviews.user','name email');

//     res.status(200).json({
//         success: true,
//         reviews: product.reviews
//     })
// })

// //Delete Review - api/v1/review
// exports.deleteReview = catchAsyncError(async (req, res, next) =>{
//     const product = await Product.findById(req.query.productId);
    
//     //filtering the reviews which does match the deleting review id
//     const reviews = product.reviews.filter(review => {
//        return review._id.toString() !== req.query.id.toString()
//     });
//     //number of reviews 
//     const numOfReviews = reviews.length;

//     //finding the average with the filtered reviews
//     let ratings = reviews.reduce((acc, review) => {
//         return review.rating + acc;
//     }, 0) / reviews.length;
//     ratings = isNaN(ratings)?0:ratings;

//     //save the product document
//     await Product.findByIdAndUpdate(req.query.productId, {
//         reviews,
//         numOfReviews,
//         ratings
//     })
//     res.status(200).json({
//         success: true
//     })


// });

// // get admin products  - api/v1/admin/products
// exports.getAdminProducts = catchAsyncError(async (req, res, next) =>{
//     const products = await Product.find();
//     res.status(200).send({
//         success: true,
//         products
//     })
// });

const catchAsyncError = require('../middlewares/catchAsyncError');
const Profile = require('../models/profileModel');
const ErrorHandler = require('../utils/errorHandler');

// Create New Profile - api/v1/profile/new
exports.newProfile = catchAsyncError(async (req, res, next) => {
    const {
        LinkedInSchoolURL,
        ResultsCount,
        FullName,
        FirstName,
        LastName,
        Headline,
        JobTitle,
        LocationArea,
        ProfileURL,
        ProfilePublicURL,
        SalesNavProfileURL,
        ProfileID,
        MemberURN,
        TrackingID,
        ConnectionDegree,
        ProfileThumbnail,
    } = req.body;

    const profile = await Profile.create({
        LinkedInSchoolURL,
        ResultsCount,
        FullName,
        FirstName,
        LastName,
        Headline,
        JobTitle,
        LocationArea,
        ProfileURL,
        ProfilePublicURL,
        SalesNavProfileURL,
        ProfileID,
        MemberURN,
        TrackingID,
        ConnectionDegree,
        ProfileThumbnail,
    });

    res.status(201).json({
        success: true,
        profile,
    });
});

// Get Single Profile - api/v1/profile/:id
exports.getSingleProfile = catchAsyncError(async (req, res, next) => {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
        return next(new ErrorHandler(`Profile not found with this id: ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        profile,
    });
});

// Get All Profiles - api/v1/profiles
exports.getAllProfiles = catchAsyncError(async (req, res, next) => { // Function name aligned
    const profiles = await Profile.find();
    let buildQuery = () => {
                return new APIFeatures(Profile.find(), req.query).search().filter()
            }
            
           
            
            
    //const profiles = await buildQuery();
        
    res.status(200).json({
        success: true,
        profiles,
    });
});

// Update Profile - api/v1/profile/:id
exports.updateProfile = catchAsyncError(async (req, res, next) => {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
        return next(new ErrorHandler(`Profile not found with this id: ${req.params.id}`, 404));
    }

    Object.assign(profile, req.body);
    await profile.save();

    res.status(200).json({
        success: true,
        profile,
    });
});

// Delete Profile - api/v1/profile/:id
exports.deleteProfile = catchAsyncError(async (req, res, next) => {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
        return next(new ErrorHandler(`Profile not found with this id: ${req.params.id}`, 404));
    }

    await profile.remove();

    res.status(200).json({
        success: true,
    });
});
