// import axios from 'axios';
// import { productsFail, productsSuccess, productsRequest, adminProductsRequest, adminProductsSuccess, adminProductsFail } from '../slices/productsSlice';
// import { productFail, productSuccess, productRequest, createReviewRequest, createReviewSuccess, createReviewFail, newProductRequest, newProductSuccess, newProductFail, deleteProductRequest, deleteProductSuccess, deleteProductFail, updateProductRequest, updateProductSuccess, updateProductFail, reviewsRequest, reviewsSuccess, reviewsFail, deleteReviewRequest, deleteReviewSuccess, deleteReviewFail } from '../slices/productSlice';

// export const getProducts = (keyword, price, category, rating, currentPage) => async (dispatch) => {

//     try {  
//         dispatch(productsRequest()) 
//         let link = `/api/v1/products?page=${currentPage}`;
        
//         if(keyword) {
//             link += `&keyword=${keyword}`
//         }
//         if(price) {
//             link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`
//         }
//         if(category) {
//             link += `&category=${category}`
//         }
//         if(rating) {
//             link += `&ratings=${rating}`
//         }
        
//         const { data }  =  await axios.get(link);
//         dispatch(productsSuccess(data))
//     } catch (error) {
//         //handle error
//         dispatch(productsFail(error.response.data.message))
//     }
    
// }


// export const getProduct = id => async (dispatch) => {

//     try {  
//         dispatch(productRequest()) 
//         const { data }  =  await axios.get(`/api/v1/product/${id}`);
//         dispatch(productSuccess(data))
//     } catch (error) {
//         //handle error
//         dispatch(productFail(error.response.data.message))
//     }
    
// }

// export const createReview = reviewData => async (dispatch) => {

//     try {  
//         dispatch(createReviewRequest()) 
//         const config = {
//             headers : {
//                 'Content-type': 'application/json'
//             }
//         }
//         const { data }  =  await axios.put(`/api/v1/review`,reviewData, config);
//         dispatch(createReviewSuccess(data))
//     } catch (error) {
//         //handle error
//         dispatch(createReviewFail(error.response.data.message))
//     }
    
// }

// export const getAdminProducts  =  async (dispatch) => {

//     try {  
//         dispatch(adminProductsRequest()) 
//         const { data }  =  await axios.get(`/api/v1/admin/products`);
//         dispatch(adminProductsSuccess(data))
//     } catch (error) {
//         //handle error
//         dispatch(adminProductsFail(error.response.data.message))
//     }
    
// }

// export const createNewProduct  =  productData => async (dispatch) => {

//     try {  
//         dispatch(newProductRequest()) 
//         const { data }  =  await axios.post(`/api/v1/admin/product/new`, productData);
//         dispatch(newProductSuccess(data))
//     } catch (error) {
//         //handle error
//         dispatch(newProductFail(error.response.data.message))
//     }
    
// }

// export const deleteProduct  =  id => async (dispatch) => {

//     try {  
//         dispatch(deleteProductRequest()) 
//         await axios.delete(`/api/v1/admin/product/${id}`);
//         dispatch(deleteProductSuccess())
//     } catch (error) {
//         //handle error
//         dispatch(deleteProductFail(error.response.data.message))
//     }
    
// }

// export const updateProduct  =  (id, productData) => async (dispatch) => {

//     try {  
//         dispatch(updateProductRequest()) 
//         const { data }  =  await axios.put(`/api/v1/admin/product/${id}`, productData);
//         dispatch(updateProductSuccess(data))
//     } catch (error) {
//         //handle error
//         dispatch(updateProductFail(error.response.data.message))
//     }
    
// }


// export const getReviews =  id => async (dispatch) => {

//     try {  
//         dispatch(reviewsRequest()) 
//         const { data }  =  await axios.get(`/api/v1/admin/reviews`,{params: {id}});
//         dispatch(reviewsSuccess(data))
//     } catch (error) {
//         //handle error
//         dispatch(reviewsFail(error.response.data.message))
//     }
    
// }

// export const deleteReview =  (productId, id) => async (dispatch) => {

//     try {  
//         dispatch(deleteReviewRequest()) 
//         await axios.delete(`/api/v1/admin/review`,{params: {productId, id}});
//         dispatch(deleteReviewSuccess())
//     } catch (error) {
//         //handle error
//         dispatch(deleteReviewFail(error.response.data.message))
//     }
    
// }
import axios from 'axios';
import {
    profilesFail,
    profilesSuccess,
    profilesRequest,
    profileFail,
    profileSuccess,
    profileRequest,
    newProfileRequest,
    newProfileSuccess,
    newProfileFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    deleteProfileRequest,
    deleteProfileSuccess,
    deleteProfileFail
} from '../slices/profileSlice';

// Get all profiles
export const getProfiles = () => async (dispatch) => {
    try {
        dispatch(profilesRequest());
        const { data } = await axios.get('/api/v1/profiles');
        dispatch(profilesSuccess(data));
    } catch (error) {
        dispatch(profilesFail(error.response.data.message));
    }
};

// Get single profile
export const getProfile = (id) => async (dispatch) => {
    try {
        dispatch(profileRequest());
        const { data } = await axios.get(`/api/v1/profile/${id}`);
        dispatch(profileSuccess(data));
    } catch (error) {
        dispatch(profileFail(error.response.data.message));
    }
};

// Create new profile
export const createProfile = (profileData) => async (dispatch) => {
    try {
        dispatch(newProfileRequest());
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        // const { data } = await axios.post('/api/v1/profile/new', profileData, config);
        const { data } = await axios.post('/api/v1/admin/profile/new', profileData, config);

        dispatch(newProfileSuccess(data));
    } catch (error) {
        dispatch(newProfileFail(error.response.data.message));
    }
};

// Update profile
export const updateProfile = (id, profileData) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest());
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.put(`/api/v1/admin/profile/${id}`, profileData, config);
        dispatch(updateProfileSuccess(data));
    } catch (error) {
        dispatch(updateProfileFail(error.response.data.message));
    }
};

// Delete profile
export const deleteProfile = (id) => async (dispatch) => {
    try {
        dispatch(deleteProfileRequest());
        await axios.delete(`/api/v1/admin/profile/${id}`);
        dispatch(deleteProfileSuccess());
    } catch (error) {
        dispatch(deleteProfileFail(error.response.data.message));
    }
};
