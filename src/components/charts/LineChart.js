import React from 'react';
import {Line} from "rc-progress";

const LineChart = ({total, size, strokeWidth}) => {
    return (
        <>
            <Line percent={total}
                  strokeWidth={strokeWidth}
                  style={{width: size}}
                  strokeColor="#6495ed"/>
        </>
    );
};

export default LineChart;