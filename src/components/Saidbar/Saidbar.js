import React, {useContext} from "react";
import './css/saidbar.scss'
// import menuLogo from '../../assets/img/menu.svg'
import loc from '../../assets/img/location.svg'
import phone from '../../assets/img/phone__saidbar.svg'
import clock from '../../assets/img/clock__saidbar.svg'
import people from '../../assets/img/people__saidbar.svg'
import operator from '../../assets/img/operator__saidbar.svg'
import handcuffs from '../../assets/img/handcuffs.svg'
import {Link, useLocation} from "react-router-dom";
import {GlobalContext} from "../../context/globalContext";
import moment from "moment";
import {monthsNum} from "../Content/Sos";

let activeRegion = 0
console.log(activeRegion);

const Saidbar = () => {
    const {getRegionName, region, getFullData, getCallsHistory, getDataByMonth} = useContext(GlobalContext);
    const location = useLocation()
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
                        {
                            location.pathname === "/sos" ? <li className="saidbar__menu-li">
                                <div className="saidbar__menu-link"><img src={loc} alt=""/>
                                    <select onClick={() => getRegionName()}
                                            onChange={(e) => {
                                                getCallsHistory(parseInt(e.target.value))
                                                getFullData(moment(new Date()).format("YYYY-MM-DD"),
                                                    moment(new Date()).format("YYYY-MM-DD"), parseInt(e.target.value))
                                                getDataByMonth(monthsNum)
                                                activeRegion = parseInt(e.target.value)
                                            }}
                                    >
                                        <option disabled>Hududlar</option>
                                        <option value="0">Barchasi</option>
                                        {
                                            region.length && region.map(i =>
                                                <option value={i.id} key={i.id}
                                                        selected={activeRegion === i.id ? 'selected' : ''}>{i.name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </li> : ''
                        }
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