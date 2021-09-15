import {ActionType, SidebarType} from './store';

let initialState = {
    friendsData: [
        {id: 1, name: "Sasha", avatar: "https://i.pinimg.com/736x/01/6b/86/016b86df2200d0b3a456d0a32d4cd6ee.jpg"},
        {id: 2, name: "Sveta", avatar: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"},
        {id: 3, name: "Artem", avatar: "https://steamuserimages-a.akamaihd.net/ugc/921428922390606987/2C883A46ECD723CD92FCA1719FF706AE09286B71/"},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionType) => {


    return state
}