import s from "../Navbar.module.css";
import React from "react";

type FriendsPropsType = {
    avatar: string
    name: string
}

function Friends(props: FriendsPropsType) {
    return (
        <div className={s.friendElement}>
            <div className={s.imagesFriend}>
                <img src={props.avatar} alt=""/>
            </div>
            <span>{props.name}</span>
        </div>
    )
}

export default Friends