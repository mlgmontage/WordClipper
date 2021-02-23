import React, { Component } from "react";
import data from "../../data/data";

class Train extends Component {
  state = {
    index: 0,
    data,
  };
  render() {
    return (
      <div>
        <div className="row square">
          <div className="six columns">
            <h2>{this.state.data[this.state.index].word}</h2>
          </div>
          <div className="six columns" style={{ fontSize: "18px" }}>
            {this.state.data[this.state.index].description}
          </div>
        </div>
        <div className="row controls" style={{ fontSize: "48px" }}>
          <div className="five columns">
            <span className="fa fa-arrow-left"></span>
          </div>

          <div className="two columns" style={{ textAlign: "center" }}>
            <span className="fa fa-check"></span>
            <br />
            <a className="fa fa-plus" href="./create.html"></a>
          </div>

          <div className="five columns" style={{ textAlign: "right" }}>
            <span className="fa fa-arrow-right"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Train;
