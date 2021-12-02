import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


function  MyPosts(props: MyPostsPropsType) {

    const postElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)


    const onSubmitPostHandler = (formDataPost: FormDataPostType) => {
        console.log(formDataPost)
        props.addPostCallback(formDataPost.newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <ReduxAddPostForm onSubmit={onSubmitPostHandler}/>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export const AddPostForm = (props: InjectedFormProps<FormDataPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPost' placeholder='new post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ReduxAddPostForm = reduxForm<FormDataPostType>({
    form: 'addNewPost'
})(AddPostForm)

export type FormDataPostType = {
    newPost: string
}

export default MyPosts;