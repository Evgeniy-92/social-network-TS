import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {PostDataType, ProfilePageType} from '../../../redux/state';

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPostCallback: () => void
    postChange: (value: string) => void

}

function MyPosts(props: MyPostsPropsType) {

    const postElement = props.profilePage.postData.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    const valueTextarea = props.profilePage.newPostText

    const addPost = () => {
        props.addPostCallback()
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value
        props.postChange(newValue)
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