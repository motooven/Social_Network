import React from 'react'
import Arkane from "../../Logotip/Arkane.png"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <div className={s.header}>
            <img src={Arkane} alt=""/>

            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    )
}


export default Header