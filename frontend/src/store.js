// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import productsReducer from "./slices/productsSlice";
// import productReducer from './slices/profileSlice';
// import authReducer from './slices/authSlice';
// import userReducer from './slices/userSlice';

// // Combine all reducers
// const reducer = combineReducers({
//     productsState: productsReducer,
//     productState: productReducer,
//     authState: authReducer,
//     userState: userReducer,
// });

// // Configure the store
// const store = configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(thunk), // Correctly include thunk middleware
// });

// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import profilesReducer from "./slices/profilesSlice"; // Profiles state handling multiple profiles
import profileReducer from "./slices/profileSlice"; // Single profile state
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

// Combine all reducers
const reducer = combineReducers({
    profilesState: profilesReducer, // Handles multiple profiles
    profileState: profileReducer,  // Handles single profile
    authState: authReducer,
    userState: userReducer,
});

// Configure the store
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk), // Including thunk middleware
});

export default store;
