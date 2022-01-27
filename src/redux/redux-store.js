import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reduceer";
import sidebarReducer from "./sidebar-reduser";

let reducers = combineReducers({
    postPage: profileReducer,
    profilePage:  dialogReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers)

window.store = store

export default store