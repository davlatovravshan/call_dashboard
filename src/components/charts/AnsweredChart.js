import React, {useEffect, useState} from 'react';
import {PieChart, Pie, Cell} from 'recharts';

const COLORS = ['#E7F1FC', '#004EA5'];

const AnsweredChart = ({totalCals, answeredCals}) => {
    const [data, setData] = useState([
        {value: 0}, {value: 0}
    ])

    useEffect(() => {
        let item = ((totalCals - answeredCals) / totalCals) * 100
        let item2 = [{value: 100 - Math.round(item)}, {value: Math.round(item)}]
        setData(item2)
    }, [totalCals, answeredCals])


    return (
        <PieChart width={110} height={110}>
            <Pie
                data={data}
                innerRadius={45}
                outerRadius={55}
                fill="#ffffff"
                paddingAngle={2}
                dataKey="value"
                startAngle={-270}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          strokeWidth={0.2}
                          stroke={COLORS[1]}
                    />
                ))}
            </Pie>
        </PieChart>
    );

}
export default AnsweredChart;
