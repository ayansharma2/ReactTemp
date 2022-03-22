import React, { Component } from "react";

class ErrorModal extends Component {
  render() {
    return (
      <div
        onClick={this.props.onDismiss}
        className="bg-gray-400 bg-opacity-50  flex justify-center items-center w-full h-full fixed z-10"
      >
        <div className="bg-white h-fit flex flex-col w-1/2 rounded-xl ">
          <span className="text-white font-bold text-base bg-purple-800 py-5 rounded-t-xl flex justify-center w-full text-center">
            Error
          </span>

          <span className="px-3 py-14 text-center">{this.props.message}</span>
          <span
            onClick={this.props.onDismiss}
            className="self-end mx-5 my-4 cursor-pointer bg-purple-800 text-white rounded-md px-3 py-2"
          >
            Submit
          </span>
        </div>
      </div>
    );
  }
}

export default ErrorModal;
