import React from "react";
import './css/saidbar.scss'
import menuLogo from '../../assets/img/menu.svg'
import location from '../../assets/img/location.svg'
import phone from '../../assets/img/phone__saidbar.svg'
import clock from '../../assets/img/clock__saidbar.svg'
import people from '../../assets/img/people__saidbar.svg'
import operator from '../../assets/img/operator__saidbar.svg'

const Saidbar = () => {
    return (
        <div className="saidbar__row">
            <div className="saidbar__row-top">
                <div className="saidbar__logo">
                    <span className="line line__large"/>
                    <span className="line line__middle"/>
                    <span className="line line__small"/>
                </div>
                <div className="saidbar__menu">
                    <ul className="saidbar__menu-nav">
                        <li className="saidbar__menu-li">
                            <a className="saidbar__menu-link" href="#!"><img src={location} alt=""/><p>hududlar</p></a>
                        </li>
                        <li className="saidbar__menu-li">
                            <a className="saidbar__menu-link" href="#!"><img src={phone} alt=""/><p>qo'ngirloqlar
                                xizmati</p></a>
                        </li>
                        <li className="saidbar__menu-li">
                            <a className="saidbar__menu-link" href="#!"><img src={people} alt=""/><p>qo'ngirloqlar
                                guruhi</p></a>
                        </li>
                        <li className="saidbar__menu-li">
                            <a className="saidbar__menu-link" href="#!"><img src={operator} alt=""/><p>operatorlar</p>
                            </a>
                        </li>
                        <li className="saidbar__menu-li">
                            <a className="saidbar__menu-link" href="#!"><img src={clock} alt=""/><p>davr oralig'i</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="saidbar__row-bottom">
                <div className="saidbar__date">
                    <div className="saidbar__date-title">
                        <p className="date__title">Sana:</p>
                    </div>
                    <div className="saidbar__date-input">
                        <input className="date__input" type="text"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saidbar;