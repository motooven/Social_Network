const ADD_POST_SECOND_PAGE = "ADD-POST-SECOND-PAGE"
const UPDATE_NEW_POST_TEXT_SECOND_PAGE = "UPDATE-NEW-POST-TEXT-SECOND-PAGE"


const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST_SECOND_PAGE:
            let newPost = {
                id: 6,
                message: state.newPostText,
            }
            state.dialogsMessage.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT_SECOND_PAGE:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostSecondPageActionCreator = () => ( {type: ADD_POST_SECOND_PAGE} )
export const updateNewPostTextSecondPageActionCreator = (newText) => ( {type: UPDATE_NEW_POST_TEXT_SECOND_PAGE, newText: newText})

export default dialogReducer