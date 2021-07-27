import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div>
            <div className={s.mainBg}>
                <img src="https://kubnews.ru/upload/iblock/a61/a616a0977e9f98fff2f831fe7f316e24.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+discr
            </div>
        </div>
    )
}

export default ProfileInfo;