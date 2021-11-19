import {Dispatch} from "redux";
import {authAPI} from "../api/api";

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

type InitialStateType = {
    userID: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}

type ActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userID: number, email: string, login: string) => ({
    type: 'SET-USER-DATA',
    data: {userID, email, login}
} as const);

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}