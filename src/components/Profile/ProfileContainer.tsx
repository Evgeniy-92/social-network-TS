import React, {ComponentType} from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getStatus,
    getUserProfile, savePhoto,
    setUserProfile,
    updateStatus
} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ResponseGetProfileType} from "../../api/api";


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userID: string | number | null = this.props.match.params.userID
        if (!userID) {
            userID = this.props.userID
            if (!userID) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile()

        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userID}
                profile={this.props.profile}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}



type PathParamsType = {
    userID: string
}


type mapStateToPropsType = {
    profile: ResponseGetProfileType
    status: string
    userID: number | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ResponseGetProfileType) => void
    getUserProfile: (userID: string | number | null) => void
    getStatus: (userID: string | number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userID: state.auth.userID
})


export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)