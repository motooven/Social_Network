import React from 'react'
import Arkane from "../../Logotip/Arkaneee.jpg"
import s from "./Profile.module.css"
import Post from "../Post/Post";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src={Arkane} alt=""/>
            <div>
                <div>av + description</div>
                <div>My posts</div>
                <textarea></textarea>
                <button>add post</button>
                <Post post="post 1" like="like 2"/>
                <Post post="post 2" like="like 3"/>
                <Post post="post 3" like="like 4"/>
            </div>
        </div>
    )
}


export default Profile