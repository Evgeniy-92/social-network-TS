import React from "react";
import {StoreType} from '../../redux/redux-store';
import Navbar from './Navbar';

type NavbarPropsType = {
    store: StoreType
}

function NavbarContainer(props: NavbarPropsType) {

    const friendsData = props.store.getState().sidebar.friendsData

    return (
        <Navbar friendsData={friendsData}/>
    )
};

export default NavbarContainer;