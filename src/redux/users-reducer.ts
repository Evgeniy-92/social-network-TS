
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
    users: [] as Array<User>
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
            return {...state, users: [/*...state.users,*/ ...action.users]}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (id: number) => ({type: 'FOLLOW', id} as const)
export const unfollowAC = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsersAC = (users: Array<User>) => ({type: 'SET-USERS', users} as const)