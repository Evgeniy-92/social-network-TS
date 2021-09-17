import {ActionType} from './redux-store';

const ADD_POST = 'ADD-POST'
const POST_TEXT_CHANGE = 'POST-TEXT-CHANGE'

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
    newPostText: ''
}

export type ProfileInitialStateType = typeof initialState

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionType): ProfileInitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            const stateCopy = {...state, postData: [...state.postData, newPost]}
            stateCopy.newPostText = ''
            return stateCopy
        }
        case 'POST-TEXT-CHANGE': {
            return {
                ...state,
                newPostText: action.value
            }
        }
        default:
            return state
    }
}
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