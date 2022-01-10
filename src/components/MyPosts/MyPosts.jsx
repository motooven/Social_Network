import React from 'react';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let dialogsElement = props.dialogsPost.map( p => <Post name={p.name} like={p.like} key={p.id} /> )
    let newPostElement = React.createRef()

    let addPost = () => {
        let postMessage = newPostElement.current.value
        props.addPost(postMessage)
    }

    return (
        <div>
            <div><h3>My posts</h3></div>
            <textarea ref={newPostElement}></textarea><br/>
            <button onClick={addPost}>add post</button><br/><br/>
            {dialogsElement}
        </div>
    );};

export default MyPosts;