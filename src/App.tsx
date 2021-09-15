import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavbarContainer store={props.store}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render= {() =>
                        <Profile
                            store={props.store}
                        />}
                    />
                    <Route path={"/dialogs"} render={() =>
                        <DialogsContainer
                            store={props.store}
                        />}
                    />
                </div>

            </div>
        </BrowserRouter>
    );

}

export default App;
