import React from "react";
import './css/header.scss';
import {useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    // console.log(location)
    return (
        <div className="header__row">
            <div className="header__top">
                <h1>
                    <span><b>102</b></span> tizimining <span><b>call</b></span>
                    markazi {location.pathname === "/sos" ? '' : '- Respublika bo\'yicha'}
                </h1>
            </div>
        </div>
    )
}

export default Header;