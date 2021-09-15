import React from 'react';
import {StoreType} from '../../../redux/redux-store';
import {addPostAC, postTextChangeAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type MyPostsPropsType = {
    store: StoreType
}

function  MyPostsContainer(props: MyPostsPropsType) {

    const profilePage = props.store.getState().profilePage

    const addPostCallback = () => {
        props.store.dispatch(addPostAC())
    }

    const changeHandlerCallback = (newValue: string) => {
        props.store.dispatch(postTextChangeAC(newValue))
    }

    return (
        <MyPosts profilePage={profilePage} addPostCallback={addPostCallback} changeHandlerCallback={changeHandlerCallback}/>
    )
};

export default MyPostsContainer;