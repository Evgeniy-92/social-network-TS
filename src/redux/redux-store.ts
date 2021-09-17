import {combineReducers, createStore} from 'redux';
import {dialogReducer, messageTextChangeAC, sendMessageAC} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {addPostAC, postTextChangeAC, profileReducer} from './profile-reducer';


export type ActionType =
    ReturnType<typeof addPostAC> | ReturnType<typeof postTextChangeAC>
    | ReturnType<typeof sendMessageAC> | ReturnType<typeof messageTextChangeAC>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)




declare let window: any
window.store = store