import React, {ComponentType} from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '2'
        }
        this.props.getUserProfile(userID)
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
    profile: ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userID: string) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
})


export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)