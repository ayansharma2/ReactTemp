import React, { Component } from "react";
import ChatBar from "./ChatBar";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const chartDataPoints = [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "Jul", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dev", value: 0 },
    ];
    let maxPoint = 0;
    for (let expense of this.props.expenses) {
      let monthIndex = expense.date.getMonth();
      let amount = parseInt(expense.amount.replace("$", ""));
      maxPoint = Math.max(maxPoint, amount);
      chartDataPoints[monthIndex].value += amount;
    }

    for (let dataPoint of chartDataPoints) {
      dataPoint.value = Math.round((dataPoint.value / maxPoint) * 100) + "%";
    }

    return (
      <div className="flex flex-row justify-around mb-5">
        {chartDataPoints.map((dataPoint) => (
          <ChatBar dataPoint={dataPoint} />
        ))}
      </div>
    );
  }
}

export default BarChart;
