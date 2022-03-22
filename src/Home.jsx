import { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  getDataFromAPI = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          isLoaded: true,
          data: response.results[0],
        });
      });
  };

  render() {
    return (
      <div className="bg-gray-500 w-full h-full fixed flex flex-col justify-center items-center">
        {this.state.isLoaded ? (
          <this.LoadingComponent />
        ) : (
          <this.HomeComponene />
        )}
      </div>
    );
  }

  HomeComponene = () => {
    return <div />;
  };

  LoadingComponent = () => {
    return (
      <div className="w-1/3 bg-white rounded-2xl flex flex-col justify-center items-center py-5">
        <svg
          class="w-12 h-12 border-2 border-gray-900 rounded-full animate-spin"
          viewBox="0 0 24 24"
        />
      </div>
    );
  };
}

export default Home;
