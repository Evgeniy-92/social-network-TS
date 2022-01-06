import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logoutTC} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

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
    getAuthUserData: () => void
    logoutTC: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData, logoutTC}) (HeaderContainer);
