import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/images.jpg'

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div className={s.wrapper} key={u.id}>
                        <div>
                            <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollowed</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
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
}