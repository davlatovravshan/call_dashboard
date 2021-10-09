import React, {useState} from "react";
import './css/content.scss'

import jami from "../../assets/img/jami.svg"
import javob from "../../assets/img/javob.svg"
import navbatda from "../../assets/img/navbatda.svg"
import calendar from "../../assets/img/calendar.svg"
import boshqalar from "../../assets/img/boshqalar.svg"
import wekkChart from "../../assets/img/week.svg"
import upGreen from "../../assets/img/up__green.svg"
import blueCricle from "../../assets/img/blur__cricle.svg"
import redCricle from "../../assets/img/red__cricle.svg"
import map from "../../assets/img/map__small.svg"
import arrowDown from "../../assets/img/arrow__down.svg"

const Content = () => {


    return (
        <div className="content__wrapper">
            <div className="row__left">
                <div className="circle__box">
                    <div className="circle__item">
                        <div className="items">
                            <div className="items__info">
                                <p className="number__info">8525</p>
                                <p className="number__text">Jami</p>
                            </div>
                            <img className="img__top" src={jami} alt=""/>
                        </div>
                        <div className="items">
                            <div className="items__info">
                                <p className="number__info">4480</p>
                                <p className="number__text">Javob</p>
                            </div>
                            <img className="img__top" src={javob} alt=""/>
                        </div>
                        <div className="items">
                            <div className="items__info">
                                <p className="number__info">8525</p>
                                <p className="number__text">Navbatda</p>
                            </div>
                            <img className="img__top" src={navbatda} alt=""/>
                        </div>
                        <div className="items">
                            <div className="items__info">
                                <p className="number__info">22/07/2021</p>
                                <p className="number__info">22/07/2021</p>
                            </div>
                            <img className="img__top" src={calendar} alt=""/>
                        </div>
                        <div className="items">
                            <div className="items__info">
                                <p className="number__info">8525</p>
                                <p className="number__text">Boshqalar</p>
                            </div>
                            <img className="img__top" src={boshqalar} alt=""/>
                        </div>
                    </div>
                    <div className="circle__box-line">
                        <div className="line">
                            <div className="title">
                                <p>Nafaol</p>
                            </div>
                            <div className="line__body">
                                <div className="progress">
                                    <div className="bar" style={{width: '75%'}}>
                                    </div>
                                </div>
                                <div>
                                    <p className="text__right">1650</p>
                                </div>
                            </div>

                        </div>
                        <div className="line">
                            <div className="title">
                                <p>Yo'qotilgan</p>
                            </div>
                            <div className="line__body">
                                <div className="progress">
                                    <div className="bar" style={{width: '75%'}}>
                                    </div>
                                </div>
                                <div>
                                    <p className="text__right">165</p>
                                </div>
                            </div>

                        </div>
                        <div className="line">
                            <div className="title">
                                <p>Salomlashishda</p>
                            </div>
                            <div className="line__body">
                                <div className="progress">
                                    <div className="bar" style={{width: '75%'}}>
                                    </div>
                                </div>
                                <div>
                                    <p className="text__right">1144</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="week__statist">
                    <div className="week__header">
                        <div className="left__info">
                            <p>Xaftalik statistika</p>
                            <p className="blue__text">5901 <img src={upGreen} alt=""/></p>
                        </div>
                        <div className="right__info">
                            <p>Iyul</p>
                            <button type="submit">oylik</button>
                            <button type="submit">xaftalik</button>
                            <button type="submit">kunlik</button>
                        </div>
                    </div>
                    <div className="week__chart">
                        <img style={{width: '100%'}} src={wekkChart} alt=""/>
                    </div>
                </div>
                <div className="progress__box">
                    <h1>Operatorlarning joriy holati haqida ma'lumot</h1>
                    <div className="progress">
                        <div>
                            <div className="progress__title">
                                <p>Ro’yxatdan o’tgan operatorlar soni</p>
                            </div>
                            <div className="progress">
                                <div className="bar" style={{width: '85%'}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle__end">
                            <span>65</span>
                        </div>
                    </div>
                    <div className="progress">
                        <div>
                            <div className="progress__title">
                                <p>Suhbatlashayotgan operatorlar soni </p>
                            </div>
                            <div className="progress">
                                <div className="bar" style={{width: '35%'}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle__end">
                            <span>17</span>
                        </div>
                    </div>
                    <div className="progress">
                        <div>
                            <div className="progress__title">
                                <p>Band tayyor operatorlar soni </p>
                            </div>
                            <div className="progress">
                                <div className="bar" style={{width: '25%'}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle__end">
                            <span>13</span>
                        </div>
                    </div>
                    <div className="progress">
                        <div>
                            <div className="progress__title">
                                <p>Suhbat uchun tayyor operatorlar soni </p>
                            </div>
                            <div className="progress">
                                <div className="bar" style={{width: '55%'}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle__end">
                            <span>33</span>
                        </div>
                    </div>
                    <div className="progress">
                        <div>
                            <div className="progress__title">
                                <p>Bloklangan holatdagi operatorlar soni</p>
                            </div>
                            <div className="progress">
                                <div className="bar" style={{width: '55%'}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle__end">
                            <span>33</span>
                        </div>
                    </div>
                    <div className="progress">
                        <div>
                            <div className="progress__title">
                                <p>Xizmatdan keyingi holatdagi operatorlar soni</p>
                            </div>
                            <div className="progress">
                                <div className="bar" style={{width: '5%'}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle__end">
                            <span>0</span>
                        </div>
                    </div>
                    <div className="progress">
                        <div>
                            <div className="progress__title">
                                <p>Dam olayotgan operatorlar soni</p>
                            </div>
                            <div className="progress">
                                <div className="bar" style={{width: '5%'}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle__end">
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row__right">

                <div className="map__row">
                    <div className="map__info">
                        <div className="map__img">
                            <img src={map} alt=""/>
                        </div>
                        <div className="map__button">
                            <h3>respublika bo’yicha</h3>
                            <span>8525</span>
                            <div className="button">
                                <img src={arrowDown} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="week__statist">
                    <div className="week__header">
                        <div className="left__info">
                            <p>Yillik hisobot</p>
                            <p className="blue__text">217221 <img src={upGreen} alt=""/></p>
                        </div>
                        <div className="right__info">
                            <p>Jami qo’ng’iroqlar <img src={redCricle} alt=""/></p>
                            <p>Javob berilgan qo’ng’iroqlar <img src={blueCricle} alt=""/></p>
                        </div>
                    </div>
                    <div className="week__chart">
                        <img style={{width: '100%'}} src={wekkChart} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;