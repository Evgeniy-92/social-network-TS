import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false,
}

type InitialStateType = {
    initialized: boolean
}


export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

type ActionType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS',} as const);



export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })
}


