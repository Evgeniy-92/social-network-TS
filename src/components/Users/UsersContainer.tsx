import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    changeCurrentPage, changeIsFetching,
    follow,
    setTotalUserCount,
    setUsers,
    unfollow,
    User
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {withCredentials: true})
            .then(response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeIsFetching(true)
        this.props.changeCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {withCredentials: true})
            .then(response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
            })
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
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
}

type mapDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<User>) => void
    changeCurrentPage: (numberPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    changeIsFetching: (value: boolean) => void
}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setTotalUserCount,
    changeIsFetching,
})(UsersContainer)