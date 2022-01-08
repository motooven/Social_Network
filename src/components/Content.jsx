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
                    post 1 <br/>
                    post 2
                </div>
            </div>
        </div>
    )
}


export default Content