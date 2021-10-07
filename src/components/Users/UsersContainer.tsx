import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {
    changeCurrentPageAC,
    followAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    User
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        )
    }
}

type MapStatePropsType = {
    users: Array<User>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

type mapDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<User>) => void
    changeCurrentPage: (numberPage: number) => void
    setTotalUserCount: (totalCount: number) => void
}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: Array<User>) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (numberPage: number) => {
            dispatch(changeCurrentPageAC(numberPage))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)