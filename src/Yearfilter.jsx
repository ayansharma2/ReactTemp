import React, { Component } from "react";

class Yearfilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-row mx-8 mb-5 justify-between">
        <span className="text-white font-semibold ">Filter by Year</span>
        <select
          name="Year"
          id="year"
          onChange={this.props.onYearSelected}
          className="px-4 rounded-md py-1"
        >
          <option value="none">None</option>
          {this.props.yearList.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Yearfilter;
