import React from "react";
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';



class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '2'
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);