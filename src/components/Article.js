import React, { Component } from "react";
import Menu from "./Menu";
import Apropos from "./Apropos";
import Formation from "./Formation";
import Experience from "./Experience";
import Competences from "./Competences";
import Certifications from "./Certifications";

export default class Article extends Component {
  state = {
    apropos: false,
    formation: false,
    experience: false,
    competences: false,
    certifications: false,
  };

  handleApropos = (e) => {
    this.setState({
      apropos: true,
      formation: false,
      experience: false,
      competences: false,
      certifications: false,
    });
  };

  handleFormation = (e) => {
    this.setState({
      apropos: false,
      formation: true,
      experience: false,
      competences: false,
      certifications: false,
    });
  };

  handleExperience = (e) => {
    this.setState({
      apropos: false,
      formation: false,
      experience: true,
      competences: false,
      certifications: false,
    });
  };

  handleCompetence = (e) => {
    this.setState({
      apropos: false,
      formation: false,
      experience: false,
      competences: true,
      certifications: false,
    });
  };

  handleCertifications = (e) => {
    this.setState({
      apropos: false,
      formation: false,
      experience: false,
      competences: false,
      certifications: true,
    });
  };

  render() {
    return this.state.apropos ? (
      <div className="container">
        <div className="row">
          <div className="col-sm-8" style={{ backgroundColor: "blue" }}>
            <Apropos />
          </div>
          <div className="col-sm" style={{ backgroundColor: "orange" }}>
            <Menu
              handleApropos={this.handleApropos}
              handleFormation={this.handleFormation}
              handleExperience={this.handleExperience}
              handleCompetence={this.handleCompetence}
              handleCertifications={this.handleCertifications}
            />
          </div>
        </div>
      </div>
    ) : this.state.formation ? (
      <div className="container">
        <div className="row">
          <div className="col-sm-8" style={{ backgroundColor: "blue" }}>
            <Formation />
          </div>
          <div className="col-sm" style={{ backgroundColor: "orange" }}>
            <Menu
              handleApropos={this.handleApropos}
              handleFormation={this.handleFormation}
              handleExperience={this.handleExperience}
              handleCompetence={this.handleCompetence}
              handleCertifications={this.handleCertifications}
            />
          </div>
        </div>
      </div>
    ) : this.state.experience ? (
      <div className="container">
        <div className="row">
          <div className="col-sm-8" style={{ backgroundColor: "blue" }}>
            <Experience />
          </div>
          <div className="col-sm" style={{ backgroundColor: "orange" }}>
            <Menu
              handleApropos={this.handleApropos}
              handleFormation={this.handleFormation}
              handleExperience={this.handleExperience}
              handleCompetence={this.handleCompetence}
              handleCertifications={this.handleCertifications}
            />
          </div>
        </div>
      </div>
    ) : this.state.competences ? (
      <div className="container">
        <div className="row">
          <div className="col-sm-8" style={{ backgroundColor: "blue" }}>
            <Competences />
          </div>
          <div className="col-sm" style={{ backgroundColor: "orange" }}>
            <Menu
              handleApropos={this.handleApropos}
              handleFormation={this.handleFormation}
              handleExperience={this.handleExperience}
              handleCompetence={this.handleCompetence}
              handleCertifications={this.handleCertifications}
            />
          </div>
        </div>
      </div>
    ) : this.state.certifications ? (
      <div className="container">
        <div className="row">
          <div className="col-sm-8" style={{ backgroundColor: "blue" }}>
            <Certifications />
          </div>
          <div className="col-sm" style={{ backgroundColor: "orange" }}>
            <Menu
              handleApropos={this.handleApropos}
              handleFormation={this.handleFormation}
              handleExperience={this.handleExperience}
              handleCompetence={this.handleCompetence}
              handleCertifications={this.handleCertifications}
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-sm-8" style={{ backgroundColor: "blue" }}></div>
          <div className="col-sm" style={{ backgroundColor: "orange" }}>
            <Menu
              handleApropos={this.handleApropos}
              handleFormation={this.handleFormation}
              handleExperience={this.handleExperience}
              handleCompetence={this.handleCompetence}
              handleCertifications={this.handleCertifications}
            />
          </div>
        </div>
      </div>
    );
  }
}
