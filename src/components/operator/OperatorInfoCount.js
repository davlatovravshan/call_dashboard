import React, {useContext, useEffect, useState} from 'react';
import LineChart from "../charts/LineChart";
import {GlobalContext} from "../../context/globalContext";

const OperatorInfoCount = () => {
    const {fullData} = useContext(GlobalContext);
    // // console.log(fullData);

    const [totalCount, setTotalCount] = useState(0);
    const [totalTalkCount, setTotalTalkCount] = useState(0);
    const [totalBusyCount, setTotalBusyCount] = useState(0);
    const [totalReadyCount, setTotalReadyCount] = useState(0);
    const [totalBlockCount, setTotalBlockCount] = useState(0);
    const [totalBlockLockedCount, setTotalBlockLockedCount] = useState(0);
    const [totalRelaxCount, setTotalRelaxCount] = useState(0);
    const SIZE_CHART = "715px";
    const STROKE_WIDTH = "0.7";


    useEffect(() => {
        setTotalCount(0);
        setTotalTalkCount(0);
        setTotalBusyCount(0);
        setTotalReadyCount(0);
        setTotalBlockCount(0);
        setTotalRelaxCount(0);
        setTotalBlockLockedCount(0);

        fullData && fullData[0]?.agentStates?.forEach((item) => {
            if (item.agentState === "READY" || item.agentState === "BUSY" ||
                item.agentState === "BUSY_LOCKED" || item.agentState === "LOCKED" ||
                item.agentState === "LAZY" || item.agentState === "RELAX") {
                setTotalCount(prevState => prevState + item.count)
                // console.log(1)
            }
        })
        fullData && fullData[0]?.agentStates?.forEach((item) => {
            if ((item.agentState === "BUSY" && item.callState === "TRYING") ||
                (item.agentState === "BUSY" && item.callState === "CONNECTING") ||
                (item.agentState === "BUSY" && item.callState === "IN_SERVICE") ||
                (item.agentState === "BUSY_LOCKED" && item.callState === "TRYING") ||
                (item.agentState === "BUSY_LOCKED" && item.callState === "CONNECTING") ||
                (item.agentState === "BUSY_LOCKED" && item.callState === "IN_SERVICE")
            ) {
                setTotalTalkCount(prevState => prevState + item.count)
                // console.log(2)
            }
        })
        fullData && fullData[0]?.agentStates?.forEach((item) => {
            if ((item.agentState === "BUSY" && item.callState === "TRYING") ||
                (item.agentState === "BUSY" && item.callState === "CONNECTING") ||
                (item.agentState === "BUSY" && item.callState === "IN_SERVICE") ||
                (item.agentState === "BUSY" && item.callState === "POST_SERVICE") ||
                (item.agentState === "BUSY_LOCKED" && item.callState === "TRYING") ||
                (item.agentState === "BUSY_LOCKED" && item.callState === "CONNECTING") ||
                (item.agentState === "BUSY_LOCKED" && item.callState === "IN_SERVICE") ||
                (item.agentState === "BUSY_LOCKED" && item.callState === "POST_SERVICE")
            ) {
                setTotalBusyCount(prevState => prevState + item.count)
                // console.log(3)
            }
        })
        fullData && fullData[0]?.agentStates?.forEach((item) => {
            if (item.agentState === "READY" && item.callState === "UNKNOWN") {
                setTotalReadyCount(prevState => prevState + item.count)
                // console.log(4)
            }
        })
        fullData && fullData[0]?.agentStates?.forEach((item) => {
            if ((item.agentState === "LOCKED" && item.callState === "UNKNOWN") ||
                (item.agentState === "LOCKED" && item.callState === "NULL") ||
                (item.agentState === "LAZY" && item.callState === "UNKNOWN") ||
                (item.agentState === "LAZY" && item.callState === "NULL")
            ) {
                setTotalBlockCount(prevState => prevState + item.count)
                // console.log(5)
            }
        })
        fullData && fullData[0]?.agentStates?.forEach((item) => {
            if ((item.agentState === "BUSY" && item.callState === "POST_SERVICE") ||
                (item.agentState === "BUSY_LOCKED" && item.callState === "POST_SERVICE")
            ) {
                setTotalBlockLockedCount(prevState => prevState + item.count)
                // console.log(6)
            }
        })
        fullData && fullData[0]?.agentStates?.forEach((item) => {
            if (item.agentState === "RELAX" && item.callState === "NULL") {
                setTotalRelaxCount(prevState => prevState + item.count)
                // console.log(7)
            }
        })
    }, [fullData])


    return (
        <div>
            <div className="progress__box">
                <h1>Operatorlarning joriy holati haqida ma'lumot</h1>
                <div className="progress">
                    <div>
                        <div className="progress__title">
                            <p>Ro’yxatdan o’tgan operatorlar soni</p>
                        </div>
                        {/*<div className="progress">*/}
                        {/*    <div className="bar" style={{width: '85%'}}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <LineChart total={totalCount}
                                   size={SIZE_CHART}
                                   strokeWidth={STROKE_WIDTH}/>
                    </div>
                    <div className="circle__end">
                        <span>{totalCount}</span>
                    </div>
                </div>
                <div className="progress">
                    <div>
                        <div className="progress__title">
                            <p>Suhbatlashayotgan operatorlar soni </p>
                        </div>
                        {/*<div className="progress">*/}
                        {/*    <div className="bar" style={{width: '35%'}}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <LineChart total={totalTalkCount}
                                   size={SIZE_CHART}
                                   strokeWidth={STROKE_WIDTH}/>
                    </div>
                    <div className="circle__end">
                        <span>{totalTalkCount}</span>
                    </div>
                </div>
                <div className="progress">
                    <div>
                        <div className="progress__title">
                            <p>Band tayyor operatorlar soni </p>
                        </div>
                        {/*<div className="progress">*/}
                        {/*    <div className="bar" style={{width: '25%'}}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <LineChart total={totalBusyCount}
                                   size={SIZE_CHART}
                                   strokeWidth={STROKE_WIDTH}/>
                    </div>
                    <div className="circle__end">
                        <span>{totalBusyCount}</span>
                    </div>
                </div>
                <div className="progress">
                    <div>
                        <div className="progress__title">
                            <p>Suhbat uchun tayyor operatorlar soni </p>
                        </div>
                        {/*<div className="progress">*/}
                        {/*    <div className="bar" style={{width: '55%'}}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <LineChart total={totalReadyCount}
                                   size={SIZE_CHART}
                                   strokeWidth={STROKE_WIDTH}/>
                    </div>
                    <div className="circle__end">
                        <span>{totalReadyCount}</span>
                    </div>
                </div>
                <div className="progress">
                    <div>
                        <div className="progress__title">
                            <p>Bloklangan holatdagi operatorlar soni</p>
                        </div>
                        {/*<div className="progress">*/}
                        {/*    <div className="bar" style={{width: '55%'}}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <LineChart total={totalBlockCount}
                                   size={SIZE_CHART}
                                   strokeWidth={STROKE_WIDTH}/>
                    </div>
                    <div className="circle__end">
                        <span>{totalBlockCount}</span>
                    </div>
                </div>
                <div className="progress">
                    <div>
                        <div className="progress__title">
                            <p>Xizmatdan keyingi holatdagi operatorlar soni</p>
                        </div>
                        {/*<div className="progress">*/}
                        {/*    <div className="bar" style={{width: '5%'}}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <LineChart total={totalBlockLockedCount}
                                   size={SIZE_CHART}
                                   strokeWidth={STROKE_WIDTH}/>
                    </div>
                    <div className="circle__end">
                        <span>{totalBlockLockedCount}</span>
                    </div>
                </div>
                <div className="progress">
                    <div>
                        <div className="progress__title">
                            <p>Dam olayotgan operatorlar soni</p>
                        </div>
                        {/*<div className="progress">*/}
                        {/*    <div className="bar" style={{width: '5%'}}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <LineChart total={totalRelaxCount}
                                   size={SIZE_CHART}
                                   strokeWidth={STROKE_WIDTH}/>
                    </div>
                    <div className="circle__end">
                        <span>{totalRelaxCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OperatorInfoCount;