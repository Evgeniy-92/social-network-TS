import {ActionType} from './redux-store';

export type FriendType = {
    id: number
    name: string
    avatar: string
}

let initialState = {
    friends: [
        {id: 1, name: 'Sasha', avatar: 'https://i.pinimg.com/736x/01/6b/86/016b86df2200d0b3a456d0a32d4cd6ee.jpg'},
        {id: 2, name: 'Sveta', avatar: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'},
        {
            id: 3,
            name: 'Artem',
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/921428922390606987/2C883A46ECD723CD92FCA1719FF706AE09286B71/'
        },
    ] as Array<FriendType>
}

export type SidebarInitialStateType = typeof initialState

export const sidebarReducer = (state: SidebarInitialStateType = initialState, action: ActionType): SidebarInitialStateType => {


    return state
}