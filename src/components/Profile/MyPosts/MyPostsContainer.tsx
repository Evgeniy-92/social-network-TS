import React from 'react';
import {addPostAC, postTextChangeAC, ProfileInitialStateType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    profilePage: ProfileInitialStateType
}

type MapDispatchPropsType = {
    addPostCallback: () => void
    changeHandlerCallback: (newValue: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostCallback: () => {
            dispatch(addPostAC())
        },
        changeHandlerCallback: (newValue: string) => {
            dispatch(postTextChangeAC(newValue))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;