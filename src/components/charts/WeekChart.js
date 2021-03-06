import React, {useContext, useEffect, useState} from 'react';
import {BarChart, Bar, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, Line} from 'recharts';
// import calsData from "../../history.json";
import {GlobalContext} from "../../context/globalContext";

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

const WeekChart = () => {
    const {monthDataByDate} = useContext(GlobalContext);
    const [data, setDate] = useState([]);
    useEffect(() => {
        setDate(monthDataByDate)
    }, [monthDataByDate])
    // const [dataRegions, setDataRegions] = useState([]);
    // console.log(dataRegions);
    //
    // useEffect(() => {
    //     let jan = {name: "Jan", received: 0, answered: 0};
    //     let feb = {name: "Feb", received: 0, answered: 0};
    //     let mar = {name: "Mar", received: 0, answered: 0};
    //     let apr = {name: "Apr", received: 0, answered: 0};
    //     let mey = {name: "May", received: 0, answered: 0};
    //     let jun = {name: "Jun", received: 0, answered: 0};
    //     let jul = {name: "Jul", received: 0, answered: 0};
    //     let avg = {name: "Avg", received: 0, answered: 0};
    //     let sep = {name: "Sep", received: 0, answered: 0};
    //     let okt = {name: "Okt", received: 0, answered: 0};
    //     let nov = {name: "Nov", received: 0, answered: 0};
    //     let deg = {name: "Deg", received: 0, answered: 0};
    //
    //     calsData.map((item) => {
    //         item.months.map((itemMoths) => {
    //             switch (itemMoths.month) {
    //                 case "????????????" :
    //                     jan.received += itemMoths.received;
    //                     jan.answered += itemMoths.answered;
    //                     break;
    //                 case "??????????????" :
    //                     feb.received += itemMoths.received;
    //                     feb.answered += itemMoths.answered;
    //                     break;
    //                 case "????????" :
    //                     mar.received += itemMoths.received;
    //                     mar.answered += itemMoths.answered;
    //                     break;
    //                 case "????????????" :
    //                     apr.received += itemMoths.received;
    //                     apr.answered += itemMoths.answered;
    //                     break;
    //                 case "??????" :
    //                     mey.received += itemMoths.received;
    //                     mey.answered += itemMoths.answered;
    //                     break;
    //                 case "????????" :
    //                     jun.received += itemMoths.received;
    //                     jun.answered += itemMoths.answered;
    //                     break;
    //                 case "????????" :
    //                     jul.received += itemMoths.received;
    //                     jul.answered += itemMoths.answered;
    //                     break;
    //                 case "????????????" :
    //                     avg.received += itemMoths.received;
    //                     avg.answered += itemMoths.answered;
    //                     break;
    //                 case "????????????????" :
    //                     sep.received += itemMoths.received;
    //                     sep.answered += itemMoths.answered;
    //                     break;
    //                 case "????????????" :
    //                     okt.received += itemMoths.received;
    //                     okt.answered += itemMoths.answered;
    //                     break;
    //                 case "??????????" :
    //                     nov.received += itemMoths.received;
    //                     nov.answered += itemMoths.answered;
    //                     break;
    //                 case "????????????" :
    //                     deg.received += itemMoths.received;
    //                     deg.answered += itemMoths.answered;
    //                     break;
    //             }
    //         })
    //
    //     })
    //     setDataRegions([jan, feb, mar, apr, mey, jun, jul, avg, sep, okt, nov, deg]);
    // }, [])
    return (
        <ResponsiveContainer width={"94%"} height="100%">
            <BarChart
                // width={804}
                // height={300}
                data={data}
                barSize={5}
            >
                <YAxis style={{fontSize: 14}}/>
                <XAxis dataKey="num" height={17} style={{fontSize: 14}}/>
                <Tooltip offset={50} cursor={false} active={true} contentStyle={{borderRadius: '10px'}}/>
                <CartesianGrid strokeDasharray="2 2"/>
                <Bar dataKey="received" name="Jami" fill="#FF0505" background={{fill: '#eeeeee'}}/>
                <Bar dataKey="answered" name="Javob berilgan" fill="#004EA5" background={{fill: '#eeeeee'}}/>
                <Bar name="Yoqotilgan" dataKey="lost" stroke="#004EA5" background={{fill: '#eeeeee'}}/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default WeekChart;
