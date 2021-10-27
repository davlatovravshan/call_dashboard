import React, {useContext, useEffect, useState} from "react";
import './css/sos.scss'

import jami from "../../assets/img/jami.svg"
import javob from "../../assets/img/javob.svg"
import navbatda from "../../assets/img/navbatda.svg"
import calendar from "../../assets/img/calendar.svg"
import boshqalar from "../../assets/img/boshqalar.svg"
import wekkChart from "../../assets/img/week.svg"
import upGreen from "../../assets/img/up__green.svg"
import blueCricle from "../../assets/img/blur__cricle.svg"
import redCricle from "../../assets/img/red__cricle.svg"
// import map from "../../assets/img/map__small.svg"
// import arrowDown from "../../assets/img/arrow__down.svg"
import chartRight from "../../assets/img/DDD.svg"
// import delet from "../../assets/img/delete.svg"
// import Qorqalpoqiston from "../../assets/img/Qorqalpoqiston.svg"
// import Andijon from "../../assets/img/Andijon.svg"
// import Jizzax from "../../assets/img/Jizzax.svg"
// import ToshkentV from "../../assets/img/ToshkentV.svg"
// import Xorazm from "../../assets/img/Xorazm.svg"
// import Navoiy from "../../assets/img/Navoiy.svg"
// import Namangan from "../../assets/img/Namangan.svg"
// import Samarqand from "../../assets/img/Samarqand.svg"
// import Fargona from "../../assets/img/Fargona.svg"
// import ToshkentSh from "../../assets/img/ToshkentSh.svg"
// import Sirdaryo from "../../assets/img/Sirdaryo.svg"
// import Surhondaryo from "../../assets/img/Surhondaryo.svg"
// import Qashqadaryo from "../../assets/img/Qashqadaryo.svg"
// import Buxoro from "../../assets/img/Buxoro.svg"
// import phone1 from "../../assets/img/1.svg"
// import phone2 from "../../assets/img/2.svg"
// import phone4 from "../../assets/img/4.svg"
// import phone5 from "../../assets/img/5.svg"
// import phone6 from "../../assets/img/6.svg"
// import phone7 from "../../assets/img/7.svg"
// import phone8 from "../../assets/img/8.svg"
// import phone9 from "../../assets/img/9.svg"
// import phone10 from "../../assets/img/10.svg"
// import phone3 from "../../assets/img/3.svg"
import ActiveRegionCard from "../regionCards/ActiveRegionCard";
import {GlobalContext} from "../../context/globalContext";
import OperatorInfoCount from "../operator/OperatorInfoCount";
import LineChart from "../charts/LineChart";
import TotalChart from "../charts/TotalChart";
import AnsweredChart from "../charts/AnsweredChart";
import InTurnChart from "../charts/InTurnChart";
import moment from "moment";
import OthersChart from "../charts/OthersChart";
import OperatorInfoWatch from "../operator/OperatorInfoWatch";
import FullRegion from "../regionCards/FullRegion";
import WeekChart from "../charts/WeekChart";
import SimpleLineChart from "../charts/SimpleLineChart";

const month = [
    {value: 1, name: "Yanvar"},
    {value: 2, name: "Fevral"},
    {value: 3, name: "Mart"},
    {value: 4, name: "Aprel"},
    {value: 5, name: "May"},
    {value: 6, name: "Iyun"},
    {value: 7, name: "Iyul"},
    {value: 8, name: "Avgust"},
    {value: 9, name: "Sentabr"},
    {value: 10, name: "Oktabr"},
    {value: 11, name: "Noyabr"},
    {value: 12, name: "Dekabr"},
]

export const monthsNum = new Date().getMonth()

