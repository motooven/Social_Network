import React from 'react';
import Arkane from "../../../Logotip/Arkaneee.jpg";
import s from './Profileinfo.module.css'

const Profileinfo = () => {
    return (
        <div className={s.ProInfo}>
            <img src={Arkane} alt=""/>
            <div className={s.ProInfo__avDis}>av + description</div>
        </div>
    );
};

export default Profileinfo;