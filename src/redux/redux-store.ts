import {combineReducers, createStore} from 'redux';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';
import { authReducer } from './auth-reducer';




let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)




// @ts-ignore
window.store = store