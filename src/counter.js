import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
 
  }



  render() {
    return (
      <React.Fragment>
        <div className={this.getBadgeClasses()}>{this.getNumber()}</div>
        <button
          onClick={()=>this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses=()=>{
      let classes = "badge m-2 p-2 badge-";
      classes += (this.props.counter.value === 0) ? "warning " : "primary"
      return classes;
  }


  getNumber=()=>{
      return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }


}

export default Counter;
