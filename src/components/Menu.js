import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <button class="my-button" onClick={() => this.props.handleChange('apropos')}>A propos de moi</button>
          <button onClick={() => this.props.handleChange('formation')}>Formation</button>
          <button onClick={() => this.props.handleChange('experience')}>
            Expérience professionelle
          </button>
          <button onClick={() => this.props.handleChange('competences')}>Compétences</button>
          <button onClick={() => this.props.handleChange('certifications')}>
            Certifications
          </button>
        </ul>
      </div>
    );
  }
}
