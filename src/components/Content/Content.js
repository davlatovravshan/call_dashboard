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
                    </div>
                </div>
            </div>
            <div className="row__right">

            </div>
        </div>
    )
}

export default Content;