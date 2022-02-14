import React from 'react'
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <Profileinfo
                         savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         isAuth={props.isAuth}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    )
}


export default Profile
