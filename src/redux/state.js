import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reduceer";
import sidebarReducer from "./sidebar-reduser";

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
        postPage: {
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
        this._state.postPage = profileReducer(this._state.postPage, action)
        this._state.profilePage = dialogReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

export default store
window.store = store
