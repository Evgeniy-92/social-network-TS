import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

type dialogPropsType = {
    name: string
    id: number
}

function DialogItem(props: dialogPropsType) {
    return (
        <div className={s.dialogItem}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

type messagePropsType = {
    message: string
}

function Message(props: messagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Yauheni"} id={1}/>
                <DialogItem name={"Karina"} id={2}/>
                <DialogItem name={"Serhey"} id={3}/>
                <DialogItem name={"Vladislav"} id={4}/>
                <DialogItem name={"Dmitriy"} id={5}/>
                <DialogItem name={"Kristina"} id={6}/>
                <DialogItem name={"Tatyana"} id={7}/>

            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your it-kamasutra"}/>
                <Message message={"YoYoYo"}/>
            </div>
        </div>
    )
}

export default Dialogs;