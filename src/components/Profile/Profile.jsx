import React from 'react'
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <Profileinfo />
            <MyPosts dialogsPost={props.dialogsPost}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}

            />
        </div>
    )
}


export default Profile
