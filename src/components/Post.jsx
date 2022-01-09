import React from 'react';
import User_01 from '../Logotip/user_03.png'
import s from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={User_01} alt=""/>
            {props.post} <br/>
            {props.like}
        </div>
    );
};

export default Post;