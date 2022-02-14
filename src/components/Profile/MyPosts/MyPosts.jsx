import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
        <div><h3>My posts</h3></div>
        <Field
            component={Textarea}
            name="newPostText"
            placeholder={"textarea"}
            validate={[required, maxLength]}
        /><br/>
        <button>add post</button>
    </form>
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo(props => {
        let dialogsElement = [...props.dialogsPost].reverse().map(p => <Post name={p.name} like={p.like} key={p.id}/>)
        //let newPostElement = React.createRef()

        let addPost = (values) => {
            props.addPost(values.newPostText)
        }

        return (
            <div>
                <AddNewPostFormRedux onSubmit={addPost}/>
                <br/>
                {dialogsElement}
            </div>
        );
});

export default MyPosts;