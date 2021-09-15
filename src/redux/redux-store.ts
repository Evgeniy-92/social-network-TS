import {combineReducers, createStore} from 'redux';
import {dialogReducer, messageTextChangeAC, sendMessageAC} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {addPostAC, postTextChangeAC, profileReducer} from './profile-reducer';

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogDataType = {
    id: number
    name: string
    avatar: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type FriendsDataType = {
    id: number
    name: string
    avatar: string
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}
export type SidebarType = {
    friendsData: Array<FriendsDataType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}


export type ActionType =
    ReturnType<typeof addPostAC> | ReturnType<typeof postTextChangeAC>
    | ReturnType<typeof sendMessageAC> | ReturnType<typeof messageTextChangeAC>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
})

export let store: StoreType = createStore(reducers)