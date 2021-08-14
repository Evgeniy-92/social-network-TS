import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType, messageTextChange} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessageCallback: () => void
    messageTextChange: (value: string) => void
}


function Dialogs(props: DialogsPropsType) {


    const dialogElement = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} avatar={d.avatar}
                                                                             id={d.id}/>)
    const messageElement = props.dialogsPage.messagesData.map(m => <Message message={m.message}/>)

    let valueTextarea = props.dialogsPage.newMessageText

    const sendMessage = () => {
        props.sendMessageCallback()
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value
        props.messageTextChange(newValue)
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