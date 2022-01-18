import s from './Users.module.css';
import userPhoto from '../../assets/images/images.jpg';
import React from 'react';
import {User} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {Pagination} from "../common/Pagination/Pagination";

type UsersPropsType = {
    users: Array<User>
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
    buttonActivity: Array<number>
}


export function Users(props: UsersPropsType) {

    return (
        <div className={s.usersContainer}>
            <Pagination
                totalItemsCount={props.totalUserCount}
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}
                currentPage={props.currentPage}
            />

            {
                props.users.map(u => <div className={s.wrapper} key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>

                        <div>
                            {
                                u.followed
                                    ? <button
                                        disabled={props.buttonActivity.some(id => id === u.id)}
                                        onClick={() => {
                                            props.unfollowTC(u.id)
                                        }}>
                                        Unfollowed</button>
                                    : <button
                                        disabled={props.buttonActivity.some(id => id === u.id)}
                                        onClick={() => {
                                            props.followTC(u.id)
                                        }}>
                                        Followed</button>
                            }
                        </div>
                    </div>
                    <div className={s.information}>
                        <div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}