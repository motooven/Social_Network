import React from 'react'
import {addPostSecondPageActionCreator, updateNewPostTextSecondPageActionCreator} from "../../redux/dialogs-reduceer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsData:    state.profilePage.dialogsData,
        dialogsMessage: state.profilePage.dialogsMessage,
        newPostText:    state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostSecondPageActionCreator())
        },
        onPostChange: (newText) => {
            dispatch(updateNewPostTextSecondPageActionCreator(newText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer