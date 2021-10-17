import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type authType = {
    id: number
    login: string
    email: string
}

type getResponseType = {
    data: authType
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get<getResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
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
    setAuthUserData: (userID: number, email: string, login: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
