import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {MyPostsPropsType} from './MyPostsContainer';



function  MyPosts(props: MyPostsPropsType) {

    const postElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    const valueTextarea = props.newPostText

    const addPost = () => {
        props.addPostCallback()
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value
        props.changeHandlerCallback(newValue)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={valueTextarea}
                              onChange={changeHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;