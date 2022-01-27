import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reduceer";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    postPage: profileReducer,
    profilePage:  dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store