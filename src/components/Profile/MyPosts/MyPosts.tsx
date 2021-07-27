import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

function MyPosts() {
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
                <Posts message={"Hello world"} countLikes={5}/>
                <Posts message={"Ho Ho Ho"} countLikes={7}/>
                <Posts message={"Yo Yo Yo"} countLikes={45}/>
            </div>
        </div>
    )
}

export default MyPosts;