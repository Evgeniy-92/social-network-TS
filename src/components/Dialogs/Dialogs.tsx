import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType ={
    dialogsPage: DialogsPageType
}


function Dialogs(props: DialogsPropsType) {


    const dialogElement = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} avatar={d.avatar} id={d.id}/>)
    const messageElement = props.dialogsPage.messagesData.map(m => <Message key={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;