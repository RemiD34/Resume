import React, { Component } from "react";
import man from "../man.svg";
import linkedin from "../linkedin.png";
import github from "../logo.png";
import freecodecamp from "../fcc_secondary_small.svg";

export default class Portrait extends Component {
  render() {
    return (
      <div>
        <img src={man} alt=""></img>
        <h1>Nom prénom</h1>
        <p>Fullstack Developer</p>
        <img src={linkedin} alt=""></img>
        <img src={github} alt=""></img>
        <img src={freecodecamp} alt=""></img>
      </div>
    );
  }
}
