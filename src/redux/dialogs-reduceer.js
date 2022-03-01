const ADD_POST_SECOND_PAGE = "ADD-POST-SECOND-PAGE"
const UPDATE_NEW_POST_TEXT_SECOND_PAGE = "UPDATE-NEW-POST-TEXT-SECOND-PAGE"


let initialState = {

        dialogsData: [
            {id:1, name: 'Sveta'},
            {id:2, name: 'Mash'},
            {id:3, name: 'Nasta'},
            {id:4, name: 'Olga'},
            {id:5, name: 'Vika'}],

        dialogsMessage: [
            {id:1, message: 'Где вы все.'},
            {id:2, message: 'Всем привет..'},
            {id:3, message: 'Как ваши дела...'},
            {id:4, message: 'Пошлите гулять....'},
            {id:5, message: 'Как вы живете?.....'}],
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST_SECOND_PAGE: {
            let newPostText = action.newMessageBody
            return  {
               ...state,
               dialogsMessage: [...state.dialogsMessage, {id: 6, message: newPostText}]
            } }

        case UPDATE_NEW_POST_TEXT_SECOND_PAGE: {
            return  {...state, newPostText: action.newText }
        }
        default:
            return state
    }
}


export const addPostSecondPageActionCreator = (newMessageBody) => ( {type: ADD_POST_SECOND_PAGE, newMessageBody} )
export const updateNewPostTextSecondPageActionCreator = (newText) => ( {type: UPDATE_NEW_POST_TEXT_SECOND_PAGE, newText: newText})

export default dialogReducer