import React, { Component } from "react";

class UsersList extends Component {
  render() {
    return (
      <div className="bg-white rounded-xl w-2/3 px-4 pb-4 mt-10">
        {this.props.users.map((user) => {
          return (
            <div className="border-gray-600 border-2 flex flex-col px-4 mt-3">
              <span>{user.userName}</span>
              <span>{user.age}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UsersList;
