import React from 'react';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";




const MyPosts = (props) => {
    let dialogsElement = props.dialogsPost.map( p => <Post name={p.name} like={p.like} key={p.id} /> )
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <div>
            <div><h3>My posts</h3></div>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/><br/>
            <button onClick={addPost}>add post</button><br/><br/>
            {dialogsElement}
        </div>
    );};

export default MyPosts;