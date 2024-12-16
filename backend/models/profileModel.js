// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name : {
//         type: String,
//         required: [true, "Please enter product name"],
//         trim: true,
//         maxLength: [100, "Product name cannot exceed 100 characters"]
//     },
//     price: {
//         type: Number,
//         required: true,
//         default: 0.0
//     },
//     description: {
//         type: String,
//         required: [true, "Please enter product description"]
//     },
//     ratings: {
//         type: String,
//         default: 0
//     },
//     images: [
//         {
//             image: {
//                 type: String,
//                 required: true
//             }
//         }
//     ],
//     category: {
//         type: String,
//         required: [true, "Please enter product category"],
//         enum: {
//             values: [
//                 'Electronics',
//                 'Mobile Phones',
//                 'Laptops',
//                 'Accessories',
//                 'Headphones',
//                 'Food',
//                 'Books',
//                 'Clothes/Shoes',
//                 'Beauty/Health',
//                 'Sports',
//                 'Outdoor',
//                 'Home'
//             ],
//             message : "Please select correct category"
//         }
//     },
//     seller: {
//         type: String,
//         required: [true, "Please enter product seller"]
//     },
//     stock: {
//         type: Number,
//         required: [true, "Please enter product stock"],
//         maxLength: [20, 'Product stock cannot exceed 20']
//     },
//     numOfReviews: {
//         type: Number,
//         default: 0
//     },
//     reviews: [
//         {
//             user:{
//                 type:mongoose.Schema.Types.ObjectId,
//                 ref: 'User'
//             },
//             rating: {
//                 type: String,
//                 required: true
//             },
//             comment: {
//                 type: String,
//                 required: true
//             }
//         }
//     ],
//     user: {
//         type : mongoose.Schema.Types.ObjectId
//     }
//     ,
//     createdAt:{
//         type: Date,
//         default: Date.now()
//     }
// })

// let schema = mongoose.model('Product', productSchema)

// module.exports = schema
const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    LinkedInSchoolURL: {
        type: String,
        required: true
    },
    ResultsCount: {
        type: Number,
        required: true
    },
    FullName: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Headline: {
        type: String
    },
    JobTitle: {
        type: String
    },
    LocationArea: {
        type: String
    },
    ProfileURL: {
        type: String,
        required: true
    },
    ProfilePublicURL: {
        type: String
    },
    SalesNavProfileURL: {
        type: String
    },
    ProfileID: {
        type: String,
        required: true
    },
    MemberURN: {
        type: Number,
        required: true
    },
    TrackingID: {
        type: String
    },
    ConnectionDegree: {
        type: Number
    },
    ProfileThumbnail: {
        type: String
    },
    Timestamp: {
        type: Date,
        default: Date.now
    }
});

let profileModel = mongoose.model('Profile', profileSchema);

module.exports = profileModel;
