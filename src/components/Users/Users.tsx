import s from './Users.module.css';
import userPhoto from '../../assets/images/images.jpg';
import React from 'react';
import {User} from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {followAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<User>
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}



export function Users(props: UsersPropsType) {

    const numberPages = Math.ceil(props.totalUserCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= numberPages; i++) {
        pages.push(i)
    }


    return (
        <div>
            {
                pages.map(p => {
                    return (
                        <span
                            onClick={() => props.onPageChanged(p)}
                            className={p === props.currentPage ? s.activePagesStyle : s.pagesStyle}
                        >
                                {p}
                        </span>
                    )
                })
            }

            {
                props.users.map(u => <div className={s.wrapper} key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>

                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        followAPI.unfollowed(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })

                                    }}>Unfollowed</button>
                                    : <button onClick={() => {
                                        followAPI.followed(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                    }}>Followed</button>
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