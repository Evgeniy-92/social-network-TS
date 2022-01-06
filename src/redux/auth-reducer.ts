import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";

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
                ...action.payload,
            }
        default:
            return state
    }

}

type ActionType = ReturnType<typeof setIsAuthAndLogin>

export const setIsAuthAndLogin = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {userID, email, login, isAuth}
} as const);



export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setIsAuthAndLogin(id, email, login, true))
            }
        })
}

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<any>) => {
    authAPI.login(data)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch<any>) => {
    authAPI.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setIsAuthAndLogin(null, null, null, false))
            }
        })
}

