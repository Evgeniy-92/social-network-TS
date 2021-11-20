import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from "react-router-dom";


function Dialogs(props: DialogsPropsType) {


    const dialogElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} avatar={d.avatar}
                                                                             id={d.id}/>)
    const messageElement = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    let valueTextarea = props.newMessageText

    const sendMessage = () => {
        props.sendMessageCallback()
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value
        props.changeHandlerCallback(newValue)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.newMessage}>
                    <textarea value={valueTextarea} onChange={changeHandler}/>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;