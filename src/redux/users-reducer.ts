import {Dispatch} from "redux";
import {followAPI, usersAPI} from "../api/api";

type LocationType = {
    city: string
    country: string
}

export type User = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: { small: string, large: string }
}

export const initialState = {
    users: [] as Array<User>,
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    buttonActivity: [] as Array<number>,
}

export type UsersInitialStateType = typeof initialState

export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionType): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.id ? {...u, followed: true} : u)]
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.id ? {...u, followed: false} : u)]
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'CHANGE-CURRENT-PAGE':
            return {...state, currentPage: action.numberPage}
        case 'SET-TOTAL-USER-COUNT':
            return {...state, totalUserCount: action.totalCount}
        case 'CHANGE-IS-FETCHING':
            return {...state, isFetching: action.value}
        case "BUTTON-ACTIVITY-TOGGLE":
            return {
                ...state,
                buttonActivity: action.value
                    ? [...state.buttonActivity, action.userID]
                    : state.buttonActivity.filter(id => id != action.userID)
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers>
    | ReturnType<typeof changeCurrentPage> | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof changeIsFetching> | ReturnType<typeof buttonActivityToggle>

export const follow = (id: number) => ({type: 'FOLLOW', id} as const)
export const unfollow = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsers = (users: Array<User>) => ({type: 'SET-USERS', users} as const)
export const changeCurrentPage = (numberPage: number) => ({type: 'CHANGE-CURRENT-PAGE', numberPage} as const)
export const setTotalUserCount = (totalCount: number) => ({type: 'SET-TOTAL-USER-COUNT', totalCount} as const)
export const changeIsFetching = (value: boolean) => ({type: 'CHANGE-IS-FETCHING', value } as const)
export const buttonActivityToggle = (value: boolean, userID: number) => ({type: 'BUTTON-ACTIVITY-TOGGLE', value, userID } as const)


export const getUsersTC = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(changeIsFetching(true))
    usersAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(changeIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
}

export const unfollowTC = (userID: number) => (dispatch: Dispatch) => {
    dispatch(buttonActivityToggle(true, userID))
    followAPI.unfollowed(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userID))
            }
            dispatch(buttonActivityToggle(false, userID))
        })
}

export const followTC = (userID: number) => (dispatch: Dispatch) => {
    dispatch(buttonActivityToggle(true, userID))
    followAPI.followed(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userID))
            }
            dispatch(buttonActivityToggle(false, userID))
        })
}