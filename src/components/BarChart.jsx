import React from "react";
import "./BarChart.css";

const BarChart = ({ data, calculateBarStyles }) => {
  return (
    <div className="bar-container">
      <div
        className="bar-modal"
        style={{
          backgroundColor: "hsl(25, 47%, 15%)",
          color: "white",
          fontSize: ".9rem",
          marginBlock: "5px",
          marginLeft: "-8px",
          padding: `7px 5px`,
          borderRadius: "7px",
        }}
      >
        ${data.amount}
      </div>
      <div
        style={calculateBarStyles(data.amount, data.id)}
        className="bar"
      ></div>
      <p>{data.day}</p>
    </div>
  );
};

export default BarChart;
