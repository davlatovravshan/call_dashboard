import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalContextProvider from "./context/globalContext";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <GlobalContextProvider>
            <App/>
        </GlobalContextProvider>
    </Router>,
    document.getElementById('root')
);
