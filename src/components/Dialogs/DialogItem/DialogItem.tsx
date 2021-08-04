import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

type dialogPropsType = {
    name: string
    id: number
    avatar: string
}


function DialogItem(props: dialogPropsType) {
    return (
        <div className={s.dialogItem}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;