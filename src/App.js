import React, {useContext, useEffect, useState} from "react";
import './assets/css/main.scss'
import Saidbar from './components/Saidbar/Saidbar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import {GlobalContext} from "./context/globalContext";
let count = 0
function App() {
    const {fullData, getFullData} = useContext(GlobalContext);

    // console.log(count++);
    // console.log(fullData);
    useEffect(() => {
        if (!fullData.length) getFullData()
    }, [])
    return (
        <div className="container">
            <div className="container__saidbar">
                <Saidbar/>
            </div>
            <div className="container__coontent">
                <Header/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
