import React, { Component } from "react";

class Create extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="six columns">
            <label htmlFor="word">
              <strong>Word</strong>
            </label>
            <textarea
              name="word"
              id="word"
              className="u-full-width input-box"
              style={{ fontSize: 36 + "px", fontWeight: "bold" }}
            ></textarea>
          </div>
          <div className="six columns">
            <label htmlFor="description">
              <strong>Description</strong>
            </label>
            <textarea
              name="word"
              id="description"
              className="u-full-width input-box"
            ></textarea>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <span
            className="fa fa-paperclip"
            style={{ fontSize: 48 + "px", cursor: "pointer" }}
          ></span>
        </div>
      </div>
    );
  }
}

export default Create;
