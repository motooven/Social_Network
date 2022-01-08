import React from 'react'
import Logo_01 from "../Logotip/logo_01.png"
import s from "./Header.module.css"



const Header = () => {
    return (
        <div className={s.header}>
            <img src={Logo_01} alt=""/>
        </div>
    )
}


export default Header