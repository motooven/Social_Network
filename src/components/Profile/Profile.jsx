import React from 'react'
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = (props) => {


    return (
        <div className={s.content}>
            <Profileinfo profile={props.profile} isAuth={props.isAuth} />
            <MyPostsContainer />
        </div>
    )
}


export default Profile
