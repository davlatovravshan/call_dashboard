import React, {useEffect, useState} from 'react';
import {PieChart, Pie, Cell,} from 'recharts';

const COLORS = ['#E7F1FC', '#0E3EA8'];

const OthersChart = ({totalCalls, othersCalls}) => {

    const [data, setData] = useState([
        {value: 0}, {value: 0}
    ])

    useEffect(() => {
        let item = ((totalCalls - othersCalls) / totalCalls) * 100
        let item2 = [{value: Math.round(item)}, {value: 100 - Math.round(item)}]
        setData(item2)
    }, [totalCalls, othersCalls])

    return (
        <PieChart width={110} height={110}>
            <Pie
                data={data}
                // cx={120}
                // cy={200}
                innerRadius={45}
                outerRadius={55}
                fill="#ffffff"
                paddingAngle={2}
                dataKey="value"
                startAngle={-270}

            >
                {/*<Label position={"center"}>4044 Boshqalar</Label>*/}
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          strokeWidth={0.5}
                          stroke={COLORS[1]}
                    />
                ))}
            </Pie>
            {/*<Tooltip/>*/}
        </PieChart>
    );

}

export default OthersChart;
