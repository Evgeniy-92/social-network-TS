import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': '2001bc12-c152-42bc-ace8-0356c6077198'
    },
})

export const usersAPI = {
    getUsers(pageSize: number , pageNumber: number) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(res => res.data)
    }
}


export const followAPI = {
    followed(id: number) {
        return instance.post<PostAndDeleteResponseType>(`follow/${id}`)
            .then(res => res.data)
    },
    unfollowed(id: number){
        return instance.delete<PostAndDeleteResponseType>(`follow/${id}`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get<ResponseGetProfileType>('profile/' + userID)
            .then(res => {
                return res.data})
    },
    getStatus(userID: string) {
        return instance.get<string>('profile/status/' + userID)
            .then(res => {
                return res.data
            })
    },
    updateStatus(status: string) {
        return instance.put<ResponseUpdateStatusType>('profile/status/', {status})
            .then(res => {
                return res.data
            })
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get<getResponseType>(`auth/me`)
            .then(res => {
                return res.data
            })
    },
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<LoginPostResponseType>>('/auth/login', data)
            .then(res => {
                return res.data
            })
    },
    logout() {
        return instance.delete<LoginPostResponseType>('/auth/login')
            .then(res => {
                return res.data
            })
    }
}
// type
export type LoginPostResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {userID: number}
    fieldsErrors: Array<string>
}

export type FormikErrorType = {
    email: string
    password: string
    rememberMe?: boolean
}

export type LoginParamsType = FormikErrorType & {
    captcha?: boolean
}

type ResponseUpdateStatusType = {
    resultCode: number
    messages: Array<string>,
    data: {}
    fieldsErrors: Array<string>
}

type ContactsProfileType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ResponseGetProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsProfileType
    photos: {small: string, large: string}

}

type PostAndDeleteResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
    fieldsErrors: Array<string>
}

type authType = {
    id: number
    login: string
    email: string
}

type getResponseType = {
    data: authType
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}