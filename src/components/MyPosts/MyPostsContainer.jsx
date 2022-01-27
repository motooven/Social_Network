import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator()) }
//
//                     let onPostChange = (newText) => {
//                         store.dispatch(updateNewPostTextActionCreator(newText))}
//
//                     return (
//                         <MyPosts onPostChange={onPostChange}
//                                  addPost={addPost}
//                                  dialogsPost={store.getState().postPage.Post}
//                                  newPostText={store.getState().postPage.newPostText}
//                         />
//                     ) } }
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogsPost: state.postPage.Post,
        newPostText: state.postPage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

