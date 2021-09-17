import React from 'react';
import {DialogsInitialStateType, messageTextChangeAC, sendMessageAC} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStatePropsType ={
    dialogsPage: DialogsInitialStateType
}

type MapDispatchPropsType = {
    sendMessageCallback: () => void
    changeHandlerCallback: (newValue: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
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