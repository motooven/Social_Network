import React from 'react';
import Arkane from '../../Logotip/Arkane_user.png'
import s from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={Arkane} alt=""/>
            {props.post} <br/>
            {props.like}
        </div>
    );
};

export default Post;