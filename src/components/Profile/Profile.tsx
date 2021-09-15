import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    store: StoreType
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;