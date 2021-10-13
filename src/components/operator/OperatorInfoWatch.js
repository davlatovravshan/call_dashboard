import React, {useEffect, useState} from 'react';
// import callOne from "../../assets/img/call1.svg";
// import callTwo from "../../assets/img/call2.svg";
// import callThree from "../../assets/img/call3.svg";
// import callFour from "../../assets/img/call4.svg";
// import callSex from "../../assets/img/naushnik.svg";
// import callFive from "../../assets/img/call5.svg";
import moment from "moment";
import phone1 from "../../assets/img/1.svg";
import phone2 from "../../assets/img/2.svg";
import phone3 from "../../assets/img/3.svg";
import phone4 from "../../assets/img/4.svg";
import phone5 from "../../assets/img/5.svg";
import phone6 from "../../assets/img/6.svg";
import phone7 from "../../assets/img/7.svg";
import phone8 from "../../assets/img/8.svg";
import phone9 from "../../assets/img/9.svg";
import phone10 from "../../assets/img/10.svg";

const det = {
    "result": "success",
    "stat": {
        "acceptedCalls": 42850,
        "acceptedDuration": 625049,
        "acceptedSLCalls": 38344,
        "currentQueueWaitingCalls": 6,
        "distributedCalls": 81570,
        "holdDuration": 31915,
        "maxQueueWaitingDuration": 16683,
        "missedCalls": 12010,
        "missedOnGreetingCalls": 12692,
        "queueWaitingAcceptedDuration": 293141,
        "queueWaitingCalls": 33371,
        "queueWaitingDuration": 1547387,
        "queueWaitingExceededCalls": 17549,
        "queueWaitingMissedCalls": 9798,
        "queueWaitingMissedDuration": 273013,
        "shortCalls": 14008,
        "talkDuration": 3173675,
        "transferCalls": 762,
        "wrapUpDuration": 0
    },
    "agentStates": [
        {
            "agentState": "BUSY",
            "callState": "CONNECTING",
            "count": 3
        },
        {
            "agentState": "BUSY",
            "callState": "IN_SERVICE",
            "count": 11
        },
        {
            "agentState": "BUSY_LOCKED",
            "callState": "CONNECTING",
            "count": 1
        },
        {
            "agentState": "LAZY",
            "callState": "NULL",
            "count": 3
        },
        {
            "agentState": "LOCKED",
            "callState": "UNKNOWN",
            "count": 23
        },
        {
            "agentState": "NULL",
            "callState": "NULL",
            "count": 174
        },
        {
            "agentState": "NULL",
            "callState": "UNKNOWN",
            "count": 2
        },
        {
            "agentState": "READY",
            "callState": "UNKNOWN",
            "count": 18
        }
    ]
}

// 1) qo'ng'iroqning umumiy davomiyligi
// 2) Navbatda kutishning umumiy vaqti
// 3) sl QO'NG'IROQLAR DARAJASI
// 4) O'RTACHA KUTISH VAQTI
// 5) Qo'ng'iroqlar xizmatining o'rtacha vaqti
// 6)
//
//


