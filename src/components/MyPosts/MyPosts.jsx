import React from 'react';
import Post from "./Post/Post";




const MyPosts = (props) => {
    let dialogsElement = props.dialogsPost.map( p => <Post name={p.name} like={p.like} key={p.id} /> )
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.onPostChange(newText)
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