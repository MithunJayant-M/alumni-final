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
