import React, { Component } from "react";
import Password from "./components/Password";
import Resume from "./components/Resume";

class App extends Component {
  state = {
    password: false,
  };

  changePassword = () => {
    this.setState({
      password: true,
    });
  };

  render() {
    return (
      <div>
        {/* {this.state.password ? (
          <Resume />
        ) : (
          <Password
            fonction={this.changePassword}
            leState={this.state}
          ></Password>
        )} */}
        <Resume />
      </div>
    );
  }
}

export default App;
