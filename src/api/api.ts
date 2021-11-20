import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'aa0a58e5-acc8-4916-88a6-1d587f1745ae'
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
    }
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