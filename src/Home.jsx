import { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    let count = 0;
    while (count != 4) {
      this.getDataFromAPI();
      count++;
    }
  }

  getDataFromAPI = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((response) => {
        this.setState((prevState) => {
          return {
            isLoaded: true,
            data: [response.results[0], ...prevState.data],
          };
        });
      });
  };

  render() {
    return (
      <div className="bg-gray-500 w-full h-full fixed flex flex-row space-x-5 justify-center items-center">
        {this.state.isLoaded ? (
          <this.HomeComponene />
        ) : (
          <this.LoadingComponent />
        )}
      </div>
    );
  }

  HomeComponene = () => {
    return this.state.data.map((data) => {
      return (
        <div className="bg-white rounded-2xl flex flex-col justify-center space-y-1 items-center px-6 py-2 shadow-2xl shadow-blue-600">
          <img src={data.picture.large} className="rounded-full object-fill" />
          <span className="text-black font-bold mt-5">
            {"Name : " +
              data.name.title +
              ". " +
              data.name.first +
              " " +
              data.name.last}
          </span>
          <span className="font-bold">Email : </span>
          <span>{data.email}</span>
          <span className="font-bold">Age : </span>
          <span>{data.dob.age}</span>
          <span className="font-bold">Phone : </span>
          <span>{data.phone}</span>
          <span className="font-bold">Address : </span>
          <span>{data.location.state}</span>
        </div>
      );
    });
  };

  LoadingComponent = () => {
    return (
      <div className="w-1/3 bg-white rounded-2xl  py-5 flex flex-col justify-center items-center">
        <div className="w-12 h-12 border-8 border-gray-400 rounded-full " />
        <div
          className="w-12 h-12 border-b-8 border-t-8 border-gray-900 rounded-full animate-spin relative "
          style={{ top: "-48px" }}
        />
        <span className="relative font-bold" style={{ top: "-20px" }}>
          Getting Data
        </span>
      </div>
    );
  };
}

export default Home;
