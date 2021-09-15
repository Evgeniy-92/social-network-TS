import {ActionType, PostDataType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST'
const POST_TEXT_CHANGE = 'POST-TEXT-CHANGE'

let initialState = {
    postData: [
        {id: 1, message: "Hello world", likesCount: 5},
        {id: 2, message: "Ho Ho Ho", likesCount: 7},
        {id: 3, message: "Yo Yo Yo", likesCount: 45},
    ],
    newPostText: ''}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostDataType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case 'POST-TEXT-CHANGE':
            state.newPostText = action.value
            return state
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