import React, { Component } from "react";
class ChatBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Bar Init");
    return (
      <div className="bg-slate-700 h-24 w-4 rounded-lg flex flex-col justify-end">
        <div
          className="bg-white h-24 w-4 rounded-lg transition-all"
          style={{ height: this.props.dataPoint.value }}
        />
      </div>
    );
  }
}

export default ChatBar;
