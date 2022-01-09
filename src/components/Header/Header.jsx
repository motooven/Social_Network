import React from 'react'
import Arkane from "../../Logotip/Arkane.png"
import s from "./Header.module.css"



const Header = () => {
    return (
        <div className={s.header}>
            <img src={Arkane} alt=""/>
        </div>
    )
}


export default Header