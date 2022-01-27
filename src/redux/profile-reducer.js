const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {

        Post: [
            {id:1, name: 'post 1', like: 'like 2'},
            {id:2, name: 'post 2', like: 'like 3'}],

        newPostText: "Mazday",

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
        default:
             return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export default profileReducer
