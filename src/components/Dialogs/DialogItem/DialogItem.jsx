import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = (props) => {
    return (
            <div><NavLink to={`/dialogs/${props.id}`}  activeClassName={s.active}>{props.name}</NavLink></div>
        )}

export default DialogItem;