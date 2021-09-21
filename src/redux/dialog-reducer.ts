const SEND_MESSAGE = 'SEND-MESSAGE'
const MESSAGE_TEXT_CHANGE = 'MESSAGE-TEXT-CHANGE'

export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessagesType = {
    id: number
    message: string
}

let initialState = {
        dialogsData: [
            {id: 1, name: "Yauheni", avatar: "https://www.meme-arsenal.com/memes/f30e0f3061f1fec450b8784456623134.jpg"},
            {id: 2, name: "Karina", avatar: "https://avatars.mds.yandex.net/get-zen_doc/3512693/pub_5efb3ff066fe1d5006536937_5efb4be4cdd4d637ce0fd2e8/scale_1200"},
            {id: 3, name: "Serhey", avatar: "https://download-cs.net/steam/avatars/3358.jpg"},
            {id: 4, name: "Vladislav", avatar: "https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/7421d4ff88134f7a9c0cf86ac846e2e9.png"},
            {id: 5, name: "Dmitriy", avatar: "https://cs-site.ru/uploads/posts/2020-09/1599743334_40.jpg"},
            {id: 6, name: "Kristina", avatar: "https://www.meme-arsenal.com/memes/5166d05c57fdc25fe08c2aab0e59ef63.jpg"},
            {id: 7, name: "Tatyana", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuWO0rilu76gqedyA8-fXVMeSWUp97REVc1CIEp98H5al8k5wcKWOSmCXgCLRZXr3h0M&usqp=CAU"},
        ] as Array<DialogType>,
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra"},
            {id: 3, message: "YoYoYo"},
        ] as Array<MessagesType>,
        newMessageText: ''
    }

export type DialogsInitialStateType = typeof initialState

export const dialogReducer = (state: DialogsInitialStateType = initialState, action: ActionType): DialogsInitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessagesType = {
                id: 4,
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        case MESSAGE_TEXT_CHANGE:
            return {
                ...state,
                newMessageText: action.value
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof sendMessageAC> | ReturnType<typeof messageTextChangeAC>

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const messageTextChangeAC = (messageText: string) => {
    return {
        type: MESSAGE_TEXT_CHANGE,
        value: messageText
    } as const
}