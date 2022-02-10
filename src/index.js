import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

setInterval( () => {
    store.dispatch({type: "FACE"})}, 1000)


ReactDOM.render(
        <BrowserRouter>
                <Provider store={store}  >
                    <App
                         //state={state}
                         //dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
        </BrowserRouter>,document.getElementById('root') )
