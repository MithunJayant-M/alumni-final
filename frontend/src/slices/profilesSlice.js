// import { createSlice } from "@reduxjs/toolkit";


// const productsSlice = createSlice({
//     name: 'products',
//     initialState: {
//         loading: false
//     },
//     reducers: {
//         productsRequest(state, action){
//             return {
//                 loading: true
//             }
//         },
//         productsSuccess(state, action){
//             return {
//                 loading: false,
//                 products: action.payload.products,
//                 productsCount: action.payload.count,
//                 resPerPage : action.payload.resPerPage
//             }
//         },
//         productsFail(state, action){
//             return {
//                 loading: false,
//                 error:  action.payload
//             }
//         },
//         adminProductsRequest(state, action){
//             return {
//                 loading: true
//             }
//         },
//         adminProductsSuccess(state, action){
//             return {
//                 loading: false,
//                 products: action.payload.products,
//             }
//         },
//         adminProductsFail(state, action){
//             return {
//                 loading: false,
//                 error:  action.payload
//             }
//         },
//         clearError(state, action){
//             return {
//                 ...state,
//                 error:  null
//             }
//         }
//     }
// });

// const { actions, reducer } = productsSlice;

// export const { 
//     productsRequest, 
//     productsSuccess, 
//     productsFail,
//     adminProductsFail,
//     adminProductsRequest,
//     adminProductsSuccess

// } = actions;

// export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const profilesSlice = createSlice({
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
                profile: action.payload
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

const { actions, reducer } = profilesSlice;

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
