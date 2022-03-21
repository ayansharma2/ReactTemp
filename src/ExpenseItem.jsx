import React, { Component } from "react";
import BarChart from "./BarChart";
import Form from "./Form";
import Yearfilter from "./Yearfilter";
class ExpenseItem extends Component {
  constructor(props) {
    super(props);
    const items = [
      {
        date: new Date("2020", "2", "10"),
        title: "Temp Insurance",
        amount: "$250.00",
      },
      {
        date: new Date("2021", "3", "15"),
        title: "Random Insurance",
        amount: "$160.00",
      },
    ];
    const years = ["2020", "2021"];
    this.state = {
      selectedYear: "none",
      items: items,
      yearList: years,
      selectedYear: "none",
    };
  }

  addItem = (item) => {
    this.setState((lastState) => ({
      items: [item, ...lastState.items],
    }));
    let years = this.state.yearList;
    if (years.indexOf(item.date.getFullYear()) == -1) {
      years.push(item.date.getFullYear());
      years.sort();
      this.setState({
        yearList: years,
      });
    }
  };

  onYearSelected = (year) => {
    this.setState({
      selectedYear: year.target.value,
    });
  };

  getFilteredArray = () => {
    return this.state.items.filter((item) => {
      if (this.state.selectedYear === "none") {
        return true;
      } else {
        return item.date.getFullYear() == this.state.selectedYear;
      }
    });
  };

  render() {
    return (
      <div className="flex flex-col">
        <Form onItemAdded={this.addItem} />
        <div className="bg-gray-500 flex flex-col mt-12 py-5 mx-48 rounded-xl">
          {this.state.yearList.length > 0 && (
            <Yearfilter
              yearList={this.state.yearList}
              onYearSelected={this.onYearSelected}
            />
          )}
          <BarChart expenses={this.getFilteredArray()} />
          {this.state.items
            .filter((item) => {
              if (this.state.selectedYear === "none") {
                return true;
              } else {
                return item.date.getFullYear() == this.state.selectedYear;
              }
            })
            .map((item, index) => (
              <div
                key={index}
                className={`bg-slate-400 ${
                  index != 0 ? "mt-5" : ""
                } mx-7 py-1 px-1 rounded-xl flex flex-row justify-between items-center`}
              >
                <div className="flex-row flex items-center">
                  <div className="flex flex-col  bg-gray-700 items-center rounded-xl px-5 py-1 border-white border-2">
                    <span className="text-white font-extrabold text-xs">
                      {item.date.toLocaleString("default", { month: "short" })}
                    </span>
                    <span className="text-white text-xs">
                      {item.date.getFullYear()}
                    </span>
                    <span className="text-white font-extrabold text-lg">
                      {item.date.getDate()}
                    </span>
                  </div>
                  <span className="text-white font-bold ml-3">
                    {item.title}
                  </span>
                </div>
                <div className="px-5 py-2 mr-6 border-white border-2 bg-blue-700 rounded-lg text-white">
                  {item.amount}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
