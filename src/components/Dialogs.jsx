import React from 'react'
import Logo_02 from "../Logotip/logo_02.jpg"
import s from "./Content.module.css"
import Post from "./Post";

const Content = () => {
    return (
        <div className={s.content}>
            <img src={Logo_02} alt=""/>
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


export default Content