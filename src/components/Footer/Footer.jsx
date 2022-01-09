import React from 'react'
import s from './Footer.module.css'
import Arkane from '../../Logotip/Arkane.png'

const Footer = () => {
    return (
        <div className={s.footer}>
            <img src={Arkane} alt=""/>
        </div>
    )
}

export default Footer