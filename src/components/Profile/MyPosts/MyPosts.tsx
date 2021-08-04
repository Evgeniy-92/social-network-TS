import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import {PostDataType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostDataType>
}

function MyPosts(props: MyPostsPropsType) {

    const postElement = props.posts.map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;