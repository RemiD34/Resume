import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <button class="my-button" onClick={this.props.handleApropos}>A propos de moi</button>
          <button onClick={this.props.handleFormation}>Formation</button>
          <button onClick={this.props.handleExperience}>
            Expérience professionelle
          </button>
          <button onClick={this.props.handleCompetence}>Compétences</button>
          <button onClick={this.props.handleCertifications}>
            Certifications
          </button>
        </ul>
      </div>
    );
  }
}
