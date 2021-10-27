import React, {useContext, useEffect, useState} from "react";
import './assets/css/main.scss';
import Saidbar from './components/Saidbar/Saidbar';
import Header from './components/Header/Header';
import Sos from './components/Content/Sos';
import Criminals from './components/Content/Criminals';
import {GlobalContext} from "./context/globalContext";
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
    const {getFunc} = useContext(GlobalContext);


    useEffect(() => {
        getFunc()
    }, [])

    return (
        <div className="container">
            <div className="container__saidbar">
                <Saidbar/>
            </div>
            <div className="container__coontent">
                <Header/>
                <Switch>
                    <Route path="/criminals" component={Criminals} exact/>

                    <Route path="/sos" component={Sos} exact/>
                    <Redirect to="/sos"/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
