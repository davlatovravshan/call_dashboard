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
import chartRight from "../../assets/img/DDD.svg"
import delet from "../../assets/img/delete.svg"
import Qorqalpoqiston from "../../assets/img/Qorqalpoqiston.svg"
import Andijon from "../../assets/img/Andijon.svg"
import Jizzax from "../../assets/img/Jizzax.svg"
import ToshkentV from "../../assets/img/ToshkentV.svg"
import Xorazm from "../../assets/img/Xorazm.svg"
import Navoiy from "../../assets/img/Navoiy.svg"
import Namangan from "../../assets/img/Namangan.svg"
import Samarqand from "../../assets/img/Samarqand.svg"
import Fargona from "../../assets/img/Fargona.svg"
import ToshkentSh from "../../assets/img/ToshkentSh.svg"
import Sirdaryo from "../../assets/img/Sirdaryo.svg"
import Surhondaryo from "../../assets/img/Surhondaryo.svg"
import Qashqadaryo from "../../assets/img/Qashqadaryo.svg"
import Buxoro from "../../assets/img/Buxoro.svg"
import phone1 from "../../assets/img/1.svg"
import phone2 from "../../assets/img/2.svg"
import phone4 from "../../assets/img/4.svg"
import phone5 from "../../assets/img/5.svg"
import phone6 from "../../assets/img/6.svg"
import phone7 from "../../assets/img/7.svg"
import phone8 from "../../assets/img/8.svg"
import phone9 from "../../assets/img/9.svg"
import phone10 from "../../assets/img/10.svg"
import phone3 from "../../assets/img/3.svg"

const Content = () => {

    const [open, setOpen] = useState(false);

    const openItems = () => {
        setOpen(!open)
    }

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
                            <div className="button" onClick={openItems}>
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
                        <img style={{width: '100%'}} src={chartRight} alt=""/>
                    </div>
                </div>

                <div className="phone__boxes">

                    <div>
                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone1} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>Kutish Qo'ng'iroqlari</p>
                                <span className="red">0</span>
                            </div>
                        </div>

                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone2} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>Ishlov qo’ng’roqlari</p>
                                <span className="blue">00:03:05</span>
                            </div>
                        </div>

                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone3} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>O'rtacha Navbat Vaqti</p>
                                <span className="orange">00:03:05</span>
                            </div>
                        </div>

                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone4} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>Qoldirilgan qo'ng'iroqlar</p>
                                <span className="red">00:03:05</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone5} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>O’rtacha qo’ng’iroq vaqti</p>
                                <span className="red">0</span>
                            </div>
                        </div>

                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone6} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>Qo'ng'iroq davomiyligi</p>
                                <span className="green">00:03:05</span>
                            </div>
                        </div>

                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone7} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>Xizmat darajasi</p>
                                <span className="green">00:03:05</span>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone8} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>Eng uzoq kutish vaqti</p>
                                <span className="red">00:00:21</span>
                            </div>
                        </div>

                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone9} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>Qo’ng’iroqlarga javob berish vaqti</p>
                                <span className="orange">00:03:05</span>
                            </div>
                        </div>

                        <div className="boxes__item">
                            <div className="item__img">
                                <img src={phone10} alt=""/>
                            </div>
                            <div className="item__info">
                                <p>Call Back</p>
                                <span className="red">00:03:05</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <div className={`popur__info ${open ? 'popur__info-active' : ''}`}>
                <div className="close__icon">
                    <img src={delet} alt=""/>
                </div>
                <h1>Viloyatlar kesimida <span>statistic ma'lumotlar</span></h1>
                <div className="region__boxes">

                    <div className="box">
                        <h2>Qoraqalpog’iston respublikasi</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Qorqalpoqiston} alt=""/>
                                <span>800</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Andijon viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Andijon} alt=""/>
                                <span>800</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Jizzax viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Jizzax} alt=""/>
                                <span>800</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Toshkent viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={ToshkentV} alt=""/>
                                <span>502</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Xorazm viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Xorazm} alt=""/>
                                <span>502</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Navoiy viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Navoiy} alt=""/>
                                <span>560</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Namangan viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Namangan} alt=""/>
                                <span>1051</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Samarqand viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Samarqand} alt=""/>
                                <span>1257</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Farg'ona viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Fargona} alt=""/>
                                <span>502</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Toshkent sh</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={ToshkentSh} alt=""/>
                                <span>502</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Sirdayo viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Sirdaryo} alt=""/>
                                <span>254</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Surxondaryo viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Surhondaryo} alt=""/>
                                <span>835</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Qashqadaryo viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Qashqadaryo} alt=""/>
                                <span>1326</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>Buxoro viloyati</h2>
                        <div className="box__body">
                            <div className="region__img">
                                <img src={Buxoro} alt=""/>
                                <span>1326</span>
                            </div>
                            <div className="region__info">
                                <p>javob berilgan <span className="text__blue">670</span></p>
                                <p>navbatda <span className="text__blue">670</span></p>
                                <p>nofaol <span className="text__blue">670</span></p>
                                <p>yo'qotilgan <span className="text__blue">670</span></p>
                                <p>Salomlashishda yo’qotilgan 40 <span className="text__blue">670</span></p>
                                <p>Call back 10 <span className="text__blue">670</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Content;