import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const items = [
      {
        date: "Feb 21, 2020",
        title: "Temp Insurance",
        amount: "$250.00",
      },
      {
        date: "Jan 15, 2020",
        title: "Random Insurance",
        amount: "$160.00",
      },
    ];

    return items.filter(
      (item) =>
        item.amount === "$160.00" && (
          <div className="bg-slate-400 mt-7 mx-7 py-2 px-11 rounded-xl flex flex-row justify-between items-center">
            <div className="flex-row">
              <span className="text-white">{item.date}</span>
              <span className="text-white font-bold ml-3">{item.title}</span>
            </div>
            <div className="px-4 py-3 border-white border-2 bg-blue-700 rounded-lg text-white">
              {item.amount}
            </div>
          </div>
        )
    );
  }
}

export default Home;
