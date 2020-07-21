import React, { Component } from "react";
import Menu from "./Menu";
import Apropos from "./Apropos";
import Formation from "./Formation";
import Experience from "./Experience";
import Competences from "./Competences";
import Certifications from "./Certifications";

export default class Article extends Component {
  state = {
    page: 'apropos'
  };


  handleChange = (e) => {
    this.setState({
      page: e
    });
  };

  displayPage = () => {
    if (this.state.page === "apropos") {
      return <Apropos />;
    } else if (this.state.page === "formation") {
      return <Formation />;
    } else if (this.state.page === "experience") {
      return <Experience />;
    } else if (this.state.page === "competences") {
      return <Competences />;
    } else if (this.state.page === "certifications") {
      return <Certifications />;
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8" style={{ backgroundColor: "blue" }}>
          {this.displayPage()}
          </div>
          <div className="col-sm" style={{ backgroundColor: "orange" }}>
            <Menu handleChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}
