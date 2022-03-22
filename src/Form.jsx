import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      age: "",
      isAgeError: false,
    };
  }

  onUserNameChanged = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  onAgeChanged = (event) => {
    console.log(event);
    this.setState({
      age: event.target.value,
    });
    if (Number.parseInt(event.target.value) < 0) {
      this.setState({
        isAgeError: true,
      });
    } else {
      this.setState({
        isAgeError: false,
      });
    }
  };

  onSubmitClicked = () => {
    if (this.state.userName.trim().length === 0) {
      this.props.onError("UserName Can't be Empty");
    } else if (this.state.age.trim().length === 0) {
      this.props.onError("Age Can't be Empty");
    } else if (Number.parseInt(this.state.age) < 0) {
      this.props.onError("Age can't be < 0");
    } else {
      let user = {
        userName: this.state.userName,
        age: this.state.age,
      };

      this.props.onUserAdded(user);
      this.setState({
        age: "",
        userName: "",
      });
    }
  };
  render() {
    return (
      <div className="bg-white rounded-2xl mt-10 w-2/3 px-10 py-5 flex flex-col ">
        <label className="text-black font-bold mx-1">Username</label>
        <input
          value={this.state.userName}
          onChange={this.onUserNameChanged}
          className="border-black border-2 rounded-md mt-3 py-2 px-3"
        />
        <label className="text-black font-bold mx-1 mt-5">Age</label>
        <input
          type="number"
          value={this.state.age}
          onChange={this.onAgeChanged}
          className={`border rounded-md mt-3 py-2 px-3 ${
            this.state.isAgeError ? "border-red-900" : "border-black"
          } focus:${
            this.state.isAgeError ? "border-red-900" : "border-black"
          } focus:border`}
        />
        <div className="justify-end flex mt-5">
          <span
            onClick={this.onSubmitClicked}
            className="text-white bg-purple-700 w-fit content-end px-5 cursor-pointer py-2 rounded-md"
          >
            Submit
          </span>
        </div>
      </div>
    );
  }
}

export default Form;
