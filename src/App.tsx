import React, { Suspense } from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./Login/LoginFormik";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className={"app-wrapper-content"}>
                        <Route path={"/profile/:userID?"} render={() => {
                            return <Suspense fallback={<div>Загрузка...</div>}>
                                <ProfileContainer/>
                            </Suspense>
                        }}
                        />
                        <Route path={"/dialogs"} render={() => {
                            return <Suspense fallback={<div>Загрузка...</div>}>
                                <DialogsContainer/>
                            </Suspense>
                        }}
                        />
                        <Route path={"/users"} render={() =>
                            <UsersContainer/>}
                        />
                        <Route path={"/login"} render={() =>
                            <LoginContainer/>}
                        />
                    </div>

                </div>
            </BrowserRouter>
        );

    }
}
type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType
export default compose(
    connect(mapStateToProps, {initializeApp})) (App);

