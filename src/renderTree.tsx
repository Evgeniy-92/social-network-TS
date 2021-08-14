import {StateType} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {addPost, sendMessage, postTextChange, messageTextChange} from './redux/state';

export const renderTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostCallback={addPost} postChange={postTextChange} sendMessageCallback = {sendMessage} messageTextChange={messageTextChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}