import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    buttonActivityToggle,
    changeCurrentPage,
    followTC, getUsersTC,
    unfollowTC,
    User
} from '../../redux/users-reducer';
import React, {ComponentType} from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(this.props.pageSize, pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUserCount={this.props.totalUserCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followTC={this.props.followTC}
                    unfollowTC={this.props.unfollowTC}
                    buttonActivity={this.props.buttonActivity}
                />
            </>
        )
    }
}

type MapStatePropsType = {
    users: Array<User>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    buttonActivity: Array<number>
}

type mapDispatchPropsType = {
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
    changeCurrentPage: (numberPage: number) => void
    buttonActivityToggle: (value: boolean, userID: number) => void
    getUsersTC: (pageSize: number, currentPage: number) => void
}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        buttonActivity: state.usersPage.buttonActivity,
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {
        followTC, unfollowTC, changeCurrentPage,
        buttonActivityToggle, getUsersTC,
    }),
    withAuthRedirect
)(UsersContainer)