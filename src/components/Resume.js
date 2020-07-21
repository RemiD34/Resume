import React, { Component } from "react";
import Portrait from "./Portrait";
import Article from "./Article";

export default class Resume extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "150px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="row">
          <div
            className="col-sm-3"
            style={{
              backgroundColor: "green",
            }}
          >
            <Portrait />
          </div>
          <div className="col-sm" style={{ backgroundColor: "red" }}>
            <Article />
          </div>
        </div>
      </div>
    );
  }
}
