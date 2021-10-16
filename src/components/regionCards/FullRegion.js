import React, {useContext} from 'react';
import delet from "../../assets/img/delete.svg";
import Qorqalpoqiston from "../../assets/img/Qorqalpoqiston.svg";
// import Andijon from "../../assets/img/Andijon.svg";
// import Jizzax from "../../assets/img/Jizzax.svg";
// import ToshkentV from "../../assets/img/ToshkentV.svg";
// import Xorazm from "../../assets/img/Xorazm.svg";
// import Navoiy from "../../assets/img/Navoiy.svg";
// import Namangan from "../../assets/img/Namangan.svg";
// import Samarqand from "../../assets/img/Samarqand.svg";
// import Fargona from "../../assets/img/Fargona.svg";
// import ToshkentSh from "../../assets/img/ToshkentSh.svg";
// import Sirdaryo from "../../assets/img/Sirdaryo.svg";
// import Surhondaryo from "../../assets/img/Surhondaryo.svg";
// import Qashqadaryo from "../../assets/img/Qashqadaryo.svg";
// import Buxoro from "../../assets/img/Buxoro.svg";
import {GlobalContext} from "../../context/globalContext";

const FullRegion = () => {
    const {openItems, open, fullData} = useContext(GlobalContext);

    return (
        <>
            <div className={`popur__info ${open ? 'popur__info-active' : ''}`}>
                <div className="close__icon" onClick={() => openItems()}>
                    <img src={delet} alt=""/>
                </div>
                <h1>Viloyatlar kesimida <span>statistic ma'lumotlar</span></h1>
                <div className="region__boxes">

                    {
                        fullData.length && fullData.filter(item => item.id !== 0).map((item, index) =>
                            <div className="box" key={index}>
                                <h2>{item.name}</h2>
                                <div className="box__body">
                                    <div className="region__img">
                                        <img src={item.im_g} alt=""/>
                                        <span>{item.stat.distributedCalls}</span>
                                    </div>
                                    <div className="region__info">
                                        <p>javob berilgan <span className="text__blue">{item.stat.acceptedCalls}</span></p>
                                        <p>navbatda <span className="text__blue">{item.stat.currentQueueWaitingCalls}</span></p>
                                        <p>nofaol <span className="text__blue">{item.stat.shortCalls}</span></p>
                                        <p>yo'qotilgan <span className="text__blue">{item.stat.missedCalls}</span></p>
                                        <p>Salomlashishda yo’qotilgan <span className="text__blue">{item.stat.missedOnGreetingCalls}</span></p>
                                        {/*<p>Call back 10 <span className="text__blue">670</span></p>*/}
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {/* <div className="box">
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
                    </div>*/}

                </div>
            </div>
        </>
    );
};

export default FullRegion;