import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Password extends Component {
  state = {
    password: "",
  };

  handleInput = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1 className="green">Mot de passe</h1>
        <input onChange={this.handleInput}></input>
        <button
          className="btn-primary btn-lg"
          onClick={
            this.state.password === "chowmi"
              ? this.props.fonction
              : console.log("nok")
          }
        ></button>
      </div>
    );
  }
}
