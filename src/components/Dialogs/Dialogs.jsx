import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

// <div className={s.navbar}>
//     <div><NavLink to="/profile"  activeClassName={s.active}>Profile</NavLink></div>


const Dialogs = () => {
    return (
        <div className={s.main}>
            <div className={s.name}>
                <div><NavLink to="/dialogs/1"  activeClassName={s.active}>Sveta</NavLink></div>
                <div><NavLink to="/dialogs/2"  activeClassName={s.active}>Mashka</NavLink></div>
                <div><NavLink to="/dialogs/3"  activeClassName={s.active}>Lizka</NavLink></div>
                <div><NavLink to="/dialogs/4"  activeClassName={s.active}>Nasta</NavLink></div>
                <div><NavLink to="/dialogs/5"  activeClassName={s.active}>Dasha</NavLink></div>
            </div>

            <div className={s.message}>
                <div>Всем привет</div>
                <div>Как ваши дела</div>
                <div>О я тут новенькая</div>
                <div>Хочу поехать в Крым</div>
                <div>Кто вы такие?</div>
            </div>
        </div>
    );
};

export default Dialogs;