import React from 'react';
import Navbar from './Navbar';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import { connect } from 'react-redux';
import {SidebarInitialStateType} from '../../redux/sidebar-reducer';



type MapStatePropsType = {
    sidebar: SidebarInitialStateType
}

type MapDispatchPropsType = {

}

export type NavbarPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;