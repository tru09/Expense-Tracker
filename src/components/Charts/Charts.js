import React from "react";

import ChartBar from "./ChartBar";
import "./Charts.css";

const Charts = (props) => {
    const MaxMonth=props.datapointer.map(datapoint=>datapoint.value)
    const TotalMaximun=Math.max(...MaxMonth)
  return (
    <div className="chart">
      {props.datapointer.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          key={datapoint.label}
          label={datapoint.label}
          maxValue={TotalMaximun}
        />
      ))}
    </div>
  );
};

export default Charts;