import React from 'react'
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {



    return (
        <div className={s.content}>
            <Profileinfo />
            <MyPosts dialogsPost={props.dialogsPost} addPost={props.addPost} />
        </div>
    )
}


export default Profile