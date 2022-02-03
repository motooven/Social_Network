import {usersAPI} from "./api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {

        Post: [
            {id:1, name: 'post 1', like: 'like 2'},
            {id:2, name: 'post 2', like: 'like 3'}],

        newPostText: "Mazday",

        profile: null,

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                name: state.newPostText,
                like: 0,
            }

            return  {
                ...state,
                Post: [...state.Post, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
             return  {
                 ...state,
                 newPostText: action.newText
             }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
             return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}


export default profileReducer
