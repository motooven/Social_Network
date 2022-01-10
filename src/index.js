import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import state, {addPost} from "./redux/state";



let rerenderEntireTree = () => {
         ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost={addPost} />
            </BrowserRouter>,
            document.getElementById('root') );
}

rerenderEntireTree()




