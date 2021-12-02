import {Dispatch} from "redux";
import {profileAPI, ResponseGetProfileType} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_STATUS = 'SET-STATUS'
const CHANGE_STATUS = 'CHANGE-STATUS'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type PostType = {
    id: number
    message: string
    likesCount: number
}


let initialState = {
    postData: [
        {id: 1, message: "Hello world", likesCount: 5},
        {id: 2, message: "Ho Ho Ho", likesCount: 7},
        {id: 3, message: "Yo Yo Yo", likesCount: 45},
    ] as Array<PostType>,
    profile: {} as ResponseGetProfileType,
    status: '',
}
export type ProfileInitialStateType = typeof initialState

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionType): ProfileInitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 4,
                message: action.newPost,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "CHANGE-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof changeStatus>


export const addPostAC = (newPost: string) => {
    return {
        type: ADD_POST,
        newPost
    } as const
}

export const setUserProfile = (profile: ResponseGetProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const changeStatus = (status: string) => {
    return {
        type: CHANGE_STATUS,
        status
    } as const
}



export const getUserProfile = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userID)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userID)
        .then(data => {
            dispatch(setStatus(data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(changeStatus(status))
            }
        })
}