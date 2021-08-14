import React from "react";
import {renderTree} from '../renderTree';


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

const state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: "Hello world", likesCount: 5},
            {id: 2, message: "Ho Ho Ho", likesCount: 7},
            {id: 3, message: "Yo Yo Yo", likesCount: 45},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Yauheni", avatar: "https://www.meme-arsenal.com/memes/f30e0f3061f1fec450b8784456623134.jpg"},
            {id: 2, name: "Karina", avatar: "https://avatars.mds.yandex.net/get-zen_doc/3512693/pub_5efb3ff066fe1d5006536937_5efb4be4cdd4d637ce0fd2e8/scale_1200"},
            {id: 3, name: "Serhey", avatar: "https://download-cs.net/steam/avatars/3358.jpg"},
            {id: 4, name: "Vladislav", avatar: "https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/7421d4ff88134f7a9c0cf86ac846e2e9.png"},
            {id: 5, name: "Dmitriy", avatar: "https://cs-site.ru/uploads/posts/2020-09/1599743334_40.jpg"},
            {id: 6, name: "Kristina", avatar: "https://www.meme-arsenal.com/memes/5166d05c57fdc25fe08c2aab0e59ef63.jpg"},
            {id: 7, name: "Tatyana", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuWO0rilu76gqedyA8-fXVMeSWUp97REVc1CIEp98H5al8k5wcKWOSmCXgCLRZXr3h0M&usqp=CAU"},
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra"},
            {id: 3, message: "YoYoYo"},
        ],
        newMessageText: ''
    },
    sidebar: {
        friendsData: [
            {id: 1, name: "Sasha", avatar: "https://i.pinimg.com/736x/01/6b/86/016b86df2200d0b3a456d0a32d4cd6ee.jpg"},
            {id: 2, name: "Sveta", avatar: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"},
            {id: 3, name: "Artem", avatar: "https://steamuserimages-a.akamaihd.net/ugc/921428922390606987/2C883A46ECD723CD92FCA1719FF706AE09286B71/"},
        ]
    }
}

export const addPost = () => {
    const newPost: PostDataType = {id: 4, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)
}

export const sendMessage = () => {
    const newMessage: MessagesDataType = {id: 4, message: state.dialogsPage.newMessageText}
    state.dialogsPage.messagesData.push(newMessage)
    state.dialogsPage.newMessageText = ''
    renderTree(state)
}

export const postTextChange = (value: string) => {
    state.profilePage.newPostText = value
    renderTree(state)
}

export const messageTextChange = (value: string) => {
    state.dialogsPage.newMessageText = value
    renderTree(state)
}


export default state