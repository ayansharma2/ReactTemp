import React, { Component } from "react";
import ErrorModal from "./ErrorModal";
import Form from "./Form";
import UsersList from "./UsersList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogVisible: false,
      users: [],
      dialogErrorMessage: "",
    };
  }

  onDialogDismiss = () => {
    this.setState({
      isDialogVisible: false,
    });
  };

  onUserAdded = (user) => {
    this.setState((prevState) => {
      return { users: [user, ...prevState.users] };
    });
  };

  onError = (message) => {
    this.setState({
      dialogErrorMessage: message,
      isDialogVisible: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.isDialogVisible && (
          <ErrorModal
            message={this.state.dialogErrorMessage}
            onDismiss={this.onDialogDismiss}
          />
        )}
        <div className="bg-gray-800 flex flex-col w-full h-full fixed items-center">
          <Form onUserAdded={this.onUserAdded} onError={this.onError} />
          {this.state.users.length > 0 && (
            <UsersList users={this.state.users} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
