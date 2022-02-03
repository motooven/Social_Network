import React from 'react'
import Arkane from "../../Logotip/Arkane.png"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <div className={s.header}>
            <img src={Arkane} alt=""/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    )
}


export default Header