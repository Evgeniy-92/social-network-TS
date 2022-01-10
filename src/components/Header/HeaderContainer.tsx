import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component<PropsType> {

    render () {
        return (
            <Header {...this.props}/>
        )
    }

}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType ={
    logoutTC: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {logoutTC}) (HeaderContainer);
