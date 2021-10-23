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
        return instance.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(res => res.data)
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get<getResponseType>(`auth/me`)
            .then(res => res.data)
    }
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