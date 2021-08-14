import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
    addPostCallback: () => void
    postChange: (value: string) => void
    sendMessageCallback: () => void
    messageTextChange: (value: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar friendsData={props.state.sidebar.friendsData}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render= {() => <Profile profilePage={props.state.profilePage} addPostCallback={props.addPostCallback} postChange={props.postChange}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsPage={props.state.dialogsPage} sendMessageCallback = {props.sendMessageCallback} messageTextChange={props.messageTextChange}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );

}

export default App;
