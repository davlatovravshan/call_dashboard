import React, {useContext} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';
// import calsData from "../../history.json";
import {GlobalContext} from "../../context/globalContext";

const SimpleLineChart = () => {
    const {monthData} = useContext(GlobalContext);
    // const [dataRegions, setDataRegions] = useState([]);
    // console.log(monthData);


    // useEffect(() => {
    //     let jan = {name: "Jan", received: 0, answered: 0};
    //     let feb = {name: "Feb", received: 0, answered: 0};
    //     let mar = {name: "mar", received: 0, answered: 0};
    //     let apr = {name: "apr", received: 0, answered: 0};
    //     let mey = {name: "may", received: 0, answered: 0};
    //     let jun = {name: "Jun", received: 0, answered: 0};
    //     let jul = {name: "Jul", received: 0, answered: 0};
    //     let avg = {name: "avg", received: 0, answered: 0};
    //     let sep = {name: "Sep", received: 0, answered: 0};
    //     let okt = {name: "Oct", received: 0, answered: 0};
    //     let nov = {name: "nov", received: 0, answered: 0};
    //     let deg = {name: "Dec", received: 0, answered: 0};
    //
    //     calsData.map((item) => {
    //         item.months.map((itemMoths) => {
    //             switch (itemMoths.month) {
    //                 case "Январь" :
    //                     jan.received += itemMoths.received;
    //                     jan.answered += itemMoths.answered;
    //                     break;
    //                 case "Февраль" :
    //                     feb.received += itemMoths.received;
    //                     feb.answered += itemMoths.answered;
    //                     break;
    //                 case "Март" :
    //                     mar.received += itemMoths.received;
    //                     mar.answered += itemMoths.answered;
    //                     break;
    //                 case "Апрель" :
    //                     apr.received += itemMoths.received;
    //                     apr.answered += itemMoths.answered;
    //                     break;
    //                 case "Май" :
    //                     mey.received += itemMoths.received;
    //                     mey.answered += itemMoths.answered;
    //                     break;
    //                 case "Июнь" :
    //                     jun.received += itemMoths.received;
    //                     jun.answered += itemMoths.answered;
    //                     break;
    //                 case "Июль" :
    //                     jul.received += itemMoths.received;
    //                     jul.answered += itemMoths.answered;
    //                     break;
    //                 case "Август" :
    //                     avg.received += itemMoths.received;
    //                     avg.answered += itemMoths.answered;
    //                     break;
    //                 case "Сентябрь" :
    //                     sep.received += itemMoths.received;
    //                     sep.answered += itemMoths.answered;
    //                     break;
    //                 case "Октябр" :
    //                     okt.received += itemMoths.received;
    //                     okt.answered += itemMoths.answered;
    //                     break;
    //                 case "Ноябр" :
    //                     nov.received += itemMoths.received;
    //                     nov.answered += itemMoths.answered;
    //                     break;
    //                 case "Декабр" :
    //                     deg.received += itemMoths.received;
    //                     deg.answered += itemMoths.answered;
    //                     break;
    //             }
    //         })
    //
    //     })
    //     setDataRegions({dataRegions: [jan, feb, mar, apr, mey, jun, jul, avg, sep, okt, nov, deg]});
    // }, [])


    return (
        <ResponsiveContainer width={"92%"} height="100%">
            <LineChart
                // width={500}
                // height={300}
                data={monthData}
                // margin={{
                //     top: 5,
                //     right: 20,
                //     left: 20,
                //     bottom: 5,
                // }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" style={{fontSize: 14}}/>
                <YAxis style={{fontSize: 14}}/>
                <Tooltip offset={50} cursor={false} active={true} contentStyle={{borderRadius: '10px'}}/>
                {/*<Legend />*/}
                <Line type="monotone" name="Jami" dataKey="received" stroke="#CF4B4B" activeDot={{r: 8}}/>
                <Line type="monotone" name="Javob berilgan" dataKey="answered" stroke="#5C86E2"/>
                {/*<Line type="monotone" name="Yoqotilgan" dataKey="lost" stroke="#004EA5"/>*/}
            </LineChart>
        </ResponsiveContainer>
    );

}

export default SimpleLineChart;


// [
//     {
//         months: "2021-01-01T00:00:00.000Z",
//         answered: 47690,
//         lost: 36408,
//         received: 84098,
//         monthsName: "January",
//         name: "Jan"
//     },
//     {
//         months: "2021-02-01T00:00:00.000Z",
//         answered: "62229",
//         lost: "43050",
//         received: "105289",
//         monthsName: "February",
//         name: "Feb"
//     },
//     {
//         months: "2021-03-01T00:00:00.000Z",
//         answered: "84791",
//         lost: "59281",
//         received: "144075",
//         monthsName: "march",
//         name: "mar"
//     },
//     {
//         months: "2021-04-01T00:00:00.000Z",
//         answered: "91304",
//         lost: "67943",
//         received: "159248",
//         monthsName: "april",
//         name: "apr"
//     },
//     {
//         months: "2021-05-01T00:00:00.000Z",
//         answered: "139345",
//         lost: "108954",
//         received: "248300",
//         monthsName: "may",
//         name: "may"
//     },
//     {
//         months: "2021-06-01T00:00:00.000Z",
//         answered: "179056",
//         lost: "136107",
//         received: "315163",
//         monthsName: "June",
//         name: "Jun"
//     },
//     {
//         months: "2021-07-01T00:00:00.000Z",
//         answered: "211172",
//         lost: "156711",
//         received: "367884",
//         monthsName: "July",
//         name: "Jul"
//     },
//     {
//         months: "2021-08-01T00:00:00.000Z",
//         answered: "216546",
//         lost: "145899",
//         received: "362446",
//         monthsName: "august",
//         name: "aug"
//     },
//     {
//         months: "2021-09-01T00:00:00.000Z",
//         answered: 202783,
//         lost: 104615,
//         received: 307399,
//         monthsName: "September",
//         name: "Sep"
//     }
// ]