const OperatorInfoWatch = ({fullData, fullAgentData}) => {

    const [maxQueueWaitingDuration, setMaxQueueWaitingDuration] = useState(''); // <= ENG UZOQ KUTISH VAQTI


    useEffect(() => {
        setMaxQueueWaitingDuration(fullData?.stat?.maxQueueWaitingDuration && new Date(fullData?.stat?.maxQueueWaitingDuration * 1000).toISOString().substring(11, 19))
        // console.log(fullData?.stat?.acceptedSLCalls / (fullData?.stat?.distributedCalls - (fullData?.stat?.missedOnGreetingCalls + fullData?.stat?.shortCalls)).toString().substring(0, 4))
    }, [fullData, fullAgentData])

    function secondsToHms(d) {
        d = Number(d);
        let h = Math.floor(d / 3600);
        let m = Math.floor(d % 3600 / 60);
        let s = Math.floor(d % 3600 % 60);

        // let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        // let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        // let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        // return hDisplay + mDisplay + sDisplay;
        return h + ':' + m + ':' + s
    }


    return (
        <div>
            {/*<div className="progress-box">
                <div className="progress-box-header">
                    <div className="progress-box-item header-left">
                        <div className="img">
                            <img src={callOne} alt=""/>
                        </div>
                        <div className="text">
                            <div>
                                <span>kutish qo'ng'iroqlari</span>
                                <span>{fullData?.stat?.currentQueueWaitingCalls}</span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-box-item header-right">
                        <div className="img">
                            <img src={callTwo} alt=""/>
                        </div>
                        <div className="text">
                            <div>
                                <span>eng uzoq kutish vaqti</span>
                                <span>{maxQueueWaitingDuration}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="progress-box-body">
                    <div className="body-item one">
                        <div className="boxes-item-header">
                            <span>QO'NG'IROQLARNING UMUMIY DAVOMIYLIGI</span>
                        </div>
                        <div className="boxes-item-body">
                            <span>{fullData?.stat?.talkDuration && secondsToHms(fullData?.stat?.talkDuration)}</span>
                        </div>
                    </div>
                    <div className="body-item two">
                        <div className="boxes-item-header">
                            <span>NAVBATDA KUTISHNING UMUMIY VAQTI</span>
                        </div>
                        <div className="boxes-item-body">
                            <span>{fullData?.stat?.queueWaitingDuration && secondsToHms(fullData?.stat?.queueWaitingDuration)}</span>
                        </div>
                    </div>
                    <div className="body-item three">
                        <div className="boxes-item-header">
                            <span>SL QO'NG'IROQLAR DARAJASI</span>
                        </div>
                        <div className="boxes-item-body">
                            <span>{fullData?.stat ? (fullData?.stat?.acceptedSLCalls / (fullData?.stat?.distributedCalls - (fullData?.stat?.missedOnGreetingCalls + fullData?.stat?.shortCalls)) && '%') : '0'}</span>
                        </div>
                    </div>
                    <div className="body-item four">
                        <div className="boxes-item-header">
                            <span>O'RTACHA KUTISH VAQTI</span>
                        </div>
                        <div className="boxes-item-body">
                            <span>{fullData?.stat && secondsToHms(fullData?.stat?.queueWaitingDuration / fullData?.stat?.queueWaitingCalls)}</span>
                        </div>
                    </div>
                </div>

                <div className="progress-box-body progress-box-body-two">
                    <div className="body-item one">
                        <div className="boxes-item-header">
                            <span>QO'NG'IROQLAR XIZMATINING O'RTACHA VAQTI</span>
                        </div>
                        <div className="boxes-item-body">
                            <img width={25} src={callThree} alt=""
                                 style={{marginBottom: "5px"}}/>
                            <span>{fullData?.stat && secondsToHms((fullData?.stat?.talkDuration + fullData?.stat?.holdDuration + fullData?.stat?.wrapUpDuration) / fullData?.stat?.acceptedCalls)}</span>
                        </div>
                    </div>
                    <div className="body-item two">
                        <div className="boxes-item-header">
                            <span>XIZMAT DARAJASI</span>
                        </div>
                        <div className="boxes-item-body">
                            <img width={25} src={callFour} alt=""
                                 style={{marginBottom: "5px"}}/>
                            <span>100%</span>
                        </div>
                    </div>
                    <div className="body-item three">
                        <div className="boxes-item-header">
                            <span>QAYTA YO'NALTIRISHLAR SONI</span>
                        </div>
                        <div className="boxes-item-body">
                            <img width={25} src={callSex} alt="" style={{marginBottom: "5px"}}/>
                            <span>{fullData?.stat && fullData?.stat?.transferCalls}</span>
                        </div>
                    </div>
                    <div className="body-item four">
                        <div className="boxes-item-header">
                            <span>QOLDIRILGAN QO'NG'IROQLAR</span>
                        </div>
                        <div className="boxes-item-body">
                            <img width={25} src={callFive} alt=""
                                 style={{marginBottom: "5px"}}/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>*/}
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
    );
};

export default OperatorInfoWatch;