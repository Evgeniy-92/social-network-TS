import React from 'react';

import {StoreType} from '../../redux/redux-store';
import {messageTextChangeAC, sendMessageAC} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

type DialogsPropsType = {
   store: StoreType
}


function DialogsContainer(props: DialogsPropsType) {

    const dialogsPage = props.store.getState().dialogsPage

    const sendMessageCallback = () => {
        props.store.dispatch(sendMessageAC())
    }

    const changeHandlerCallback = (newValue: string) => {
        props.store.dispatch(messageTextChangeAC(newValue))
    }


    return (
        <Dialogs
            dialogsPage={dialogsPage}
            sendMessageCallback={sendMessageCallback}
            changeHandlerCallback={changeHandlerCallback}/>
    )
};

export default DialogsContainer;