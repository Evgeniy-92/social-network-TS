import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";
import Friends from "./Friends/Friends";
import {NavbarPropsType} from './NavbarContainer';



function Navbar(props: NavbarPropsType) {

    const friendElement = props.sidebar.friends.map(f => <Friends name={f.name} avatar={f.avatar}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>

            <div className={s.friendsBlock}>
                <h2>Friends</h2>
                <div className={s.friendsElements}>
                    {friendElement}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;