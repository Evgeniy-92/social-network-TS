import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileContainerPropsType} from "./ProfileContainer";





function Profile(props: ProfileContainerPropsType) {
    return (
        <div>
            <ProfileInfo {...props} profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;