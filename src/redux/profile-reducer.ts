import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const POST_TEXT_CHANGE = 'POST-TEXT-CHANGE'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {small: string, large: string}
}

let initialState = {
    postData: [
        {id: 1, message: "Hello world", likesCount: 5},
        {id: 2, message: "Ho Ho Ho", likesCount: 7},
        {id: 3, message: "Yo Yo Yo", likesCount: 45},
    ] as Array<PostType>,
    newPostText: '',
    profile: {} as ProfileType
}
export type ProfileInitialStateType = typeof initialState

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionType): ProfileInitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        case 'POST-TEXT-CHANGE':
            return {
                ...state,
                newPostText: action.value
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof postTextChangeAC> | ReturnType<typeof setUserProfile>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const postTextChangeAC = (postText: string) => {
    return {
        type: POST_TEXT_CHANGE,
        value: postText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const getUserProfile = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userID)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}