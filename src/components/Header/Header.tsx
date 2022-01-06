import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img src='https://demiart.ru/forum/uploads20/post-2976419-1518341512-5a800d882fcc2.png'/>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>props.login - <button onClick={props.logoutTC}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;