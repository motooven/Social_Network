import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reduceer";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    postPage: profileReducer,
    profilePage:  dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store