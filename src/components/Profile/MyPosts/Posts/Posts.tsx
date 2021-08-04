import React from "react";
import s from "./Posts.module.css";

type PostsPropsType = {
    message: string
    likesCount: number
}

function Posts(props: PostsPropsType) {
    return (
        <div className={s.item}>
            <img src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg"/>
            { props.message }
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Posts;