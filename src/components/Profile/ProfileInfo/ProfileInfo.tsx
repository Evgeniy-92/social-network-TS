import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from '../../common/Preloader/Preloader';
import Status from "./Status";
import {ResponseGetProfileType} from "../../../api/api";
import userPhoto from '../../../assets/images/images.jpg';

type ProfileInfoPropsType = {
    profile: ResponseGetProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (Object.keys(props.profile).length == 0 && props.profile.constructor === Object) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.mainBg}>
                <img src="https://kubnews.ru/upload/iblock/a61/a616a0977e9f98fff2f831fe7f316e24.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type='file' onChange={mainPhotoSelected}/>}
                <Status
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;