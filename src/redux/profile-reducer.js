import {profileAPI, usersAPI} from "./api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"


let initialState = {

        Post: [
            {id:1, name: 'post 1', like: 'like 2'},
            {id:2, name: 'post 2', like: 'like 3'}],

        profile: null,
        status: "",

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                name: action.newPostText,
                like: 0,
            }

            return  {
                ...state,
                Post: [...state.Post, newPost],
                newPostText: ''
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}
            }
        }

        default:
             return state
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

//через .then
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(response.data))
            }
        })
}

//через async - await
export const updateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status)

            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}


export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        //единолично для поля facebook
        //dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]}}))
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer
