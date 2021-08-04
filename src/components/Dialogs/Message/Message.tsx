import React from "react";
import s from "./Message.module.css";


type messagePropsType = {
    message: string
}

function Message(props: messagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.circle}></div>
            {props.message}
        </div>
    )
}


export default Message;