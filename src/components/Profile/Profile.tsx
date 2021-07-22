import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.content}>
            <div className={s.mainBg}>
                <img src="https://kubnews.ru/upload/iblock/a61/a616a0977e9f98fff2f831fe7f316e24.jpg" alt=""/>
            </div>
            <div>
                ava+discr
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;