const Sos = () => {
    const {fullData, getDataByMonth} = useContext(GlobalContext);
    const [others, setOthers] = useState(0);


    useEffect(() => {
        let count = fullData[0]?.stat?.missedCalls + fullData[0]?.stat?.shortCalls + fullData[0]?.stat?.missedOnGreetingCalls
        setOthers(count)
    }, [fullData])

    return (
        <div className="content__wrapper">
            <div className="row__left">
                {/*-------------------------------------------------------------------*/}
                <div className="circle__box">
                    <div className="circle__item">
                        <div className="items">
                            <TotalChart/>
                            <div className="items__info">
                                <p className="number__info">{fullData?.[0]?.stat?.distributedCalls}</p>
                                <p className="number__text">Jami</p>
                            </div>
                            <img className="img__top" src={jami} alt=""/>
                        </div>

                        <div className="items">
                            <AnsweredChart totalCals={fullData[0]?.stat?.distributedCalls}
                                           answeredCals={fullData[0]?.stat?.acceptedCalls}/>
                            <div className="items__info">
                                <p className="number__info">{fullData[0]?.stat?.acceptedCalls}</p>
                                <p className="number__text">Javob</p>
                            </div>
                            <img className="img__top" src={javob} alt=""/>
                        </div>
                        <div className="items">
                            <InTurnChart/>
                            <div className="items__info">
                                <p className="number__info">{fullData[0]?.stat?.currentQueueWaitingCalls}</p>
                                <p className="number__text">Navbatda</p>
                            </div>
                            <img className="img__top" src={navbatda} alt=""/>
                        </div>
                        <div className="items">
                            <TotalChart/>
                            <div className="items__info">
                                <p className="number__info">{moment(new Date()).format("DD/MM/YYYY")}</p>
                                <p className="number__info">{moment(new Date()).format("DD/MM/YYYY")}</p>
                            </div>
                            <img className="img__top" src={calendar} alt=""/>
                        </div>
                        <div className="items">
                            <OthersChart totalCalls={fullData[0]?.stat?.distributedCalls}
                                         othersCalls={others}/>
                            <div className="items__info">
                                <p className="number__info">{others || 0}</p>
                                <p className="number__text">Boshqalar</p>
                            </div>
                            <img className="img__top" src={boshqalar} alt=""/>
                        </div>
                    </div>
                    <div className="circle__box-line">
                        <div className="line">
                            <div className="title">
                                <p>Nofaol</p>
                            </div>
                            <div className="line__body">
                                {/*<div className="progress">*/}
                                {/*    <div className="bar" style={{width: '75%'}}>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <LineChart
                                    total={Math.round(fullData[0]?.stat?.shortCalls * 100 / fullData[0]?.stat?.distributedCalls)}
                                    size={"120px"}
                                    strokeWidth={"4"}/>
                                <div>
                                    <p className="text__right">{fullData[0]?.stat?.shortCalls}</p>
                                </div>
                            </div>

                        </div>
                        <div className="line">
                            <div className="title">
                                <p>Yo'qotilgan</p>
                            </div>
                            <div className="line__body">
                                {/*<div className="progress">*/}
                                {/*    <div className="bar" style={{width: '75%'}}>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <LineChart
                                    total={Math.round(fullData[0]?.stat?.missedCalls * 100 / fullData[0]?.stat?.distributedCalls)}
                                    size={"120px"}
                                    strokeWidth={"4"}/>
                                <div>
                                    <p className="text__right">{fullData[0]?.stat?.missedCalls}</p>
                                </div>
                            </div>

                        </div>
                        <div className="line">
                            <div className="title">
                                <p>Salomlashishda</p>
                            </div>
                            <div className="line__body">
                                {/*<div className="progress">*/}
                                {/*    <div className="bar" style={{width: '75%'}}>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <LineChart total={fullData[0]?.stat?.missedOnGreetingCalls / 10}
                                           size={"120px"}
                                           strokeWidth={"4"}/>
                                <div>
                                    <p className="text__right">{fullData[0]?.stat?.missedOnGreetingCalls}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*-------------------------------------------------------------------*/}
                <div className="week__statist">
                    <div className="week__header">
                        <div className="left__info">
                            <p>Oylik statistika</p>
                            {/*<p className="blue__text">5901 <img src={upGreen} alt=""/></p>*/}
                        </div>
                        <div className="right__info">
                            <select onChange={(e) => getDataByMonth(Number(e.target.value))}>
                                {month.map(i =>
                                    i.value <= monthsNum ?
                                        <option value={i.value} key={i.value}
                                                selected={`${i.value === monthsNum ? 'selected' : ''}`}>{i.name}</option> : ''
                                )}
                                {/*<option value="1">Yanvar</option>*/}
                                {/*<option value="2">Fevral</option>*/}
                                {/*<option value="3">Mart</option>*/}
                                {/*<option value="4">Aprel</option>*/}
                                {/*<option value="5">May</option>*/}
                                {/*<option value="6">Iyun</option>*/}
                                {/*<option value="7">Iyul</option>*/}
                                {/*<option value="8">Avgust</option>*/}
                                {/*<option value="9" selected="selected">Sentabr</option>*/}
                                {/*<option value="10">Oktabr</option>*/}
                                {/*<option value="11">Noyabr</option>*/}
                                {/*<option value="12">Dekabr</option>*/}
                            </select>
                            {/*<p>Iyul</p>*/}
                            {/*<button type="submit">oylik</button>*/}
                            {/*<button type="submit">xaftalik</button>*/}
                            {/*<button type="submit">kunlik</button>*/}
                        </div>
                    </div>
                    <div className="week__chart">
                        <WeekChart/>
                        {/*<img style={{width: '100%'}} src={wekkChart} alt=""/>*/}
                    </div>
                </div>
                <OperatorInfoCount/>
            </div>

            <div className="row__right">
                <ActiveRegionCard/>
                <div className="week__statist">
                    <div className="week__header">
                        <div className="left__info">
                            <p>Yillik hisobot</p>
                            {/*<p className="blue__text">217221 <img src={upGreen} alt=""/></p>*/}
                        </div>
                        <div className="right__info">
                            <p>Jami qo’ng’iroqlar <img src={redCricle} alt=""/></p>
                            <p>Javob berilgan qo’ng’iroqlar <img src={blueCricle} alt=""/></p>
                        </div>
                    </div>
                    <div className="week__chart">
                        <SimpleLineChart/>
                        {/*<img style={{width: '100%'}} src={chartRight} alt=""/>*/}
                    </div>
                </div>
                <OperatorInfoWatch/>
            </div>
            <FullRegion/>
        </div>
    )
}

export default Sos;