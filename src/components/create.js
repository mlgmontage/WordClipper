import { Component } from "react";

class Create extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div class="six columns">
            <label for="word">
              <strong>Word</strong>
            </label>
            <textarea
              name="word"
              id="word"
              className="u-full-width input-box"
              style={{ fontSize: "36px", fontWeight: "bold" }}
            ></textarea>
          </div>
          <div class="six columns">
            <label for="description">
              <strong>Description</strong>
            </label>
            <textarea
              name="word"
              id="description"
              className="u-full-width input-box"
            ></textarea>
          </div>
        </div>
        <br />
        <div class="row" style="text-align: center">
          <span
            className="fa fa-paperclip"
            style={{ fontSize: "48px", cursor: "pointer" }}
          ></span>
        </div>
      </div>
    );
  }
}

export default Create;
