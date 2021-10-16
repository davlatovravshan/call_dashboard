import React from "react";
import './css/saidbar.scss'
// import menuLogo from '../../assets/img/menu.svg'
import location from '../../assets/img/location.svg'
import phone from '../../assets/img/phone__saidbar.svg'
import clock from '../../assets/img/clock__saidbar.svg'
import people from '../../assets/img/people__saidbar.svg'
import operator from '../../assets/img/operator__saidbar.svg'
import handcuffs from '../../assets/img/handcuffs.svg'
import {Link} from "react-router-dom";

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
                            <Link className="saidbar__menu-link" to={'/'}><img src={location} alt=""/><p>hududlar</p>
                            </Link>
                            {/*<select>*/}
                            {/*    <option value="">11111</option>*/}
                            {/*    <option value="">11111</option>*/}
                            {/*    <option value="">11111</option>*/}
                            {/*    <option value="">11111</option>*/}
                            {/*    <option value="">11111</option>*/}
                            {/*    <option value="">11111</option>*/}
                            {/*</select>*/}
                        </li>
                        <li className="saidbar__menu-li">
                            <Link className="saidbar__menu-link" to={'/sos'}><img src={phone} alt=""/><p>qo'ngirloqlar
                                xizmati</p></Link>
                        </li>
                        <li className="saidbar__menu-li">
                            <Link className="saidbar__menu-link" to={'/'}><img src={people} alt=""/><p>qo'ngirloqlar
                                guruhi</p></Link>
                        </li>
                        <li className="saidbar__menu-li">
                            <Link className="saidbar__menu-link" to={'/'}><img src={operator} alt=""/><p>operatorlar</p>
                            </Link>
                        </li>
                        <li className="saidbar__menu-li">
                            <Link className="saidbar__menu-link" to={'/'}><img src={clock} alt=""/><p>davr oralig'i</p>
                            </Link>
                        </li>
                        <li className="saidbar__menu-li">
                            <Link className="saidbar__menu-link" to={'/criminals'}><img src={handcuffs} alt=""/>
                                <p>jinoyatlar</p>
                            </Link>
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