import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./Login/LoginFormik";


function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userID?"} render= {() =>
                        <ProfileContainer/>}
                    />
                    <Route path={"/dialogs"} render={() =>
                        <DialogsContainer/>}
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

export default App;
