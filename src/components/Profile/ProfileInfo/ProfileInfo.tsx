import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from '../../common/Preloader/Preloader';
import Status from "./Status";
import {ResponseGetProfileType} from "../../../api/api";
import {updateStatus} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ResponseGetProfileType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (Object.keys(props.profile).length == 0 && props.profile.constructor === Object) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.mainBg}>
                <img src="https://kubnews.ru/upload/iblock/a61/a616a0977e9f98fff2f831fe7f316e24.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                discr
                <Status
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;