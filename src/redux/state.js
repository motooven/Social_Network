let store = {

    _state: {
        profilePage: {
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

            newPostText: "Hello"
        },
        dialogsPage: {
            Post: [
                {id:1, name: 'post 1', like: 'like 2'},
                {id:2, name: 'post 2', like: 'like 3'}],

            newPostText: "Mazday",
        },
        sidebar: {}
    },
    _callSubscriber() {   },

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 3,
                name: this._state.dialogsPage.newPostText,
                like: 0,
            }
            this._state.dialogsPage.Post.push(newPost)
            this._state.dialogsPage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.dialogsPage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === "ADD-POST-SECOND-PAGE") {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
            }
            this._state.profilePage.dialogsMessage.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT-SECOND-PAGE") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

    },

}

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST_SECOND_PAGE = "ADD-POST-SECOND-PAGE"
const UPDATE_NEW_POST_TEXT_SECOND_PAGE = "UPDATE-NEW-POST-TEXT-SECOND-PAGE"

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = () => ({type: UPDATE_NEW_POST_TEXT})
export const addPostSecondPageActionCreator = () => ( {type: ADD_POST_SECOND_PAGE} )
export const updateNewPostTextSecondPageActionCreator = (newText) => ( {type: UPDATE_NEW_POST_TEXT_SECOND_PAGE, newText: newText})

export default store
window.store = store
