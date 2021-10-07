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
import {Users} from './Users';

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

export default connect(mapStateToProps, mapDispatchToProps)(Users)