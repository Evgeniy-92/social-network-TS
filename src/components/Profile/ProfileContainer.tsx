import React, {ComponentType} from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getStatus,
    getUserProfile,
    setUserProfile,
    updateStatus
} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ResponseGetProfileType} from "../../api/api";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '19620'
        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



type PathParamsType = {
    userID: string
}


type mapStateToPropsType = {
    profile: ResponseGetProfileType
    status: string
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ResponseGetProfileType) => void
    getUserProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (status: string) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})


export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)