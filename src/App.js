import React from "react";
import './assets/css/main.scss'
import Saidbar from './components/Saidbar/Saidbar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

function App() {
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
