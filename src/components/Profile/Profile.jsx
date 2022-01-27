import React from 'react'
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = () => {


    return (
        <div className={s.content}>
            <Profileinfo />
            <MyPostsContainer />
        </div>
    )
}


export default Profile
