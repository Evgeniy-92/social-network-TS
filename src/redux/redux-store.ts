import {combineReducers, createStore} from 'redux';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';




let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)




declare let window: any
window.store = store