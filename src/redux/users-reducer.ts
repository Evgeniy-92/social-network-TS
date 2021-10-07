
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
    isFetching: false
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
        default:
            return state
    }
}

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof changeCurrentPageAC> | ReturnType<typeof setTotalUserCountAC> | ReturnType<typeof changeIsFetchingAC>

export const followAC = (id: number) => ({type: 'FOLLOW', id} as const)
export const unfollowAC = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsersAC = (users: Array<User>) => ({type: 'SET-USERS', users} as const)
export const changeCurrentPageAC = (numberPage: number) => ({type: 'CHANGE-CURRENT-PAGE', numberPage} as const)
export const setTotalUserCountAC = (totalCount: number) => ({type: 'SET-TOTAL-USER-COUNT', totalCount} as const)
export const changeIsFetchingAC = (value: boolean) => ({type: 'CHANGE-IS-FETCHING', value } as const)
