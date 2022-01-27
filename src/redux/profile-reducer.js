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
            let stateCopy = {...state}
            stateCopy.Post = [...state.Post]
            stateCopy.Post.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
             let stateCopy = {...state}
            stateCopy.newPostText = action.newText
             return stateCopy
        }
        default:
             return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export default profileReducer
