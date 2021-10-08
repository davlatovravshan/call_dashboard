import React, {useState} from "react";
import './css/content.scss'

import jami from "../../assets/img/jami.svg"

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
                            <img className="img__top" src={jami} alt=""/>
                        </div>
                        <div className="items">
                            <div className="items__info">
                                <p className="number__info">8525</p>
                                <p className="number__text">Navbatda</p>
                            </div>
                            <img className="img__top" src={jami} alt=""/>
                        </div>
                        <div className="items">
                            <div className="items__info">
                                <p className="number__info">22/07/2021</p>
                                <p className="number__info">22/07/2021</p>
                            </div>
                            <img className="img__top" src={jami} alt=""/>
                        </div>
                        <div className="items">
                            <div className="items__info">
                                <p className="number__info">8525</p>
                                <p className="number__text">Boshqalar</p>
                            </div>
                            <img className="img__top" src={jami} alt=""/>
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
                </div>
            </div>
            <div className="row__right">

            </div>
        </div>
    )
}

export default Content;