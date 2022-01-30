import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileContainerPropsType} from "./ProfileContainer";
import {ResponseGetProfileType} from "../../api/api";



type ProfilePropsType = {
    profile: ResponseGetProfileType
    status: string
    userID: number | null
    setUserProfile: (profile: ResponseGetProfileType) => void
    getUserProfile: (userID: string | number | null) => void
    getStatus: (userID: string | number | null) => void
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                {...props}
                isOwner={props.isOwner}
                profile={props.profile}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;