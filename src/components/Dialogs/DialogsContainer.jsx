import React from 'react'
import {addPostSecondPageActionCreator} from "../../redux/dialogs-reduceer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return {
        dialogsData:    state.profilePage.dialogsData,
        dialogsMessage: state.profilePage.dialogsMessage,
        newPostText:    state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newMessageBody) => {

            dispatch(addPostSecondPageActionCreator(newMessageBody))
        },

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

