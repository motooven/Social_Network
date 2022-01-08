import React from 'react'
import Logo_02 from "../Logotip/logo_02.jpg"


const Content = () => {
    return (
        <div className="content">
            <img src={Logo_02} alt=""/>
            <div>
                <div>av + description</div>
                <div>My posts</div>
                <div>New post</div>
                <div>
                    post 11 <br/>
                    post 22
                </div>
            </div>
        </div>
    )
}


export default Content