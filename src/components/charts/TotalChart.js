import React, {} from 'react';
import {PieChart, Pie, Cell} from 'recharts';

const data = [
    {value: 0},
    {value: 100},
];
const COLORS = ['#E7F1FC', '#0E3EA8'];

const TotalChart = () => {
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
                          strokeWidth={0.5}
                          stroke={COLORS[1]}
                    />
                ))}
            </Pie>
        </PieChart>
    );
}

export default TotalChart;
