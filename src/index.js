import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 //addPost={store.addPost.bind(store)}
                 //updateNewPostText={store.updateNewPostText.bind(store)}
                 //updateNewPostTextSecondPage={store.updateNewPostTextSecondPage.bind(store)}
                 //addPostSecondPage={store.addPostSecondPage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root') );
}


rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)




