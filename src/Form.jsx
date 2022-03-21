import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      amount: "",
      isFormVisible: false,
    };
  }

  titleChangeListener = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  dateChangeListener = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
  amountChangeListener = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  addExpense = () => {
    if (
      this.state.amount === "" ||
      this.state.date === "" ||
      this.state.title === ""
    ) {
      alert("Enter all the fields");
    } else {
      let item = {
        date: new Date(this.state.date),
        title: this.state.title,
        amount: `$${this.state.amount}`,
      };
      this.props.onItemAdded(item);
      this.setState({
        title: "",
        date: "",
        amount: "",
      });
    }
  };

  changeVisibility = () => {
    this.setState((prevState) => {
      return { isFormVisible: !prevState.isFormVisible };
    });
  };

  render() {
    if (this.state.isFormVisible) {
      return <this.Card />;
    } else {
      return (
        <div className="bg-blue-400 py-4 rounded-xl mx-48 mt-12 flex flex-col justify-center items-center">
          <div
            className="px-6 py-2 mx-5 hover:bg-purple-800 bg-purple-900 text-white rounded-lg cursor-pointer"
            onClick={this.changeVisibility}
          >
            Add New Expense
          </div>
        </div>
      );
    }
  }

  Card = () => {
    return (
      <div className="bg-blue-400 pb-4 rounded-xl mx-48 mt-12 flex flex-col justify-center items-end">
        <form className="w-full">
          <div className="grid grid-cols-2 mr-48">
            <div className="flex flex-col px-5 py-2">
              <label className="text-white font-bold ml-1">Title</label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.titleChangeListener}
                className="rounded-lg py-2 px-2 mt-1"
              />
            </div>
            <div className="flex flex-col px-5 py-2 ">
              <label className="text-white font-bold ml-1">Amount</label>
              <input
                type="number"
                min="100"
                value={this.state.amount}
                onChange={this.amountChangeListener}
                step="50"
                className="rounded-lg py-2 px-2 mt-1"
              />
            </div>
            <div className="flex flex-col px-5 py-2 ">
              <label className="text-white font-bold ml-1">Date</label>
              <input
                type="date"
                value={this.state.date}
                onChange={this.dateChangeListener}
                className="rounded-lg py-2 mt-1 px-2 placeholder-slate-100"
                placeholder="yyyy:mm:dd"
                min="2022-03-20"
                max="2031-03-20"
              />
            </div>
          </div>
        </form>
        <div className="flex flex-row  justify-end">
          <div
            className="px-6 py-2 mx-5 hover:bg-purple-800 bg-purple-900 text-white rounded-lg cursor-pointer"
            onClick={this.changeVisibility}
          >
            Cancel
          </div>
          <div
            className="px-6 py-2 mx-5 hover:bg-purple-800 bg-purple-900 text-white rounded-lg cursor-pointer"
            onClick={this.addExpense}
          >
            Add Expense
          </div>
        </div>
      </div>
    );
  };
}

export default Form;
