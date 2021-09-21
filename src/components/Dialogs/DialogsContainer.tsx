import React from 'react';
import {
    DialogsInitialStateType,
    DialogType,
    MessagesType,
    messageTextChangeAC,
    sendMessageAC
} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStatePropsType ={
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newMessageText: string
}

type MapDispatchPropsType = {
    sendMessageCallback: () => void
    changeHandlerCallback: (newValue: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessageCallback: () => {
            dispatch(sendMessageAC())
        },
        changeHandlerCallback: (newValue: string) => {
            dispatch(messageTextChangeAC(newValue))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;