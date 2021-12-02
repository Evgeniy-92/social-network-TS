import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


function Dialogs(props: DialogsPropsType) {


    const dialogElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} avatar={d.avatar}
                                                                             id={d.id}/>)
    const messageElement = props.messages.map(m => <Message key={m.id} message={m.message}/>)


    const onSubmitHandler = (value: FormDataMessageType) => {
        props.sendMessageCallback(value.newMessage)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <ReduxAddMessageForm onSubmit={onSubmitHandler}/>
            </div>
        </div>
    )
}



export const AddMessageForm = (props: InjectedFormProps<FormDataMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.newMessage}>
            <Field component='textarea' name='newMessage' placeholder='new message'/>
            <button>send</button>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm<FormDataMessageType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

type FormDataMessageType = {
    newMessage: string
}

export default Dialogs;