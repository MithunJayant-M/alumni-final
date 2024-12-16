// import { createSlice } from "@reduxjs/toolkit";


// const productSlice = createSlice({
//     name: 'product',
//     initialState: {
//         loading: false,
//         product: {},
//         isReviewSubmitted: false,
//         isProductCreated: false,
//         isProductDeleted: false,
//         isProductUpdated: false,
//         isReviewDeleted: false,
//         reviews: []
//     },
//     reducers: {
//         productRequest(state, action){
//             return {
//                 ...state,
//                 loading: true
//             }
//         },
//         productSuccess(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 product: action.payload.product
//             }
//         },
//         productFail(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 error:  action.payload
//             }
//         },
//         createReviewRequest(state, action){
//             return {
//                 ...state,
//                 loading: true
//             }
//         },
//         createReviewSuccess(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 isReviewSubmitted: true
//             }
//         },
//         createReviewFail(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 error:  action.payload
//             }
//         },
//         clearReviewSubmitted(state, action) {
//             return {
//                 ...state,
//                 isReviewSubmitted: false
//             }
//         },
//         clearError(state, action) {
//            return{ ...state,
//             error: null
//            }
//         },
//         clearProduct(state, action) {
//             return{ ...state,
//                 product : {}
//             }
//         },
//         newProductRequest(state, action){
//             return {
//                 ...state,
//                 loading: true
//             }
//         },
//         newProductSuccess(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 product: action.payload.product,
//                 isProductCreated: true
//             }
//         },
//         newProductFail(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 error:  action.payload,
//                 isProductCreated: false
//             }
//         },
//         clearProductCreated(state, action) {
//             return {
//                 ...state,
//                 isProductCreated: false
//             }
//         },
//          newProductRequest(state, action){
//             return {
//                 ...state,
//                 loading: true
//             }
//         },
//         newProductSuccess(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 product: action.payload.product,
//                 isProductCreated: true
//             }
//         },
//         newProductFail(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 error:  action.payload,
//                 isProductCreated: false
//             }
//         },
//         clearProductCreated(state, action) {
//             return {
//                 ...state,
//                 isProductCreated: false
//             }
//         },
//         deleteProductRequest(state, action){
//             return {
//                 ...state,
//                 loading: true
//             }
//         },
//         deleteProductSuccess(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 isProductDeleted: true
//             }
//         },
//         deleteProductFail(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 error:  action.payload,
//             }
//         },
//         clearProductDeleted(state, action) {
//             return {
//                 ...state,
//                 isProductDeleted: false
//             }
//         },

//         updateProductRequest(state, action){
//             return {
//                 ...state,
//                 loading: true
//             }
//         },
//         updateProductSuccess(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 product: action.payload.product,
//                 isProductUpdated: true
//             }
//         },
//         updateProductFail(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 error:  action.payload,
//             }
//         },
//         clearProductUpdated(state, action) {
//             return {
//                 ...state,
//                 isProductUpdated: false
//             }
//         },

//         reviewsRequest(state, action){
//             return {
//                 ...state,
//                 loading: true
//             }
//         },
//         reviewsSuccess(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 reviews: action.payload.reviews
//             }
//         },
//         reviewsFail(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 error:  action.payload
//             }
//         },
//         deleteReviewRequest(state, action){
//             return {
//                 ...state,
//                 loading: true
//             }
//         },
//         deleteReviewSuccess(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 isReviewDeleted: true
//             }
//         },
//         deleteReviewFail(state, action){
//             return {
//                 ...state,
//                 loading: false,
//                 error:  action.payload,
//             }
//         },
//         clearReviewDeleted(state, action) {
//             return {
//                 ...state,
//                 isReviewDeleted: false
//             }
//         },

//     }
// });

// const { actions, reducer } = productSlice;

// export const { 
//     productRequest, 
//     productSuccess, 
//     productFail,
//     createReviewFail,
//     createReviewRequest,
//     createReviewSuccess,
//     clearError,
//     clearReviewSubmitted,
//     clearProduct,
//     newProductFail,
//     newProductSuccess,
//     newProductRequest,
//     clearProductCreated,
//     deleteProductFail,
//     deleteProductRequest,
//     deleteProductSuccess,
//     clearProductDeleted,
//     updateProductFail,
//     updateProductRequest,
//     updateProductSuccess,
//     clearProductUpdated,
//     reviewsRequest,
//     reviewsFail,
//     reviewsSuccess,
//     deleteReviewFail,
//     deleteReviewRequest,
//     deleteReviewSuccess,
//     clearReviewDeleted
// } = actions;

// export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profiles',
    initialState: {
        loading: false,
        profiles: [],
        profile: {},
        error: null,
        profilesCount: 0,
        resPerPage: 0
    },
    reducers: {
        profilesRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        profilesSuccess(state, action) {
            return {
                ...state,
                loading: false,
                profiles: action.payload.profiles,
                profilesCount: action.payload.count,
                resPerPage: action.payload.resPerPage
            };
        },
        profilesFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        },
        profileRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        profileSuccess(state, action) {
            return {
                ...state,
                loading: false,
                profile: action.payload
            };
        },
        profileFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        },
        newProfileRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        newProfileSuccess(state, action) {
            return {
                ...state,
                loading: false,
                profile: action.payload
            };
        },
        newProfileFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        },
        updateProfileRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        updateProfileSuccess(state, action) {
            return {
                ...state,
                loading: false,
                profile: action.payload.profile
            };
        },
        updateProfileFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        },
        deleteProfileRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        deleteProfileSuccess(state) {
            return {
                ...state,
                loading: false
            };
        },
        deleteProfileFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        },
        clearError(state) {
            return {
                ...state,
                error: null
            };
        }
    }
});

const { actions, reducer } = profileSlice;

export const {
    profilesRequest,
    profilesSuccess,
    profilesFail,
    profileRequest,
    profileSuccess,
    profileFail,
    newProfileRequest,
    newProfileSuccess,
    newProfileFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    deleteProfileRequest,
    deleteProfileSuccess,
    deleteProfileFail,
    clearError
} = actions;

export default reducer;
